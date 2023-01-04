import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useLocation } from "react-router-dom";

const ItemSelected = () => {
    const location = useLocation();
    const { data } = location.state;

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

                </div>

            </div>
        </>
    );
}

export default ItemSelected;