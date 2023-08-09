import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Portal()
{
  const [data, setData] = useState([]);
  const [portal, setPortal] = useState([]);

  useEffect(() => {
   getData();
   getPortal();
  },[])

  const getData = async() =>
  {
     const res = await axios.get('http://127.0.0.1:8000/api/macs');
     console.log("Res",res);
     const dat = res.data;
     setData(dat);
  }

  const getPortal = async() =>
  {
     const res = await axios.get('http://127.0.0.1:8000/api/portals');
     console.log("Res",res);
     const dat = res.data;
     setPortal(dat);
  }

  const handleChange = (id,e) => 
  {
     const prtId = id;
     const pValue = e.target.value;
     console.log("prtId",prtId,"pValue",pValue);
  }

    return (
        <>
      <div>Portal</div>
      <table>
        <tr>
            <thead>
                <th>ID</th>
                <th>MACID</th>
                <th>DeviceInfo</th>
                <th>Port</th>
            </thead>
        </tr>
            {
            data.map((item,index) => {
                return(
                    <>
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.macid}</td>
                    <td>{item.deviceinfo}</td>
                    <td>
                    <select
                    onChange={(e) => handleChange(item.id,e)}
                    >
                    <option>Select Option</option>
                        {
                        portal.map((pt) => {
                            return(
                                <>                                  
                                  <option value={pt.id}>{pt.portal_name}</option>
                                </>
                            )
                        })
                      }
                        </select>
                    </td>                      
                    </tr>
                    </>
                )
            })
           }
      </table>
      </>
    )
}

export default Portal