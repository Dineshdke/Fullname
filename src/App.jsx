import { useState } from "react";
// import './App.css'

function App() {

  const [submit, setSubmit] = useState(false);
  const [first,setFirst] = useState('');
  const [last,setLast] = useState('');
  // const [initial, setInitial] = useState({'first':'','last':''});
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const {name,value} = e.target;
    // setInitial({...initial, [name]: value});
    if(name=='first'){
      setFirst(value)
    }
    else{
      setLast(value)
    }
    if(first===''||last===''){
      setSubmit(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate({first,last}));
    if(first&&last){
      setSubmit(true);
      // console.log(document.getElementById("my-form").elements);
    }
  }

  const validate = ({first,last})=>{
    const error={};
    if(!first){
      error.first = 'Please input the First name';
    }    
    if(!last){
      error.last = 'Please input the Last name';
    }
    return error;
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form id="my-form">
        <label>
          First Name:<input type='text' name='first' value={first} onChange={handleChange} required/>
        </label>
        <div>
          {formError.first} 
        </div>       
        <div>
          Last Name:<input type='text' name='last' value={last} onChange={handleChange} required/>
        </div>
        <div>
          {formError.last}
        </div>     
        <br/>
        <button onClick={handleSubmit} type="submit">Submit</button>
        <br/>
        <br/>
        {first&&last&&submit ? (
          <div>
            Full Name: {first} {last}
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default App;
