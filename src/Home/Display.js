import React, { useEffect, useState } from "react";
import "./Display.css";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Display = () => {

const navigate = useNavigate();
const [data, setData] = useState([]);

// console.log(data);

useEffect(() => {
axios.get(`http://localhost:8000/lists`).then((res) => setData(res.data));
}, []);

// Remove Task---------------
function remove(id)
{
axios.delete(`http://localhost:8000/lists/${id}`);


navigate('/display');
// alert("Task Removed...!");

//State Updation-----
    setData((prev)=>prev.filter((item)=> item.id !== id));
}

//update task ----------

function update(id){
    sessionStorage.setItem("taskId", id)
    navigate(`/update/${id}`);
}

  return (
    <div className="displayBody">
      <Navbar />
      <center>
        {data ? (
          <table className="table" border={"1px black"}>
            <tr>
              <th>Task Id</th>
              <th>Task Title</th>
              <th>Action</th>
            </tr>
            {data.map((item) => {
              return(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td className="action">
                <button onClick={()=>remove(item.id)}>
                    Remove
                </button>
                <button onClick={()=> update(item.id)}>
                    Update
                </button>
                </td>
              </tr>
              )
            })}
          </table>
          
        ) 
        : (
          <div>
            <h1>No saved Tasks</h1>
          </div>
        )}
      </center>
    </div>
  );
};

export default Display;
