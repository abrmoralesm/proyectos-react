import React from 'react'; 
import {useState} from 'react';


function Login(){
 const [user,setUser]=  useState({
    email:'',
    password:''
})
    return <div>
        <form>
            <input type="email" name="email" id="email" placeholder="email"/>
            <input type="password" name="password" id="password" placeholder="password"/>
        </form>
    </div>
}

export default Login;