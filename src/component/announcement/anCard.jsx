import { useState } from 'react';
import AnDetails from '../../page/announcement/anDetails';
const AnCard = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <li className='an-li'>
                <div className="an-right">
                    <img src={data.src} alt="" />
                </div>
                <div className="an-left" onClick={() => setShowModal(true)}>
                    <h4>اطلاعیه : {data.title}</h4>
                    <p className="overflow-hidden">{data.desc}</p>
                </div>
            </li>
            { showModal && <AnDetails data={data} onClose={()=>setShowModal(false)}/>}
        </>
    );
}

export default AnCard;