import Same from "@/components/Same";

//Conection to backend flask
const API_URL = process.env.BACKEND;

function SamePage() {
  return (
    <Same API_URL={API_URL} />
  )
}

export default SamePage