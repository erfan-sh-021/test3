import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useLocation } from "react-router-dom";

const ItemSelected = () => {
    const location = useLocation();
    // const data = location
    const { data } = location.state;
    // console.log(data);
    return (
        <>
            <div className="itemHeader"><p>لطفا روز مورد نظرتان را انتخاب کنید</p></div>
            <div className="cardItem ">
                <img src={data.url} className="card-img-top" alt="..." />
                    <h5 className="itemCardTittle">رزرو {data.tittle}</h5>
            </div>
            <h1 className="itemTittle">رزرو {data.tittle}</h1>
            <Calendar
                calendar={persian}
                locale={persian_fa}
            />
        </>
    );
}

export default ItemSelected;