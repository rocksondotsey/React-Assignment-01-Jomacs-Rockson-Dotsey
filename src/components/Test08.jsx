/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() {
  const fruits = ["Mango", "Orange", "Watermelon"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test08;
