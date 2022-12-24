import { useEffect, useState } from 'react';
import '../../scss/reservtion.scss';

const data=[
    {
        id:0,
        tittle:'سونا',
        url:require('../../assets/img/react.png')
    },
    {
        id:1,
        tittle:'سینما',
        url:require('../../assets/img/react.png')
    },
    {
        id:2,
        tittle:'استخر',
        url:require('../../assets/img/react.png')
    },
    {
        id:3,
        tittle:'سالن بدنسازی',
        url:require('../../assets/img/react.png')
    },
    {
        id:4,
        tittle:'سالن همایش',
        url:require('../../assets/img/react.png')
    }
]
const Reservation = () => {
    const [width,setWidth]=useState(window.innerWidth);
    const breakPoint = 427;
    useEffect(()=>{
        // const card=document.querySelector('.card');
        // const cardBody=document.querySelector('.card-body');
        // const cardTitle=document.querySelector('.card-title');
        // const cardButton=document.querySelector('.card-body>button');

        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          window.removeEventListener("resize", handleResizeWindow);
        //   (window.innerWidth<breakPoint)?
        //       cardTitle.style.background='red' :
        //       cardTitle.style.background='yellow'
        };
        
    },[]);
    // console.log(width)
    const list =data.map((data)=>{
        // console.log(data.id)
        return(
         
                <div className="card " key={data.id}>
                    <img src={data.url} className="card-img-top" alt="..." />
                    <div className={`${width<438 ? 'card-img-overlay' : 'card-body'}`}>
                        <h5 className="card-title">{data.tittle}</h5>
                        <button href="#" className="btn ">رزرو</button>
                    </div>
                </div>
          
        )
    })
    return (
        <div className="card-group">
            <div className="row">
                {list}
            </div>
        </div>
    );
}

export default Reservation;