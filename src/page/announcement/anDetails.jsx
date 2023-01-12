import { useLocation } from "react-router-dom";

const AnDetails = () => {
    const location = useLocation();
    const data = location.state;
    // console.log(data);
    return (
        <div className="an-details">
            <img src={data.src} alt="" />
            <div className="an-text">
                <div className="an-top">
                    <p className="an-p">{data.desc}</p>
                </div>
                <div className="an-bottom">
                    <p>مکان : <span>بال غربی</span></p>
                    <p>زمان : <span>به قسمت رزرو مراجعه کنید</span></p>
                </div>

            </div>
            <button className="btn">بازگشت</button>
        </div>
    );
}

export default AnDetails;