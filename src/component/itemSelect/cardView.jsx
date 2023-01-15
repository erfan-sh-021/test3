import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardView = ({ data }) => {
    // console.log(data.data)
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const iconMenu = document.querySelector('.icon-menu');
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };

    }, []);
    return (
            <div className="card">
                <img src={data.imageUrl} className="card-img-top " alt="..." />
                <Link to={'/itemSelected'} state={{ data: data }}>
                    <div className={`${width < 769 ? 'card-img-overlay' : 'card-body'}`}>
                        <h5 className="card-title">{data.title}</h5>
                        <Link to={'/itemSelected'} state={{ data: data }}>
                            <button href="#" className="btn btn-primary " >رزرو</button>
                        </Link>
                    </div>
                </Link>
            </div>

    );
}

export default CardView;