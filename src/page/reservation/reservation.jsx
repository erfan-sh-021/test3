import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardView from '../../component/itemSelect/cardView.jsx';
// import '../../scss/main.scss';

const Reservation = ({ props }) => {
    // console.log(props)
    // const list = props.map((data) => {
    //     return (
    //         <CardView data={data} key={data.id}/>
    //     )
    // })
    return (
        <div className="card-group">
            <div className="row">
                {props.map((data) => {
                    return (
                        <CardView data={data} key={data.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Reservation;