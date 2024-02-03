import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let [name,setName]=useState("")
    let [sal,setSal]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let getName=(e)=>{
        setName(e.target.value)
    }
    let getSal=(e)=>{
        setSal(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let load={name,sal,company}
        axios.post("http://localhost:4000/posts",load)
        navigate("/Users")
    }
  return (
    <div id={style.box}>
        <form>
            <input type="text" placeholder='enter your name'    value={name}    onChange={getName}/> <br /><br />
            <input type="text" placeholder='enter your salary' value={sal}     onChange={getSal}/> <br /><br />
            <input type="text" placeholder='enter your company'  value={company} onChange={getCompany}/> <br /><br /> 
            <button onClick={formHandle}>Submit</button>
        </form>
    </div>
  )
}

export default Create