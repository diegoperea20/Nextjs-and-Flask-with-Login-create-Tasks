import Task from "@/components/Task";

//Conection to backend flask
const API_URL = process.env.BACKEND;

function TaskPage() {
  return (
    <Task  API_URL={API_URL}/>
  )
}

export default TaskPage