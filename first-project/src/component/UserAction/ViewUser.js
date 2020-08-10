import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams,Link} from 'react-router-dom';

const ViewUser=()=>{

    let history=useHistory();
    const{id}=useParams();

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const{name,username, email,phone, website}=user;

    const onloadUser=async(event)=>{
        const result=await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{
        onloadUser();
    },[])

    return (
    <div>
        <div className="container py-4">
            <div className="row">
                <div className="col">
                    <h1>View User page</h1>
                </div>
            </div>
             <div className="header ml-4">
                  <h2>View A User</h2>
             </div>
            <h2>UserId--{id}</h2>
            <h2>Name--{name}</h2>
            <h2>User Name--{username}</h2>
            <h2>Email--{email}</h2>
            <h2>Phone Number--{phone}</h2>
            <h2>Web Site Name--{website}</h2>
         <Link to="/Contact">Back</Link>
        </div>
    </div>
    
    )
}


export default ViewUser;