import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import rap from '../hiphopAPI/raps.json'
import './Rapper.css'
import { NavLink } from 'react-router-dom'


export default function Rapper(props) {
    const [rapp, setRapp] = useState([])
    const { history } = props
    
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/abimanyupy/data/rap`, {
            params: { limit: 10},
          })
          .then((res) => {
            setRapp(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])
      console.log(rapp)
  
        return(
            <div className="rapper grid-container" id="rapper">
                <h1>Rapper</h1>
                <div className="rapper-container">
                    {rapp.map((rapp, index) => (
                    <div key={rapp.id} className="rapper-box">
                        <NavLink
                        to={`/rapper/${rapp.id}`}
                        className="link rppr-name"
                        onClick={() => history.push(`/rapper/${rapp.id}`)}>
                        <p>{` ${rapp.nama}`}</p>
                        </NavLink>
                    </div>
                    ))}
            </div>
                
            </div>
        )
   }



