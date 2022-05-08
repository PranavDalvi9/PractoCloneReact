import React, { Component } from 'react'
// import "./Login.css"
import styles from './Login.module.css'
// import {Form,Button,Row,Col,Container,Image,Nav} from "react-bootstrap"
// import welcome from "../images/welcome.svg"
// import welcome from "./welcome.svg"
// import { Link } from "react-router-dom"

export default function Login() {
    return (
        <>
        <div className = {styles.header}>
            <span>Login</span>
        </div>
        <div className = {styles.mid}>
            <div className = {styles.left}>
                <img
                    src = "https://accounts.practo.com/static/images/illustration.png"
                    alt = "illustration"
                />
            </div>
            <div className = {styles.right}>
                <div className = {styles.form_container}>
                    <form 
                    // onSubmit = {handleOnSubmit}
                    >
                        <div>
                            <label>
                                Email ID
                            </label>
                            <br/>
                            <input
                                type = "text"
                                placeholder = "Email ID"
                                // value = {email}
                                // onChange = {(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <br/>
                            <input
                                type = "password"
                                placeholder = "Password"
                                // // value = {password}
                                // onChange = {(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input 
                                className = {styles.button}
                                type = "submit"
                                // value = "Sign up"
                            />
                        </div>
                    </form>
                    <div className = {styles.line_break}></div>
                    <div className = {styles.google_signin}>
                    
                    </div>
                </div>
            </div>
        </div>
    </>
     )
}
