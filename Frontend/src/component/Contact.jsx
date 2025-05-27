import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <form>
          <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-4" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full max-w-xs mb-4"></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>

      </div>
    </div>
  )
}

export default Contact