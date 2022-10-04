import axios from "axios";
import Swal from "sweetalert2";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Tag, Divider } from 'antd';
import React, { useEffect, useState } from "react";
import Bookingpageelement from "../components/Bookingpage";
const user = JSON.parse(localStorage.getItem('currentUser'))

export const MyOrders = () => {
    const [mybookings, setmybookings] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    useEffect(async () => {
      try {
        setloading(true);
        const data = await (
          await axios.post("/api/bookings/getuserbookings", {
            userid: JSON.parse(localStorage.getItem("currentUser"))._id,
          })
        ).data;
        setmybookings(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    }, []);
  
     const cancelBooking =async(bookingid , roomid)=>{
  
      
      try {
        setloading(true);
        const result = await axios.post('/api/bookings/cancelbooking' , {bookingid:bookingid , userid:user._id , roomid:roomid});
        setloading(false);
        Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success').then(result=>{
          window.location.href='/bookings'
      })
      } catch (error) {
        Swal.fire('Oops' , 'Something went wrong' , 'error').then(result=>{
          window.location.href='/bookings'
      })
        setloading(false)
      }
  
    }
  
    return (
        
      <div>
           <div className='text-right'>
              <button className='btn btn-primary'><a href="/home">Book Room</a></button>
              </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
            
          mybookings.map(booking=>{
            return <div className="row mt-3">
            <div className="col-md-6 my-auto">
                <Bookingpageelement name= {booking.room} id={booking._id} transactionId={booking.transactionId} fromdate={booking.fromdate}
                todate= {booking.todate} totalAmount={booking.totalAmount}
                status= {booking.status =='booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red">Cancelled</Tag>)}
                booking={booking.status=='booked' && (<button className='btn btn-primary' onClick={()=>cancelBooking(booking._id , booking.roomid)}>Cancel Booking</button>)}/>
              
            </div>
          </div>
          })
        )}
      
      </div>
      
    );
  };
  