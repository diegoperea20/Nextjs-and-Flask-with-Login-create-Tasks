
import Login from "@/components/Login";

//Conection to backend flask
const API_URL = process.env.BACKEND;

export default function Home() {
  return (
   
    <Login API_URL={API_URL}/>
    
  );
}
