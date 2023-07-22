import React from 'react'
import Navbar from '../navbar/Navbar'
import Content from './Content'
import "./main.scss"

export default function Main() {
  return (
    <div className='main'>
      <Navbar/>
      <Content/>
    </div>
  )
}
