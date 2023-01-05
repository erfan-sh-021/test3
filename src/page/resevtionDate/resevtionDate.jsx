
const ResevtionDate = () => {
    return (
        <div className="mainDate">
            <div className="dateHeader">
                روز انتخابی:12 فروردین 1401
            </div>
            <div className="resevtionItem">
                <p>
                    لطفا ساعت مورد نظرتان را انتخاب کنید
                </p>
                <div className="resevtionDateGroupe">
                    <div className="reserveCart row">
                        <div className="card">
                            <span>17:00 - 18:00 </span>
                            انتخاب شده توسط شما
                            <span>هزیه:150000 ریال</span>
                        </div>
                        <div className="card">
                            <span>17:00 - 18:00 </span>
                            انتخاب شده توسط شما
                            <span>هزیه:150000 ریال</span>
                        </div>
                        <div className="card">
                            <span>17:00 - 18:00 </span>
                            انتخاب شده توسط شما
                            <span>هزیه:150000 ریال</span>
                        </div>
                        <div className="card">
                            <span>17:00 - 18:00 </span>
                            انتخاب شده توسط شما
                            <span>هزیه:150000 ریال</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="reservationBottom">
                <div className="reserveTime"></div>
                <div className="reserveBotton">
                    <button className="btn">انتخاب مجدد روز</button>
                    <button className="btn">مرحله بعد</button>
                </div>
            </div>

        </div>
    );
}

export default ResevtionDate;