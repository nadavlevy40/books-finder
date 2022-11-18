import React from "react";
import { useNavigate} from "react-router-dom/dist";

function Login(){
    const[userName,setUserName]=React.useState("");
    
    
    function handleChange(event){
        setUserName(event.target.value);
        
    }

    const navigate = useNavigate()

    function handleClick(){
        if(userName.trim().length===0){
            alert("username cannot be empty!");
        }
        else{
        localStorage.setItem('username',userName);
        navigate("/Search")
        }
    }

    
return(
<div>
    <label>username</label>
    <input type="text" maxLength={20} onChange={handleChange} value={userName}></input>
    <button onClick={handleClick} >submit</button>
</div>);
}

export default Login;