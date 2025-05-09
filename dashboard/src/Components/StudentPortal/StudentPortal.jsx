import React from 'react';
import './StudentPortal.css';
import StudentInfo from '../StudentInfo/StudentInfo';
import Evevts from '../Evevts/Evevts';
import ListStudents from '../ListStudents/ListStudents';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Login/Action';

const StudentPortal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Extract first element from array
  const userDataArray = useSelector((store) => store.loginUserData.userData);
  const userData = userDataArray?.[0]; // Access first user object

  if (!userData) {
    return <div>Loading or Invalid User Data</div>;
  }

  console.log("User Data:", userData);

  return (
    <div className="StudentPortalMain">
      {/* Adjust below according to your logic */}
      <div className="StudentHeading">
        <p>Welcome {userData.email}</p>
      </div>

      <div className="StudentPortal">
        <div className="StudentInfo">
          Student Information <StudentInfo />
        </div>
        <div className="Events">
          <Evevts />
        </div>
      </div>

      <div className="AdminDivButtons">
        <button onClick={() => navigate('/register_student')}>Add Student</button>
        <button onClick={() => navigate('/event_register')}>Add Event</button>
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/login');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default StudentPortal;
