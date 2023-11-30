import React, { useState } from "react";
import "./Create.css";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [task, setTask]= useState();
    const navigate = useNavigate();

    function save(task)
    {
        const task1 = {
            "title": task
        }

        if(task)
        {
            axios.post(`http://localhost:8000/lists`, task1);
            navigate('/display');
        }

        else{
            navigate('/create')
            alert("Please enter a task name..!")
        }
    }



  return (
    <div className="createBody">
      <Navbar />
      <center>
        <form className="form" onSubmit={(e) => e.preventDefault}>
          <div>
            <label>Enter a task title: </label>
            <input type="text" onChange={(e)=> setTask(e.target.value)}/>
          </div>

          <br />
          <div>
            <input className="btn" type="submit" name="Submit" value="Submit"
            onClick={()=> save(task)}
             />
          </div>
        </form>
      </center>
    </div>
  );
};

export default Create;
