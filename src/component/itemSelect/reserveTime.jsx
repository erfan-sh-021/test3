const ReserveTime = ({data2}) => {
    return (
        <>
            <div className="card">
                <span>{data2.time} </span>
                برای رزرو کلیک کنید
                <span>هزیه :{data2.price}</span>
            </div>
        </>
    );
}

export default ReserveTime;