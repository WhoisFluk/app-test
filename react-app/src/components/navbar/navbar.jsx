import * as React from 'react';
import { Link } from 'react-router-dom';

export default function CustomizedMenus() {


  return (
    <div>
      <div class="topnav">
        <a href="#" class=""><Link to="/select">แสดงข้อมูล</Link></a>
        <a href="#"><Link to="/formUpdate">อัปเดตข้อมูล</Link></a>
        <a href="#"><Link to="/formIn">เพิ่มข้อมูล</Link></a>
        {/* <a href="#">Link 3</a>
        <a href="#">Link 4</a> */}
      </div>
    </div>
  );
}

