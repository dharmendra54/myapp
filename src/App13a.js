import { useState, createContext, useContext } from "react";
import Login2 from './Login2'
import Register from './Register'
import Childa from "./Childa";
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  const [flag, setFlag] = useState(0);

  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag }}>
        {/* <h2>Hello {user} from App13 component</h2>
        <Childa /> */}
        {!flag ? (<Login2 />) :flag==1?<Childa/>:flag==2? (<Register/>):<Login2/>}  
      </UserContext.Provider>
    </>
  );
}