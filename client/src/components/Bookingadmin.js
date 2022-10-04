import React , {useState, useEffect} from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Tablerow from "./Tablerow";

export function Bookings() {
    const [bookings, setbookings] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    useEffect(async () => {
      try {
        setloading(true);
        const data = await (
          await axios.get("/api/bookings/getallbookings")
        ).data;
        setbookings(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    }, []);
      return (
          <div className='col-md-11 '>
              <h1>Bookings</h1>
              {loading ? (<Loader/>) : error ? (<Error/>) : (<div>
  
                     <table className='table table-bordered table-dark'>
                         <thead className='bs'>
                             <tr>
                                 <th>Booking Id</th>
                                 <th>Userid</th>
                                 <th>Room</th>
                                 <th>From</th>
                                 <th>To</th>
                                 <th>Status</th>
                             </tr>
                         </thead>
                         <tbody>
                             {bookings.map((booking,i)=>{
                                 return (
                                 <Tablerow id= {booking._id} userid={booking.userid} room= {booking.room}
                                 fromdate= {booking.fromdate} todate={booking.todate} status={booking.status}/>
                                 )
                                
                             })}
                         </tbody>
                     </table>
  
              </div>)}
          </div>
      )
  }