import Layout from './component/layout/layout';
import './assets/scss/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './page/reservation/reservation';
import ItemSelected from './page/itemSelected/itemSelected';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResevtionDate from './page/resevtionDate/resevtionDate';
import Announcement from './page/announcement/announcement';
import AnDetails from './page/announcement/anDetails';
function App() {
const[apiData,setApiData]=useState([]);

// console.log(apiData)
const url ='https://pbmapi.pardikiot.com/api/ServiceTypes/GetMirrorServiceTypes';
const config = {
  headers: { 
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzMjhiNGI5Ni05YjY2LTRmZWUtOTA1ZC1hZmIwMWM0OWJhMGUiLCJ1bmlxdWVfbmFtZSI6IjExMDEiLCJVc2VyVHlwZSI6IjIiLCJSZXNpZGVudFVzZXJQYXJlbnRJZCI6ImM2ZjBkYjcxLWEwY2UtNGJmMC05OTBhLTgxMDZhNWMzYzYzMSIsIm5iZiI6MTY3Mzg2MjkzMywiZXhwIjoxNjc0NDY3NzMzLCJpYXQiOjE2NzM4NjI5MzN9.-1E8ADUElyI7sUtwyyX6M6E4jeEOMcxPEN1c0zRMt_vywpQCAarUi0kLD5Z8F-7w9Lf7-vARutRDNfzUd2Qdog'
  }
}
useEffect(()=>{
  axios.get(url,config).then((res)=>{
    setApiData(res.data.serviceTypes)
  // console.log(res.data.serviceTypes);
}).catch(err =>console.log(err,'is error'));

},[])
// console.log(apiData)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='resevtion' element={<Reservation props={apiData}/>} ></Route>
            <Route path='itemSelected' element={<ItemSelected props={apiData}/>} />
            <Route path='reservationDate' element={<ResevtionDate/>} />
            <Route path='announcement' element={<Announcement/>} ></Route>
            <Route path='anDetails' element={<AnDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
