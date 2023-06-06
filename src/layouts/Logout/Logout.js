import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("spendUserInfo")){
      localStorage.removeItem("spendUserInfo");
        navigate("/");
    }
  },[]);

  return (
    <></>
  );
}
export default Logout;
