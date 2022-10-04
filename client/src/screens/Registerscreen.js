import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success';
import Footer from "./Footer";
export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const[loading, setloading]=useState(false)
  const[error, seterror]=useState(false)
  const[success, setsuccess]=useState(false) 
  async function register(){

      if(password!=cpassword)
      {
          alert("passwords not matched")
      }
      else if(name==''){
        alert("Please enter the Name")
      }
      else if(email==''){
        alert("Please enter the Email")
      }
      else if(!(email.includes('@'))){
        alert("Please enter the ValidEmail")
      }

      else{
          const user={
              name,
              email,
              password
          }
          
          try {
            setloading(true)
            const result = await axios.post('/api/users/register',user)
            setloading(false)
            setsuccess(true)
            setemail('')
            setname('')
            setcpassword('')
            setpassword('')
          } catch (error) {
            seterror(true)
            setloading(false)
            console.log(error);
          }
      
      }

  }

  return (
    <div>
    <div className="" style={{ backgroundPosition: "center",height: "90vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",backgroundImage: `url("http://cdn.cnn.com/cnnnext/dam/assets/201110023415-03-anantara-maldives-super-tease.jpg")`}} >
    <div className='register'>
     
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded" >

          {loading && (<Loader/>)}
          {success && (<Success success='User Registered Successfully' />)}
          {error && (<Error error='Email already registred' />)}

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input required type="text" placeholder="Name" className="form-control mt-1 mb-3" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input required type="email" placeholder="Email" className="form-control mt-1 mb-3" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="Password"
              className="form-control mt-3"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control mt-3"
              value={cpassword}
              required
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button onClick={register} className="btn btn-primary rounded-pill mt-3 mb-3">REGISTER</button>
            <br/>
            <p>Existing User ? <span><a style={{color:'red', fontSize:"20px"}} href="/login">Click Here To Login</a></span> </p>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}