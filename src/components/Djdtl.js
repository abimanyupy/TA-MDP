import "./Djdtl.css";
import axios from 'axios'
import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'

export default function Djjj() {
  const [djdetail, setDjdetail] = useState([])
  const { djId } = useParams()

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/abimanyupy/data/dj/${djId}`, {
        params: { limit: 10},
      })
      .then((res) => {
        setDjdetail(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [djId])
  console.log(djdetail)
  console.log(djId)

  return (
    <div className="djing grid-container">
      <h1>Disk Jockey</h1>
      <div className="djing-container">
          <div key={djdetail.id} className="rappper-box">

            <img className="foto" src={djdetail.imgurl} alt={djdetail.nama} />
            <h2>{djdetail.nama}</h2>
            <p>{`Asal : ${djdetail.asal}`}</p>
            <p className="deskripsi">{`${djdetail.deskripsi}`}</p>
                       
          </div>
      </div>
    </div>
  );
}
