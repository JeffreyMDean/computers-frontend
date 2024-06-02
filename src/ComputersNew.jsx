export function ComputersNew() {
  return (
    <div>
      <h1>New Computer</h1>
      <form>
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