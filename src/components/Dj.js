// import dj from "../hiphopAPI/djs.json";
import "./Dj.css";
import { NavLink } from "react-router-dom";
import React, {useEffect, useState } from 'react'
import axios from 'axios'

export default function Dj(props) {
    const [djj, setDjj] = useState([])
    const { history } = props
  
    useEffect(() => {
      axios.get(`https://my-json-server.typicode.com/abimanyupy/data/dj`, {
          params: { limit: 10},
        })
        .then((res) => {
          setDjj(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
    console.log(djj)

    return (
          <div className="djing grid-container" id="djing">
            <h1>Disk Jockey</h1>
            <div className="djing-container">
              {djj.map((djj, index) => (
                <div key={djj.id} className="djing-box">
                  <NavLink
                    to={`/dj/${djj.id}`}
                    className="link ddjj-name"
                    data={djj}
                    key={index}
                      onClick={() => history.push(`/dj/${djj.id}`)    }
                  >
                    <p>{` ${djj.nama}`}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        );

    
  }
  




// export default function Djj(props) {
//   const { history } = props;
//   return (
//     <div className="djing grid-container" id="djing">
//       <h1>Disk Jockey</h1>
//       <div className="djing-container">
//         {dj.map((djj, index) => (
//           <div key={djj.id} className="djing-box">
//             <NavLink
//               to={`/dj/${djj.id}`}
//               className="link ddjj-name"
//               data={djj}
//               key={index}
//                 onClick={() => history.push(`/dj/${djj.id}`)    }
//             >
              
//               <p>{`#${djj.id} ${djj.nama}`}</p>
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }