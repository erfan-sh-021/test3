import { useEffect } from 'react';
import '../../assets/fonts/icomoon/style.css';

// console.log(iconMenu)
const Layout = () => {
    // useEffect(()=>{
    //     const iconMenu = document.querySelector('.icon-menu');
    //     iconMenu.addEventListener('touchend', () => {
    //         console.log(iconMenu)
    //     })
        
    // },[iconMenu])
    return (
        <div className="main">
            <div className="navbarMenu"><span className="icon-menu"></span></div>
            <div className="sideBar">
                <div className="menuLogo">
                    <span className="icon-Pardik" />
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
                    <li>رزرو سرویس<span className="icon-reservation" /></li>
                    <li>پرداخت شارژ/بدهی<span className="icon-announcement" /></li>
                    <li>لیست تراکنش ها<span className="icon-invoice" /></li>
                    <li>خروج<span className="icon-exit" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Layout;