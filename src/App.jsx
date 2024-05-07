import { useState } from "react";
// import './App.css'

function App() {
  const [submit, setSubmit] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "first") {
      setFirst(value);
    } else {
      setLast(value);
    }
    if (first === "" || last === "") {
      setSubmit(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (first && last) {
      setSubmit(true);
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first"
            value={first}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          Last Name:
          <input
            type="text"
            name="last"
            value={last}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      {submit ? (
        <p>
          Full Name: {first} {last}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
