export function ComputersIndex(props) {  // can now receive properties from parent component
  return (
    <div>
      <h1>All computers</h1>
      {props.computers.map((computer) => (
        <div key={computer.id}>
          <h2>{computer.make}</h2>
          <p>{computer.model}</p>
          <p>{computer.year}</p>
        </div>
      ))}
    </div>
  );
}