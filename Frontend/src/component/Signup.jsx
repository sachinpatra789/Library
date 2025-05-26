import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
function Signup() {
  return (
    
    <div className=' h-screen items-center flex justify-center '>
      <div id="my_modal_3" className="">
      <div className="modal-box">
      <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4'>
      <span>Username:</span>
      <br/>
      <input type="text" className='input input-bordered w-full max-w-xs mt-2'
      placeholder='Enter your username'/>
      <br/>
      <span>Email:</span>
      <br/>
      <input type="email" className='input input-bordered w-full max-w-xs mt-2'
      placeholder='Enter your email'/>
      <br/>
      <span>Password:</span>
      <br/>
      <input type="password" className='input input-bordered w-full max-w-xs mt-2'
      placeholder='Enter your password'/>
    </div>
    {/* {button} */}
    <div>
      <button className='btn btn-primary mt-4'>Sign up</button>
      <p className='mt-3'> Alredy have Account{''}
        <button className='text-primary'
      onClick={() =>
      document.getElementById('my_modal_3').showModal()
      }>Login </button>
      <Login/>
      </p>
    </div>
  </div>
</div>
</div>

  )
}

export default Signup
