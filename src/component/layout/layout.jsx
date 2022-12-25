import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../assets/fonts/icomoon/style.css';
//////////////////by remove and add
// iconMenu.addEventListener('touchend', () => {
//     iconMenu.classList.add('deactive');
//     iconMenuCloseX.classList.remove('deactive');
// })
// iconMenuCloseX.addEventListener('touchend', () => {
//     iconMenuCloseX.classList.add('deactive');
//     iconMenu.classList.remove('deactive');
// })
// console.log(iconMenu)
const Layout = () => {
    useEffect(() => {
        const iconMenu = document.querySelector('.icon-menu');
        const iconMenuCloseX = document.querySelector('.icon-closeX');
        const menuItems = document.querySelector('.menuItems');
        const menu = document.querySelector('.menu');
        const reservtion = document.querySelector('.reservtion');
        iconMenu.addEventListener('touchend', () => {
            menu.classList.remove('background')
            menuItems.classList.remove('deactive');
            iconMenu.classList.add('deactive');
            iconMenuCloseX.classList.remove('deactive');
        })
        iconMenuCloseX.addEventListener('touchend', () => {
            menu.classList.add('background')
            menuItems.classList.add('deactive');
            iconMenuCloseX.classList.add('deactive');
            iconMenu.classList.remove('deactive');
        })
        reservtion.addEventListener('click',()=>{
            menu.classList.add('deactive');
            iconMenuCloseX.classList.add('deactive');
            iconMenu.classList.remove('deactive');
        })


    }, [])
    return (
        <div className="page">
            <div className="navbarMenu"><span className="icon-menu" /><span className="icon-closeX deactive" /></div>
            <div className="menu background">
                <div className="menuItems deactive">
                    <div className="menuLogo">
                        <img src={require('../../assets/img/Pardik logo landscape.png')} alt="logo" />
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <h4>فلان بهمانی</h4>
                            <p>واحد 217</p>
                        </div>
                        <span className="icon-user" />
                    </div>
                    <ul className="items">
                        <li>صفحه نخست<span className="icon-PardikHouse" /></li>
                        <li>پیام ها<span className="icon-announcement" /></li>
                        <Link to={'/resevtion'}>
                            <li className='reservtion'>رزرو سرویس<span className="icon-reservation" /></li>
                        </Link>
                        <li>پرداخت شارژ/بدهی<span className="icon-announcement" /></li>
                        <li>لیست تراکنش ها<span className="icon-invoice" /></li>
                        <li className='exit'>خروج<span className="icon-exit" /></li>
                    </ul>
                </div>
            </div>
            <div className="left">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;