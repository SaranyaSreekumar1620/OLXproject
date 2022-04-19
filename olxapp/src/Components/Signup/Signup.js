import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import { Link } from "react-router-dom";
import "./Signup.css";
import { FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";
function Signup() {
  const [username, setUserame] = useState("");
  const history = useHistory()
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              history.push("/login");
            });
        });
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="noimage"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUserame(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Sign up</button>
        </form>
        <Link to="/">Log In</Link>
      </div>
    </div>
  );
}

export default Signup;
