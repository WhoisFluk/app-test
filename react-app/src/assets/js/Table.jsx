import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Update from "./update.jsx";


export default function Table() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setItems] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            {/* <th scope="col">phone</th> */}
            <th scope="col">แก้ไข</th>
            {/* <th scope="col"><button  className="btn btn-primary">เพิ่มข้อมูล</button></th> */}
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <th scope="row">{person.id}</th>
              <td>
                {person.fname} {person.name}
              </td>
              <td>{person.username}</td>
              {/* <td>
                <img
                  src="https://www.silkspan.com/wp-content/plugins/silkspan-packageonline/assets/images/car-insurance/type/icon-car-insur-01.webp"
                  alt="avatar"
                  style={{ width: "30px" }}
                />
              </td> */}
              <td><button  className="btn btn-primary">
                {/* <Link to="/formUpdate" data={person}>อัปเดตข้อมูล</Link> */}
                {/* <Update data={person} />  */}
                <Link to="/formUpdate" state={{ person }}>Go to Child</Link>
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}