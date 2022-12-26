import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../scss/main.scss';


const data = [
    {
        id: 0,
        tittle: 'سونا',
        url: require('../../assets/img/react.png')
    },
    {
        id: 1,
        tittle: 'سینما',
        url: require('../../assets/img/react.png')
    },
    {
        id: 2,
        tittle: 'استخر',
        url: require('../../assets/img/react.png')
    },
    {
        id: 3,
        tittle: 'سالن بدنسازی',
        url: require('../../assets/img/react.png')
    },
    {
        id: 4,
        tittle: 'سالن همایش',
        url: require('../../assets/img/react.png')
    }
]
const Reservation = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 427;
    useEffect(() => {
        const iconMenu = document.querySelector('.icon-menu');
        const iconMenuCloseX = document.querySelector('.icon-closeX');
        const card = document.querySelector('.card');
        const cardBody = document.querySelector('.card-body');
        const cardTitle = document.querySelector('.card-title');
        const cardButton = document.querySelector('.card-body>button');
        const menu = document.querySelector('.menu');
        const left = document.querySelector('.left');
        const menuItems = document.querySelector('.menuItems');
        // console.log(iconMenu);
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        iconMenu.addEventListener('click', () => {
            // menuItems.classList.remove('deactive');
            // iconMenu.classList.add('deactive');
            // iconMenuCloseX.classList.remove('deactive');
            // left.classList.add('deactive');

        })
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };

    }, []);
    // console.log(width)
    const list = data.map((data) => {
        // console.log(data.id)
        return (

            <div className="card " key={data.id}>
                <img src={data.url} className="card-img-top" alt="..." />
                <div className={`${width < 438 ? 'card-img-overlay' : 'card-body'}`}>
                    <h5 className="card-title">{data.tittle}</h5>
                    <Link to={'/itemSelected'}>
                        <button href="#" className="btn btn-primary " >رزرو</button>
                    </Link>
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