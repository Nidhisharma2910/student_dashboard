import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import axios from "axios";

const Events = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    // Change API URL to local server running on port 5000
    axios
      .get("http://localhost:3000/events")  // Update the URL here
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Event Name</th>
          <th>Event Information</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Registration</th>
        </tr>

        {data.map((e) => (
          <tr key={e._id}> {/* Add key to each row for better React performance */}
            <td>{e.eventName}</td>
            <td>{e.eventInfo}</td>
            <td>{e.start}</td>
            <td>{e.end}</td>
            <td>
              <a href={e.reglink}>Link</a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Events;
