import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";

const TaskDetails = () => {
  const task = useLoaderData(); 
  // const taskData = useLoaderData();
  // const {id} = useParams();
  // const [task, setTask] = useState([])
  console.log(task);

  // useEffect(()=> {
  //   if(taskData && id){
  //     const taskdetails = taskData.find((singleTask) => singleTask._id == id);
  //   setTask(taskdetails);
  //   }
  // },[taskData, id])



  // if (!task) return <p className="text-center text-red-500">Task not found</p>;

  return (
   <div>
     <DetailsCard task={task}/>
   </div>
  );
};

export default TaskDetails;
