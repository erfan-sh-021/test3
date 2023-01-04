import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../scss/main.scss';

const Reservation = ({props}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 427;
    useEffect(() => {
        const iconMenu = document.querySelector('.icon-menu');
        // const iconMenuCloseX = document.querySelector('.icon-closeX');
        // const card = document.querySelector('.card');
        // const cardBody = document.querySelector('.card-body');
        // const cardTitle = document.querySelector('.card-title');
        // const cardButton = document.querySelector('.card-body>button');
        // const menu = document.querySelector('.menu');
        // const left = document.querySelector('.left');
        // const menuItems = document.querySelector('.menuItems');
        // const overlay = document.querySelector('.card-img-overlay');
        // console.log(iconMenu);
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        iconMenu.addEventListener('click', () => {
            // menuItems.classList.remove('deactive');
            // iconMenu.classList.add('deactive');
            // iconMenuCloseX.classList.remove('deactive');
            // left.classList.add('deactive');
        })
        // if(click && mobileWidth){
        //     menu.classList.add('deactive');
        // }
        
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
        
    }, []);  
    const list = props.map((data) => {
        return (
            <div className="card " key={data.id}>
                <img src={data.imageUrl} className="card-img-top " alt="..." />
                <Link to={'/itemSelected'} state={{ data: data }}>
                    <div className={`${width < 438 ? 'card-img-overlay' : 'card-body'}`}>
                        <h5 className="card-title">{data.title}</h5>
                        <Link to={'/itemSelected'} state={{ data: data }}>
                            <button href="#" className="btn btn-primary " >رزرو</button>
                        </Link>
                    </div>
                </Link>
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