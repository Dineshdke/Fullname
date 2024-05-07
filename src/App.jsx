import { useState } from "react";
// import './App.css'

function App() {

  const [submit, setSubmit] = useState(false);
  const [first,setFirst] = useState('');
  const [last,setLast] = useState('');
  // const [formError, setFormError] = useState({});

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
    // setFormError(validate({first,last}));
    if(first&&last){
      setSubmit(true);
    }
  }

  // const validate = ({first,last})=>{
  //   const error={};
  //   if(!first){
  //     error.first = 'Please input the First name';
  //   }    
  //   if(!last){
  //     error.last = 'Please input the Last name';
  //   }
  //   return error;
  // }

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:<input type='text' name='first' value={first} onChange={handleChange} required/>
        </label>
        {/* <div>
          {formError.first} 
        </div>        */}
        <div>
          Last Name:<input type='text' name='last' value={last} onChange={handleChange} required/>
        </div>
        {/* <div>
          {formError.last}
        </div>      */}
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        {submit ? (
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
