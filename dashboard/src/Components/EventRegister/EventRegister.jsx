import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EventRegister = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [reglink, setReglink] = useState("");

  const handleAdd = () => {
    const data = {
      eventName,
      eventInfo,
      start,
      end,
      reglink
    };
    console.log('data:', data);

    // ✅ Replace with your local backend URL
    axios.post("http://localhost:3000/events", data)
      .then((res) => {
        alert("Event Added Successfully");
        console.log(res.data);
      })
      .catch((err) => {
        alert("Cannot register");
        console.error(err);
      });
  };

  return (
    <div>
      <p>Register Events</p>
      <button onClick={() => navigate("/")}>Go To Home Page</button> <br /><br />

      <input type="text" onChange={(e) => setEventName(e.target.value)} placeholder='Name' /> <br /><br />
      <input type="text" onChange={(e) => setEventInfo(e.target.value)} placeholder='Information' /><br /><br />
      <label>Start</label> 
      <input type="date" onChange={(e) => setStart(e.target.value)} /><br /><br />
      <label>End</label> 
      <input type="date" onChange={(e) => setEnd(e.target.value)} /><br /><br />
      <input type="text" onChange={(e) => setReglink(e.target.value)} placeholder='Registration Link' /><br /><br />
      
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default EventRegister;
