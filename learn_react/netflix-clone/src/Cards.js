
import React from "react";
import "./Cards.css"



function Cards(props) {
    
    return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card-img"  />
            <div className="card-body">
                <span className="card-title">{props.title}</span>
                <h3 className="card-text">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button className="button">watch now</button>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}
export default Cards