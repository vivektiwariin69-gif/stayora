import React from 'react'
import "./Signup.css"
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";



function Signup() {
  return (
    
    


    <div id='signup'
    onSubmit={(e) => {
          
          alert("Signup Successfully...👍");
          
        }}>
      <form action="">
        <span id='Signuptitle'>Sign Up Page
          <br /> <FaUserPlus /></span>

        <div className="list">
        <label htmlFor="name">Username</label>
        <input type="text" id='name' required />
        </div>


        <div className="list">
        <label htmlFor="email">Email</label>
        <input type="text" id='email' required />
        </div>

        <div className="list">
        <label htmlFor="pass1">Password</label>
        <input type="password" id='pass1' required/>
        </div>

        <div className="list">
        <label htmlFor="conpass1">Confirm Password</label>
        <input type="password" id='conpass1' required/>
        </div>

        <button id='signupbtn'>Sign Up <MdPersonAddAlt1 />
</button>
        
      </form>
    </div>
  )
}

export default Signup
