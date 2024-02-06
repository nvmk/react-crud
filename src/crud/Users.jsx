import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Users = () => {
    let [content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/posts")
        .then((res)=>{setContent(res.data)})
        .catch(()=>{console.log("error bro!");})
    },[])

    let deleteItem=(comingId)=>{
        axios.delete(`http://localhost:4000/posts/${comingId}`)
        const filterData=content.filter((e)=>{
            return e.id !==comingId
        })
        setContent(filterData);
    }
  return (
    <div className={style.container}>
        {content.map((dataBro)=>{
            return(
                <div key={dataBro.id} id={style.card}>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{dataBro.name}</td>
                        </tr>
                        <tr>
                            <td>Salary:</td>
                            <td>{dataBro.sal}</td>
                        </tr>
                        <tr>
                            <td>Company:</td>
                            <td>{dataBro.company}</td>
                        </tr>
                        <tr>
                            <td>
                                <button><Link to={`/edit-users/${dataBro.id}`}>Edit</Link></button>
                                </td>
                            <td>
                                <button onClick={()=>deleteItem(dataBro.id)}>Delete</button>
                                </td>
                        </tr>
                    </table>
                </div>
            )
        })}
    </div>
  )
}

export default Users