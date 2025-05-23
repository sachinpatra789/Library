import React from 'react'
import Home from './home/Home'
import{ Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './component/Signup'

export default function App() {
  return (
    <>
      {/* <Home></Home>
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}
