import { Link } from 'react-router-dom'
const AnCard = ({ data }) => {
    // console.log(data)
    return (
        <>
            <Link to={'/anDetails'} state={data}>
                <li className='an-li'>
                    <div className="an-right">
                        <img src={data.src} alt="" />
                    </div>
                    <div className="an-left">
                        <h4>اطلاعیه : {data.title}</h4>
                        <p className="overflow-hidden">{data.desc}</p>
                    </div>
                </li>
            </Link>
        </>
    );
}

export default AnCard;