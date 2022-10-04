import React , {useState} from "react";
import swal from "sweetalert2"
import axios from "axios";

export function Addroom() {
 
    const [room, setroom] = useState("");
    const [rentperday, setrentperday] = useState();
    const [maxcount, setmaxcount] = useState();
    const [description, setdescription] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [type, settype] = useState("");
    const [location, setlocation] = useState("");
    const [image1, setimage1] = useState("");
    const [image2, setimage2] = useState("");
    const [image3, setimage3] = useState("");
    
  
    async function addRoom()
    {
        const roomobj = {
            room , 
            rentperday, maxcount ,description ,phonenumber ,type ,
            image1 ,image2 ,image3,
            location
        }
        console.log(roomobj)
        try {
            
            const result = await axios.post('/api/rooms/addroom' , roomobj)
           
            swal.fire("Congrats", "Your New Room added successfully",'success')
           
            setrentperday('')
            setroom('')
            setmaxcount('')
            setphonenumber('')
            setdescription('')
            settype('')
            setimage1('')
            setimage2('')
            setimage3('')
            setlocation('')
  
        } catch (error) {
            console.log(error)
           
            swal.fire("Oops", "Something went wrong",'error')
        }
    }
    return (
      
      <div className="row">
       
          <div className="col-md-5">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Name"
              value={room}
              onChange={(e) => {
                setroom(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Rentperday"
              value={rentperday}
              onChange={(e) => {
                setrentperday(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Maxcount"
              value={maxcount}
              onChange={(e) => {
                setmaxcount(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Phonenumber"
              value={phonenumber}
              onChange={(e) => {
                setphonenumber(e.target.value);
              }}
            />
            
          </div>
  
          <div className="col-md-6">
          <input
              type="text"
              className="form-control mt-1"
              placeholder="Type"
              value={type}
              onChange={(e) => {
                settype(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setlocation(e.target.value);
              }}
            />
          <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 1"
              value={image1}
              onChange={(e) => {
                setimage1(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 2"
              value={image2}
              onChange={(e) => {
                setimage2(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 3"
              value={image3}
              onChange={(e) => {
                setimage3(e.target.value);
              }}
            />
            <div className='mt-1 text-right'>
            <button className="btn btn-primary" onClick={addRoom}>ADD ROOM</button>
            </div>
          </div>
       
      </div>
    );
  }