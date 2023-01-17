import { useState } from 'react'
import '../../assets/img/react.png'
import AnCard from '../../component/announcement/anCard'
import AnDetails from './anDetails'

const Announcement = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [anData,setAnData]=useState('');
    // const [showRight, setShowRight] = useState(true);
    console.log(anData);
    
    return (
        <>
            <div className="an-main">
               <div className="a-right">
                    <ul className="announceList">
                        {data.map((dataList) => {
                            return <AnCard data={dataList} key={dataList.id} setShowModal={setShowModal} setAnData={setAnData} />
                        })}
                    </ul>
                </div>
                <div className="a-left">
                     {showModal&&<AnDetails data={anData} onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </>
    );
}

export default Announcement;