import React from 'react'
import Navar from '../component/navar'
import Footer from '../component/Footer'
import Course from '../component/Course'



function Courses() {
  return (
    <>
    <Navar/>
    <div className='min-h-screen '>
      <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
