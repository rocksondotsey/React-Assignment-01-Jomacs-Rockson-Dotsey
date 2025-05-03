/**
Task: Change the code so:

If isLoggedIn is true ➔ show "Welcome back!"

If isLoggedIn is false ➔ show "Please log in."
 */

function Test07() {
  const isLoggedIn = true;
  const message = isLoggedIn ? "Welcome back!" : "Please log in.";

  return <h1>{message}</h1>;
}

export default Test07;
