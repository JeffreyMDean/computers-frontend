import { ComputersIndex } from "./ComputersIndex";


export function Content() { 
  const computers = [     // array of objects
    {id: 1, make: "Apple", model: "Macbook Air", year: 2022},
    {id: 2, make: "Dell", model: "Inspiron", year: 2020},
  ];

  return (          // specififes the JSX to be rendered by the Content component
    <div>
      <ComputersIndex computers={computers} />  
    </div>
  );
}

// export function Content() { defines a new React functional component named Content
// When react renders content component, it renders the ComputersIndex component as well at the location of the <ComputersIndex />
// computers={computers} prop being passed to the ComputersIndex component
// This means the computers array defined in the Content component is being sent to the ComputersIndex component as a prop named computers
// so <computersIndex is the React component that is rendered and will look for the ComputersIndex component, computers is the name of the prop being passed into ComputersIndex (it is an attribute of ComputersIndex), and {computers} is defined as what is stored in the const computers variable...so it is the value of the computers prop