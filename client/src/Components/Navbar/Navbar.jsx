// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'
// import { logout_user } from '../../redux/auth/action'
import styles from "./Navbar.module.css";

const Navbar = () => {
  // const history = useHistory()
  // const {isLoggedIn, currentUser} = useSelector(state => state.authReducer, shallowEqual)
  // const dispatch = useDispatch()

  // const handleLogout = () => {
  //     localStorage.removeItem("currentUser")
  //     localStorage.removeItem("isLoggedIn")
  //     dispatch(logout_user())
  // }

  // const handleDrive = () => {
  //     history.push("/appointments")
  // }

  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img
            src="https://www.practo.com/nav/9.5.5/consumer/images/practo.svg"
            alt="logo"
          />
        </div>
      </Link>
      <div className={styles.left}>
        <Link to={"/findDoctors"}>
          <strong>Doctors</strong>
        </Link>
        <br />
        <span>Book an appointment</span>
      </div>
      <div className={styles.left}>
        <Link to={"/Videoconsult"}>
          <strong>Video Consult</strong>{" "}
        </Link>
        <br />
        <span>Consult with top doctors</span>
      </div>
      <div className={styles.left}>
        <Link to={"/medicine"}>
          <strong>Medicine</strong>
        </Link>
        <br />
        <span>Medicine & health products</span>
      </div>

      <div className={styles.left}>
        <Link to="/labtest">
          {" "}
          <strong>Lab Tests</strong>{" "}
        </Link>
        <br />
        <span>Book test & checkups</span>
      </div>

      <div className={styles.flex_grow}></div>
      <div className={styles.right}>For Providers</div>
      <div className={styles.right}>Security & help</div>
      <div className={styles.right}>
        <button className={styles.login_btn}>
          <Link to="/login">Login / Signup</Link>
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
