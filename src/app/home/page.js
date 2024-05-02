import Home from "@/components/Home";
//Conection to backend flask
const API_URL = process.env.BACKEND;

function HomePage() {
  
  return (
    <Home API_URL={API_URL} />
  )
}

export default HomePage