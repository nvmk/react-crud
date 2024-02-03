import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <ol id={style.ol}>
        <li><Link to='/'>Create-users</Link></li>
        <li><Link to='/Users'>Users</Link></li>
    </ol>
    <div id={style.hr}></div>
    </div>
  )
}

export default Home