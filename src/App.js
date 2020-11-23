import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/Picture 1.png";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC7Rus4GWRhOP4ZNIlKd2si_NIMKN3sCBQ",
  authDomain: "bvscoreboard.firebaseapp.com",
  databaseURL: "https://bvscoreboard.firebaseio.com",
  projectId: "bvscoreboard",
  storageBucket: "bvscoreboard.appspot.com",
  messagingSenderId: "661918240571",
  appId: "1:661918240571:web:3783e9117aef316bdeb11e",
});

function App() {
  const [users, setUsers] = useState([]);
  const [img, setImg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/bvscoreboard.appspot.com/o/Slide15.png?alt=media&token=2fbdc41c-9054-4f1f-9e79-293ad566ba19"
  );

  useEffect(() => {
    firebase
      .firestore()
      .collection("paticipants")
      .onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const returnArray = newArray.sort((a, b) =>
          a.distance < b.distance ? 1 : -1
        );
        setUsers(returnArray);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(users[Math.floor(Math.random() * users.length)].img);
    }, 10000);
    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="size1 bg0 where1-parent">
      <div
        className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
        <div className="wrap-pic1">
          <img src={logo} alt="LOGO" />
        </div>

        <div className="p-t-60 p-b-60">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Distance</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>#</td>
                  <td>{user !== undefined && user.name}</td>
                  <td>{user !== undefined && user.surname}</td>
                  <td>{user !== undefined && user.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
