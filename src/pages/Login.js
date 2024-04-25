import { Link } from 'react-router-dom'
import { GiMountainClimbing } from "react-icons/gi";
import React from 'react';


const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(
        (res) => res.json()
    )
    .then(
        (json) => {
            console.log(json)
            // this.props.history.push('/appHome')
        }
    )
}


const Login = () => {
    return (
        <div className="flex justify-center align-middle py-24 bg-inherit">
            <form method="post" onSubmit={handleSubmit}>
                <div className="flex justify-center my-8">
                    <GiMountainClimbing 
                     size={80}
                     color='00adb5'
                     />
                </div>

                <div className="flex-col">
                  <div className='mb-8 border-2 p-4 rounded-xl'>
                    <label for="uname">Username:</label>
                    <input
                     type="text" 
                     placeholder="JohnDoe" 
                     name="uname" 
                     className='rounded-xl ml-3 px-[5%] w-[200px]'
                     required />    
                  </div>

                  <div className='mb-8 border-2 p-4 rounded-xl'>
                    <label for="psw">Password:</label>
                    <input type="password" 
                      placeholder="********" 
                      name="psw" 
                      className='rounded-xl ml-3 px-[5%] w-[200px]'
                      required />
                  </div>

                  <button 
                    type="submit"
                    className='rounded-lg px-4 py-1 mb-2 border-2 hover:bg-[#00adb5]'>
                      Login
                  </button>
                </div>

                <div class="container pb-24 ml-4">
                  <span className="psw">
                    <Link to='/home'
                      className='text-blue-500 text-sm'
                      >Go Back</Link>
                  </span>
                </div>
            </form>

            
        </div>
    )
}

export default Login