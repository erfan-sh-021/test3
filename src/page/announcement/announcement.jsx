import { useState } from 'react'
import '../../assets/img/react.png'
import AnCard from '../../component/announcement/anCard'
import AnDetails from './anDetails'

const Announcement = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const[anData,setAnData]=useState('');
    // console.log(anData);
    
    return (
        <>
            <div className="an-main">
               <div className="a-right">
                    <ul className="announceList">
                        {data.map((dataList) => {
                            // setAnData(dataList);
                            return <AnCard data={dataList} key={dataList.id} setShowModal={setShowModal} setAnData={setAnData} setShowRight={setShowRight}/>
                        })}
                    </ul>
                </div>
                <div className="a-left">
                     {showModal&&<AnDetails data={data} onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </>
    );
}

export default Announcement;