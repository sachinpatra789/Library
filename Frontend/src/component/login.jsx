import React from 'react'

function login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4'>
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
      <button className='btn btn-primary mt-4'>Login</button>
      <p className='mt-3'>Don't have an account? {''}  <a href='/signup' className='text-primary'>Sign Up</a>

      </p>

    </div>
  </div>
</dialog>
      
    </div>
  )
}

export default login
