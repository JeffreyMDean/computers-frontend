export function ComputersNew(props) {

  const handleSubmit = (event) => { //fx handleSubmit handles form submissi event
    event.preventDefault(); //prevents default form submission (refreshing page) use JS instead
    const params = new FormData(event.target);
    props.onCreateComputer(params, () => event.target.reset());
  };

  //event.target refers to the form element that triggered the submit event
  //FormData object has the collected form data?
  //FormData(event.target); creates a FormData object from the form element which automatically captures all form fields and their values.
  //props.onCreateComputer came from parent element content which is really handleCreateComputer which handles the form data (likely sending it to a server)
  //params is the FormData object contating the form data
  //() => event.target.reset() callback function that resets the form after the data is processed

  return (
    <div>
      <h1>New Computer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Make: <input name="make" type="text" />
        </div>
        <div>
          Model: <input name="model" type="text" />
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        <button type="submit">Create computer</button>
      </form>
    </div>
  );
}

// input form for the user to type and create a new computer and submit it