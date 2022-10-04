import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import moment from "moment";

import axios from "axios";
import Loader from "../components/Loader";
import Room from "../components/Room";
import { DatePicker, Space } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const { RangePicker } = DatePicker;
function Homescreen() {
  const [hotels, sethotels] = useState([]);
  const [duplicatehotes, setduplicatehotes] = useState([]);
  const [fromdate, setfromdate] = useState('');
  const [todate, settodate] = useState('')
  const [loading, setloading] = useState(false);
  const [searchkey, setsearchkey] = useState('')
  const[type , settype]=useState('')
  function filterByDate(dates) {
    console.log('filterByDate')
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
    
    var temp=[]
    for (var room of duplicatehotes) {
      var availability = false;
      
      for (var booking of room.currentbookings) {
        
        if(room.currentbookings.length)
        {
          if (
            !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate) &&
            !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
          ) {
            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
            ) {
              availability = true;
            }
          }
        }
        
        
      }
      if(availability || room.currentbookings.length==0) 
      {
        temp.push(room)
      }
      sethotels(temp)
    }
    
  }

  useEffect(async () => {
    try {
      setloading(true);
      const rooms = await (await axios.get("/api/rooms/getallrooms")).data;
      console.log(rooms);
      sethotels(rooms);
      setduplicatehotes(rooms)
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  function filterBySearch(e)
  {
    console.log('filterBySearch')
    setsearchkey(e)
    settype('selectoption')
    if(e!=='all locations'){
    const dupdate = duplicatehotes.filter(room=>room.location.toLowerCase()== e.toLowerCase())
    sethotels(dupdate)
    }
    else{
      sethotels(duplicatehotes)
    }
    
  }

  function filterByType(e)
  {
    console.log('filterByType')
    settype(e)
    if(e!=='all'){
      if(searchkey.toLowerCase()=='all locations' ){
      const dupdate = duplicatehotes.filter(room=>room.type.toLowerCase()== e.toLowerCase() )
      sethotels(dupdate)
      }
    
      else{
        const dupdate = duplicatehotes.filter(room=>room.type.toLowerCase()== e.toLowerCase() && room.location.toLowerCase()== searchkey.toLowerCase())
      sethotels(dupdate)
      }
    }
    else{
      sethotels(duplicatehotes)
    }
   
  }

  return (
    <div className="mt-5 bg-dark">
      <div className="container">
        <div className="row bs p-3 m-5 bg-light ">
          <div className="col-md-4">
            <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
          </div>

          <div className="col-md-4">
          <select className="form-control m-2" value={searchkey} onChange={(e)=>{filterBySearch(e.target.value)}} >

<option selected >Select Location</option>
  <option value="hyderabad">Hyderabad</option>
  <option value="chennai">Chennai</option>
  <option value="bangalore">Bangalore</option>
  <option value="mumbai">Mumbai</option>
  <option value="new delhi">New Delhi</option>
  <option value="all locations">All Locations</option>
  </select>
           
          </div>
          <div className="col-md-4">
            <select className="form-control m-2" value={type} onChange={(e)=>{filterByType(e.target.value)}} >
            <option selected value="selectoption">Select Type</option>
            
              <option value="delux">Delux</option>
              <option value="non-delux">Non Delux</option>
              
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          hotels.map((room) => {
            return (
              <div className="col-md-8" data-aos='zoom-in'>
                <Room room={room} fromdate={fromdate} todate={todate}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
