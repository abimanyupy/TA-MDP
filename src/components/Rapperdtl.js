import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Rapperdtl.css";

export default function Rappp(props) {
  const [rapdetail, setRapdetail] = useState([]);
  const { rapperId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/abimanyupy/data/rap/${rapperId}`,
        {
          params: { limit: 10 },
        }
      )
      .then((res) => {
        setRapdetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rapperId]);
  console.log(rapdetail);
  console.log(rapperId);

  return (
    <div className="rapper grid-container" id="rapper">
      <h1>Rapper</h1>
      <div className="rapper-container">
        <div key={rapdetail.id} className="rappper-box">
          <img className="foto" src={rapdetail.imgurl} alt={rapdetail.nama} />
          <h2>{rapdetail.nama}</h2>
          <p>{`Asal : ${rapdetail.asal}`}</p>
          <p className="deskripsi">{`${rapdetail.deskripsi}`}</p>
        </div>
      </div>
    </div>
  );
}
