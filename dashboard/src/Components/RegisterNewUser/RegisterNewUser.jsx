import React, { useState } from 'react';
import axios from 'axios';

const RegisterNewUser = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [academic, setAcademic] = useState("");
  const [phone, setPhone] = useState("");
  const [fees, setFees] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [term, setTerm] = useState("");

  const handleAdd = () => {
    const data = {
      name,
      department,
      academic,
      phone,
      fees,
      role: "Student",
      email,
    //   email: "eve.holt@reqres.in" ,
      roll,
      term,
      password: "12345",  // Default password (consider better password handling)
    };

    console.log("Sending user data:", JSON.stringify(data));

    // Change API URL to your localhost server running on port 5000
    axios.post("http://localhost:3000/student", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        alert("User Added Successfully");
        console.log("Response from API:", res.data);
      })
      .catch((err) => {
        alert("Cannot register");
        console.error("Registration failed:", err.response?.data || err.message);
      });
  };

  return (
    <div>
      <h1>Create new user</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter name'
      /> <br /><br />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder='Enter department'
      /><br /><br />
      <input
        type="text"
        value={academic}
        onChange={(e) => setAcademic(e.target.value)}
        placeholder='Enter academic year'
      /><br /><br />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter phone'
      /><br /><br />
      <input
        type="text"
        value={fees}
        onChange={(e) => setFees(e.target.value)}
        placeholder='Enter fees'
      /><br /><br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter email'
      /><br /><br />

      <select onChange={(e) => setTerm(e.target.value)}>
        <option value="">---</option>
        <option value="First Year">First Year</option>
        <option value="Second Year">Second Year</option>
        <option value="Third Year">Third Year</option>
        <option value="Fourth Year">Fourth Year</option>
      </select><br /><br />

      <input
        type="text"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder="Roll number"
      /> <br /><br />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default RegisterNewUser;
