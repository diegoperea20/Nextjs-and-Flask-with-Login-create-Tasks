import Loginup from "@/components/Loginup";

//Conection to backend flask
const API_URL = process.env.BACKEND;
function LoginUpPage() {
  return (
    <Loginup API_URL={API_URL}/>
  )
}

export default LoginUpPage