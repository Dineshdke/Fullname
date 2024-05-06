import { useState } from "react";
// import './App.css'

function App() {

  const [submit, setSubmit] = useState(false);
  const [initial, setInitial] = useState({'first':'','last':''});
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInitial({...initial, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(initial));
    if(initial.first && initial.last){
      setSubmit(true)
    }
  }

  const validate = (initial)=>{
    const error={};
    if(!initial.first){
      error.first = 'Please input the First name';
    }    
    if(!initial.last){
      error.last = 'Please input the Last name';
    }
    return error;
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form >
        <label>
          First Name:<input type='text' name='first' onChange={handleChange} required/>
        </label>
        <div>
          {formError.first} 
        </div>       
        <div>
          Last Name:<input type='text' name='last' onChange={handleChange} required/>
        </div>
        <div>
          {formError.last}
        </div>     
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <br/>
        <br/>
        {submit ? (
          <div>
            Full Name: {initial.first} {initial.last}
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default App;
