import React from 'react'
import Navbar from '../navbar/Navbar'
import Content from './Content'
import Projects from '../projects/Projects'
import "./main.scss"
import Footer from '../footer/Footer'

export default function Main() {
  return (
    <div className='main bg-black h-screen'>
      <Navbar/>
      <Content/>
      <Projects/>
    </div>
  )
}
