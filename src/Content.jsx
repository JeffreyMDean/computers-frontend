import axios from "axios";    // library for making HTTP requests
import { useState, useEffect } from "react";
import { ComputersIndex } from "./ComputersIndex"; 
// component that displays list of computers
import { ComputersNew } from "./ComputersNew";

export function Content() { 
 const [computers, setComputers] = useState([]); // initializes state variable computers usings the useState hook...starts with an empty array. computers is the array that will eventually hold the list of computers while setComputers is the function to update the computers data. UseState is like a shelf that you can keep track of data that might change over time..starting with [] as initial value.

 const handleIndexComputers = () => {  // fetches list of computers from url
  console.log("handleIndexComputers");
  axios.get("http://localhost:3000/computers.json").then((response) => {
    console.log(response.data);
    setComputers(response.data); //  resets computers array to response.data (and r.d is an array)
  });
 };

                          //make/mode/year  //fx called once new computer added
 const handleCreateComputer = (params, successCallback) => {
  console.log("handleCreateComputer", params); // logs params for degugging
  axios.post("http://localhost:3000/photos.json", params).then((response) => {
    setComputers([...computers, response.data]); //adds new comp from r.d. to existing list of computers
    successCallback();
  });
 };
// axios.post sends post request to the server with new computer data
 useEffect(handleIndexComputers, []); // useEffect is there to tell React to do something (likely fetch data) after the component is first rendered on the screen. It calls handleIndexComputers after the component is shown on the screen for first time. the [] tells React to run the effect and since its empty it means run it once (if there was stuff in there React would run the effect whenever one of the variables change). Basically after it is first shown on the screen, it fetches the data (in this case the list of computers and updates the component's state with the data)

  return (          // specififes the JSX to be rendered by the Content component
    <div>
      <ComputersNew onCreateComputer={handleCreateComputer} />
      <ComputersIndex computers={computers} />  
    </div>
  );
}

// export function Content() { defines a new React functional component named Content
// When react renders content component, it renders the ComputersIndex component as well at the location of the <ComputersIndex />
// computers={computers} prop being passed to the ComputersIndex component
// This means the computers array defined in the Content component is being sent to the ComputersIndex component as a prop named computers
// so <computersIndex is the React component that is rendered and will look for the ComputersIndex component, computers is the name of the prop being passed into ComputersIndex (it is an attribute of ComputersIndex), and {computers} is defined as what is stored in the const computers variable...so it is the value of the computers prop