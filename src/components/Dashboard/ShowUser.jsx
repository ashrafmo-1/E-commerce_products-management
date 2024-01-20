import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ShowUser() {
const [users, setUsers] = useState([])

useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then(res => res.json())
    .then ((data) => setUsers(data))
}, [])

  return (
  <>
    <div className='mx-3 mt-3 text'> Show User</div>
    <div style={{padding:"20px"}}>
      <table>
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
            <td className={'d-flex justify-content-around'}>
              <button className={'btn btn-outline-danger'}> remove </button>
              <button className={'btn btn-outline-primary'}> edit </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}
