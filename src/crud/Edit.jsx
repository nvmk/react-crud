import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let userId=useParams()
  let navigate=useNavigate()

  let [name,setName]=useState('')
  let [sal,setSal]=useState('')
  let [company,setCompany]=useState('')

  useEffect(()=>{
    axios.get(`http://localhost:4000/posts/${userId.id}`)
    .then((response)=>{
      setName(response.data.name)
      setSal(response.data.sal)
      setCompany(response.data.company)
    })
    .catch(()=>{console.log('error');})
  },[])

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
    let payload={name,sal,company}
    axios.put(`http://localhost:4000/posts/${userId.id}`,payload)
    .then(()=>{console.log("ipdated")})
    .catch(()=>{console.log('error');})
    navigate('/Users')
  }
 
  return (
    <>
    <h1>edit users</h1>
    <div id={style.box}>
        <form>
              <input type="text" placeholder='enter your name'    value={name}    onChange={getName}/>    <br /><br />
              <input type="text" placeholder='enter your salary'  value={sal}     onChange={getSal}/>     <br /><br />
              <input type="text" placeholder='enter your company' value={company} onChange={getCompany}/> <br /><br />

              <input type="button" value="submit" onClick={formHandle} />
        </form>
    </div>
    </>
  )
}

export default Edit