import Layout from './component/layout/layout';
import './assets/scss/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './page/reservation';
import ItemSelected from './page/itemSelected';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResevtionDate from './page/resevtionDate/resevtionDate';



function App() {
const[apiData,setApiData]=useState([]);

// console.log(apiData)
const url ='https://pbmapi.pardikiot.com/api/ServiceTypes/GetMirrorServiceTypes';
const config = {
  headers:{
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzMjhiNGI5Ni05YjY2LTRmZWUtOTA1ZC1hZmIwMWM0OWJhMGUiLCJ1bmlxdWVfbmFtZSI6IjExMDEiLCJVc2VyVHlwZSI6IjIiLCJSZXNpZGVudFVzZXJQYXJlbnRJZCI6ImM2ZjBkYjcxLWEwY2UtNGJmMC05OTBhLTgxMDZhNWMzYzYzMSIsIm5iZiI6MTY3MjMzNTIxOCwiZXhwIjoxNjcyOTQwMDE4LCJpYXQiOjE2NzIzMzUyMTh9.-ag-GeXTgPybuwnZ97NacOvyz5NK6_OGro1z7u5KBzGTdmX8FRwZdpP8cxQ7sYebQgIyuQx07rlh3ed6B9c0hg'
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
            <Route path='/resevtion' element={<Reservation props={apiData}/>} />
            <Route path='/itemSelected' element={<ItemSelected props={apiData}/>} />
            <Route path='/reservationDate' element={<ResevtionDate/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
