import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Tablerow from "./Tablerow";
import React , {useState, useEffect} from "react";

export  function Rooms() {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    useEffect(async () => {
      try {
        setloading(true);
        const data = await (
          await axios.get("/api/rooms/getallrooms")
        ).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    }, []);
      return (
          <div className='col-md-11'>
              <h1>Rooms</h1>
              {loading ? (<Loader/>) : error ? (<Error/>) : (<div>
  
                     <table className='table table-bordered table-dark'>
                         <thead className='bs'>
                             <tr>
                                 <th>Room Id</th>
                                 <th>Name</th>
                                 <th>Type</th>
                                 <th>Rent Per day</th>
                                 <th>Max Count</th>
                                 <th>Phone Number</th>
                             </tr>
                         </thead>
                         <tbody>
                             {rooms.map(room=>{
                                 return (
                                 <Tablerow id={room._id} userid= {room.name} room={room.type} fromdate={room.rentperday} 
                                 todate={room.maxcount} status={room.phonenumber}/>
                                )
                             })}
                         </tbody>
                     </table>
  
              </div>)}
          </div>
      )
  }
  