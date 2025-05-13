import { Link } from "react-router-dom"



function LogoutPage() {
  return (
    <div>
     <h1>Hi</h1>
     <h1>Nice</h1>
     <h1>Good</h1>
     {console.log("Hi") 
     }

     <Link to="/home">Go Back</Link>
    </div>
  )
}

export default LogoutPage
