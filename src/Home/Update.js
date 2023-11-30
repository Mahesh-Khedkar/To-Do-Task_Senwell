import React, { useState } from "react";
import "./Create.css";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

    const [updateTask, setUpdatedTask]= useState();
    const navigate = useNavigate();

    const location = useLocation();

    const id = location.state;

    console.log(id)

    //Update the task---------

    function update(task)
    {
        if(task)
        {
            const updatedTask = {
                id: sessionStorage.getItem("taskId"),
                title: task
            }
            axios.put(`http://localhost:8000/lists/${updatedTask.id}`, updatedTask);
            navigate('/display');
        }

        else{

            console.log("No Task")

            // navigate('/display')
            alert("Please enter task name to Update..!")
        }
    }

  return (
    <div className="createBody">
      <Navbar />
      <center>
      <h1>
        Update your Task
      </h1>
        <form className="form" onSubmit={(e) => e.preventDefault}>
          <div>
            <label>Enter to update : </label>
            <input type="text" onChange={(e)=> setUpdatedTask(e.target.value)}/>
          </div>

          <br />
          <div>
            <input className="btn" type="submit" name="Submit" value="Submit"
            onClick={()=> update(updateTask)}
             />
          </div>
        </form>
      </center>
    </div>
  );
};

export default Update;
