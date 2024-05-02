import Changepassword from "@/components/Changepassword";

//Conection to backend flask
const API_URL = process.env.BACKEND;

function ChangepasswordPage() {
  return (
    <Changepassword  API_URL={API_URL}/>
  )
}

export default ChangepasswordPage