import React from "react";
import { Link } from "react-router-dom";

export default function ({ user }) {
  return (
    <Link to={`/${user.id}`}>
      <div className="user-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInoHDVpPHai_gAdcDPcDM6M_n3bMUpIvyrA&usqp=CAU" />
        <h3>{user.username}</h3>
        <p>{user.email}</p>

        <div>
          <img
            className="location"
            src="https://static.vecteezy.com/system/resources/previews/000/552/683/original/geo-location-pin-vector-icon.jpg"
          />{" "}
          : <span>{user.address.street}</span>
        </div>
      </div>
    </Link>
  );
}
