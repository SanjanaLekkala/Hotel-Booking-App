import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Swal from 'sweetalert2';
import Footer from "./Footer";
export default function Loginscreen() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const[loading, setloading]=useState(false)
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false)    

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    async function login(){
      const user={
     
        email,
        password
    }
      try {
        setloading(true)
        const result = await (await axios.post('/api/users/login',user)).data
        localStorage.setItem('currentUser',JSON.stringify(result))
        window.location.href='/home'
      } catch (error) {
        seterror(true)
        setloading(false)
        console.log(error);
        
      }
    }

    return (
      <div>
     
        <div className='login' style={{ backgroundPosition: "center",height: "80vh",
          backgroundRepeat: "noRepeat",
          backgroundSize: "cover",backgroundImage: `url("https://travelspot24.com/wp-content/uploads/2019/05/Top-Luxurious-Hotels-in-the-World.jpg")`}}>
         <div className="row justify-content-center mt-8">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-light rounded" >
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loader/>)} 
          {error && (<Error error='Invalid Credentials'/>)}
          {success && (<Success success='User Login Successfull'/>)}
          <div>
          <input required type="text" placeholder="Email" className="form-control mt-3" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="Password"
              className="form-control mt-3"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            <button onClick={login} className="btn btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
            <br/>
            <p>New User ?  <span><a style={{color:'red',fontSize:"20px"}} href="/register" className="mt-2"><b>Click Here To Register</b></a></span> </p>
            
          </div>
        </div>
      </div>
        </div>
        <Footer/>
        </div>

        
    )
}