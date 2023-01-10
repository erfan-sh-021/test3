import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ItemSelected = () => {
    const location = useLocation();
    const { data } = location.state;
    useEffect(()=>{
        const rmdpWeek = document.querySelector('.rmdp-day');

        console.log(rmdpWeek)
    },[])
    
    return (
        <>
            <div className="itemHeader"><p>لطفا روز مورد نظرتان را انتخاب کنید</p></div>
            <div className="cardItem ">
                <img src={data.imageUrl} className="card-img-top img-fluid" alt="..." />
                <h5 className="itemCardTittle">رزرو {data.title}</h5>
            </div>
            <h1 className="itemTittle">رزرو {data.title}</h1>
            <div className="itemContent">
                <div className="leftItem">
                    <Calendar
                        calendar={persian}
                        locale={persian_fa}
                    />
                </div>
                <div className="rightItem">
                    <div className="itemsHeader">فروردین 1401 : سانس اختصاصی 12</div>
                    <div className="cards">
                        <div className="row">
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                            <div className="card">
                                <span>17:00 - 18:00 </span>
                                برای رزرو کلیک کنید
                                <span>هزیه:150000 ریال</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="itemBottom">
                        <div className="rightSection">
                            <p>تعدادساعت های انتخاب شده : <span>3</span></p>
                            <p>هزینه کل : <span>350000</span>ریال</p>
                            <button className="btn">تایید رزرو</button>
                        </div>
                        <div className="leftSection">
                            <div className="payButton">
                                هم اکنون پرداخت شود
                                <div className="circle"></div>
                            </div>
                            <div className="payButton">
                                اضافه شدن به بدهی شارژ ماهیانه
                                <div className="circle"></div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ItemSelected;