
import { Tabs } from "antd";

import { MyOrders } from "./Myorders";
import Adminscreen from "./Adminscreen"
const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem('currentUser'))
function Profilescreen() {
  return (
    <div className="mt-5 ml-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Profile" key="1">
         <div className="row">
           <div className="col-md-6 bs m-2 p-3 bg-secondary">
           <h1>Name : {user.name}</h1>
          <h1>Email : {user.email}</h1>
          <h1>Admin Access : {user.isAdmin ? "Yes" : "No"}</h1>
          
           </div>
         </div>
        </TabPane>
        {(user.email=="Admin@gmail.com")?<TabPane tab="Admin Panel" key="2">
          <h1>
          <Adminscreen/>
          </h1>
        </TabPane>:<TabPane tab="Bookings" key="2">
          <h1>
          <MyOrders />
          </h1>
        </TabPane>}
        
      </Tabs>
  
    </div>
  );
}

export default Profilescreen;

