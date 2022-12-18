import '../../assets/fonts/icomoon/style.css';

const Layout = () => {
    return ( 
        <div className="main">
            <div className="sideBar">
                <div className="menuLogo"><span className="icon-Pardik"></span></div>
                <ul className="items">
                    <li>صفحه نخست<span className="icon-PardikHouse"></span></li>
                    <li>پیام ها<span className="icon-announcement"></span></li>
                    <li>رزرو سرویس<span className="icon-reservation"></span></li>
                    <li>پرداخت شارژ/بدهی<span className="icon-announcement"></span></li>
                    <li>لیست تراکنش ها<span className="icon-invoice"></span></li>
                    <li>خروج<span className="icon-exit"></span></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Layout;