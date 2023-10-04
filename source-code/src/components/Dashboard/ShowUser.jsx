import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



export default function ShowUser() {


const [users, setUsers] = useState([])




useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then(res => res.json())
    .then ((data) => setUsers(data))
})









  return (
    
<> 

<div className='mx-3 mt-3 text'> Show User</div>

<div style={{padding:"20px"}}>
        
        <table >
            <thead className='border-1'> 
                <tr className='border-1'> 
                <th className='border-1'>id</th>
                <th className='border-1'>users</th>
                <th className='border-1'>email</th>
                <th className='border-1'>action</th> 
                </tr>
            </thead>
            <tbody className='border-1'>
                {users.map((user,index) => (
                    <tr key= {user.id}  className='border-1'>
                    <td className='border-1' >{index+1}</td>
                    <td className='border-1'>{user.name}</td>
                    <td className='border-1'>{user.email}</td>
                    <td> 
                            <Link to ={`${user.id}`}>  
                             {/* <i
                              style={{ color:"while" ,fontSize:"20px",marginRight:"20px"}}
                               className="fa-solid fa-pen-to-square"></i>  */}
                                </Link>
                        </td> 
                    </tr>
                ))}
            </tbody>

        </table>
        
    </div>



</>


  )
}
