import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import React , {useState, useEffect} from "react";


export function Users(){

    const[users , setusers] = useState()
    const[loading , setloading] = useState(true)
    useEffect(async() => {
  
      try {
        const data = await (await axios.get('/api/users/getallusers')).data
        setusers(data)
        setloading(false)
      } catch (error) {
        console.log(error)
        setloading(false)
      }
      
    }, [])
  
    return(
      <div className='row'>
            {loading && (<Loader/>)}
  
         <div className="col-md-10">
         <table className='table table-bordered table-dark'>
             <thead className='bs'>
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>isAdmin</th>
               </tr>
             </thead>
           
           <tbody>
  
          
  
            {users && (users.map(user=>{
              return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
              </tr>
            }))}
             </tbody>
            </table>
         </div>
      </div>
    )
  
  }