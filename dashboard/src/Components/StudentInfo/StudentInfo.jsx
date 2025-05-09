import React from 'react';
import "./StudentInfo.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../Redux/Login/Action';
import { useNavigate } from "react-router-dom";

const StudentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.loginUserData.userData[0]);
  console.log("userdata ta", userData);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      {
        userData !== undefined ? (
          <>
            <p>Name : {userData.name}</p>
            <p>Department : {userData.department}</p>
            <p>Academic Year : {userData.academic}</p>
            <p>Email : {userData.email}</p>
            <p>Phone no : {userData.phone}</p>
            <p>Fees paid : {userData.fees}</p>

            <button className='ButtonLogout' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <p>No Data Available</p>
        )
      }
    </div>
  );
};

export default StudentInfo;
