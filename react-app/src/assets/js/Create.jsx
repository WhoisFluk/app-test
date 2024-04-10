import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// import Service from './Service'
// import Util from '../../util'

export default function BrandCreate() {
  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'fname': fname,
      'lname': lname
    }
    console.log(555555 ,fname, data ,data.fname)
    Swal.fire({
      title: 'SweetAlert2!',
      text: 'fname : '+ data.fname +' lname : ' + data.lname ,
      icon: 'success',
      confirmButtonText: 'รับทราบ!',
    })
    // alert('fname : '+ data.fname +' lname : ' + data.lname )
    // fetch('https://www.mecallapi.com/api/users/create', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/form-data',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     alert(result['message'])
    //     if (result['status'] === 'ok') {
    //       window.location.href = '/';
    //     }
    //   }
    // )
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <form onSubmit={handleSubmit}>
            <label >เพิ่มข้อมูล</label><br />
            <label >Name:</label><br />
            <input type="text" id="fname" name="fname" onChange={(e) => setFname(e.target.value)}/><br />
            <label >Username:</label><br />
            <input type="text" id="lname" name="lname"  onChange={(e) => setLname(e.target.value)} /><br /><br />
            <input type="submit" value="บันทึก"/>
            {/* <button type="button"  onClick={() => fnCreatedata()} >บันทึก</button> */}
            </form> 
        </div>
      </div>
    </div>
  )
}