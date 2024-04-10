import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
// import Service from './Service'
// import Util from '../../util'


const BrandCreate = (props) => {
  
  const [ brand, setBrand ] = useState({})
  const [ errors, setErrors ] = useState({})
  const location = useLocation();
  const { person } = location.state;
  console.log(person)


  
  const handleSubmitUpdate = event => {
    event.preventDefault();
    var data = {
      'Ufname': Ufname,
      'Ulname': Ulname
    }
    console.log(555555 ,Ufname, data )
    Swal.fire({
      title: 'SweetAlert2!',
      text: 'fname : '+ data.Ufname +' lname : ' + data.Ulname ,
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

  function create(e) {
    // e.preventDefault()
    // Service.create(brand).then(() => {
    //   props.history.push(Util.getRef('/brand'))
    // }).catch((e) => {
    //   if (e.response.data.errors) {
    //     setErrors(e.response.data.errors)
    //   }
    //   else {
    //     alert(e.response.data.message)
    //   }
    // })
  }

 
  const [Ufname, setUFname] = useState('');
  const [Ulname, setULname] = useState('');

  useEffect(() => {
    setUFname(person.name || '');
    setULname(person.username || '');
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <form onSubmit={handleSubmitUpdate}>
            <label >อัปเดตข้อมูล</label><br />
            <label >Name:</label><br />
            <input type="text" id="Ufname" name="Ufname" value={Ufname} onChange={(e) => setUFname(e.target.value)}/><br />
            <label >Username:</label><br />
            <input type="text" id="Ulname" name="Ulname" value={Ulname} onChange={(e) => setULname(e.target.value)} /><br /><br />
            <input type="submit" value="บันทึก"/>
            </form> 
        </div>
      </div>
    </div>
  )
}

BrandCreate.propTypes = {
  items: PropTypes.object.isRequired,
};

export default BrandCreate;