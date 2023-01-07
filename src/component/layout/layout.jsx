import { useEffect, useState } from 'react';
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
    const menu = document.querySelector('.menu');
    const [state, setState] = useState({ falseactiveFilter: 0 });
    const [click, setClick] = useState(false);
    const [mobileWidth, setMobileWidth] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const iconMenu = document.querySelector('.icon-menu');
        const iconMenuCloseX = document.querySelector('.icon-closeX');
        const menuItems = document.querySelector('.menuItems');
        const menu = document.querySelector('.menu');
        const reservtion = document.querySelector('.reservtion');
        const li = document.querySelector('.li');
        iconMenu.addEventListener('click', () => {
            console.log('clicked')
            menu.classList.remove('background')
            menuItems.classList.remove('deactive');
            iconMenu.classList.add('deactive');
            iconMenuCloseX.classList.remove('deactive');
        })
        iconMenuCloseX.addEventListener('click', () => {
            menu.classList.add('background')
            menuItems.classList.add('deactive');
            iconMenuCloseX.classList.add('deactive');
            iconMenu.classList.remove('deactive');
        })
        reservtion.addEventListener('click', () => {
            // menu.classList.add('deactive');
            iconMenuCloseX.classList.add('deactive');
            iconMenu.classList.remove('deactive');
            setClick(true)
        })

        if (window.innerWidth < 769) {
            setMobileWidth(true);
            
        }
        
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        
    }, [])

    if(click && mobileWidth === true){
        menu.classList.add('deactive')
    }
    // ---------------for active color in menu------------------
    const filter = (e, filterId) => {
        setState({
            activeFilter: filterId,
        });

    }
   

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
                        <Link to={'/'}>
                            <li className={`${state.activeFilter === 1 ? 'selected' : ''}`} onClick={(e) => filter(e, 1)}>صفحه نخست<span className="icon-PardikHouse" /></li>
                        </Link>
                        <li className={`${state.activeFilter === 2 ? 'selected' : ''}`} onClick={(e) => filter(e, 2)} >پیام ها<span className="icon-announcement" /></li>
                        <Link to={'/resevtion'}>
                            <li className={`${state.activeFilter === 3 ? 'selected' : ''} li reservtion`} onClick={(e) => filter(e, 3)} >رزرو سرویس<span className="icon-reservation" /></li>
                        </Link>
                        <li className={`${state.activeFilter === 4 ? 'selected' : ''}`} onClick={(e) => filter(e, 4)}>پرداخت شارژ/بدهی<span className="icon-payment" /></li>
                        <li className={`${state.activeFilter === 5 ? 'selected' : ''}`} onClick={(e) => filter(e, 5)}>لیست تراکنش ها<span className="icon-bill" /></li>
                        <li className={`${state.activeFilter === 6 ? 'selected' : ''} li exit`} onClick={(e) => filter(e, 6)} >خروج<span className="icon-exit" /></li>
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