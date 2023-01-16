const AnDetails = ({ data , onClose}) => {
    return (
        <div className="an-details">
            <img src={data.src} alt="" />
            <div className="an-text">
                <div className="an-top">
                <p className="an-p">{data.desc}</p>
                    
                </div>
                <div className="an-bottom">
                    <p>زمان : <span>به قسمت رزرو مراجعه کنید</span></p>
                    <p>مکان : <span>بال غربی</span></p>
                </div>

            </div>
            <button className="btn" onClick={onClose}>بازگشت</button>
        </div>
    );
}

export default AnDetails;