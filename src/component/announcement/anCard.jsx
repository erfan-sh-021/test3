import { useState } from 'react';
import AnDetails from '../../page/announcement/anDetails';
const AnCard = ({ data,setShowModal,setShow,setShowRight,setAnData }) => {

    // console.log(data)
    return (
        <>
            <li className='an-li' >
                <div className="an-right">
                    <img src={data.src} alt="" />
                </div>
                <div className="an-left" onClick={() =>{setShowModal(true);setAnData(data)}}>
                    <h4>اطلاعیه : {data.title}</h4>
                    <p className="overflow-hidden">{data.desc}</p>
                </div>
            </li>
        </>
    );
}

export default AnCard;