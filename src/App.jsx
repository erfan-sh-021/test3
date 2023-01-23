import Layout from './component/layout/layout';
import './assets/scss/main.scss';
import './assets/img/react.png';
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

const data = [
  {
      id: 1,
      title: 'استخر مجتمع 1',
      desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
      شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
      src: require('./assets/img/react.png')
  },
  {
      id: 2,
      title: 'استخر مجتمع 2',
      desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
      شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
      src: require('./assets/img/react.png')
  },
  {
      id: 3,
      title: 'استخر مجتمع 3',
      desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
      شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
      src: require('./assets/img/react.png')
  },
  {
      id: 4,
      title: 'استخر مجتمع 4',
      desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
      شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
      src: require('./assets/img/react.png')
  },
];
const[apiData,setApiData]=useState([]);
// console.log(apiData)
const url ='https://pbmapi.pardikiot.com/api/ServiceTypes/GetMirrorServiceTypes';
const config = {
  headers: { 
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzMjhiNGI5Ni05YjY2LTRmZWUtOTA1ZC1hZmIwMWM0OWJhMGUiLCJ1bmlxdWVfbmFtZSI6IjExMDEiLCJVc2VyVHlwZSI6IjIiLCJSZXNpZGVudFVzZXJQYXJlbnRJZCI6ImM2ZjBkYjcxLWEwY2UtNGJmMC05OTBhLTgxMDZhNWMzYzYzMSIsIm5iZiI6MTY3NDQ5Nzk5MiwiZXhwIjoxNjc1MTAyNzkyLCJpYXQiOjE2NzQ0OTc5OTJ9.ioukubv_ciUSarn1_8jCBblDvCU7o6bNpHEbZ74E7rnuRLNMBsUs_RO2gSSNXj0OysKVlhdAc7Hyoj5ap1zTMQ'
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
            <Route path='announcement' element={<Announcement data={data}/>} ></Route>
            <Route path='anDetails' element={<AnDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
