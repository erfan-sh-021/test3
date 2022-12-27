import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useLocation } from "react-router-dom";
const ItemSelected = () => {
    const location = useLocation();
    const { from } = location.state;
    console.log(from);
    return (
        <>
        <h1 className="itemHeader">رزرو {from}</h1>
            <Calendar
             calendar={persian}
             locale={persian_fa}
            />
        </>
    );
}

export default ItemSelected;