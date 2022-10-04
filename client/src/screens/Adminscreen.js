import React , {useState, useEffect} from "react";
import { Tabs } from "antd";
import axios from "axios";


import { Bookings } from "../components/Bookingadmin";
import {Rooms} from "../components/Roomadmin";
import {Users} from "../components/Useradmin";
import {Addroom} from "./Addroom"
const { TabPane } = Tabs;
const user = JSON.parse(localStorage.getItem("currentUser"));
function Adminscreen() {
  return (
    <div className="ml-3">
        
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <div className="row">
            <Bookings/>
          </div>
        </TabPane>
        <TabPane tab="Rooms" key="2">
        
            <div className="row">
               <Rooms/>
            </div>
         
        </TabPane>
        <TabPane tab="Add Room" key="3">
         
            
                 <Addroom/>
        
          
        </TabPane>
        <TabPane tab="Users" key="4">
      
            <Users/>
      
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;













