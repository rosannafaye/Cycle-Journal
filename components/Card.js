import React from 'react'


export default function Card(props){
    
    return (
        <div className= "card-container">
            <div className="card">
                <img className= "img" src={props.item.imageUrl}/>
                
                <div className= "card-info">
                
                    <div className= "card-location">
                        <p>
                            <img className= "pin" src= "./images/pin.png" />
                            {props.item.location}
                            <a href= {props.item.googleMapsUrl}>View on Google Maps </a>
                        </p>
                    </div>
                    <div className= "card-description">
                        <h2 className= "card-title">{props.item.title}</h2>
                        <p className="bold-text">Gradient: {props.item.gradient}<br></br>{props.item.startDate}</p>
                        <p>{props.item.description}</p>
                    </div>
                </div>
                
            </div>
             <hr className="style-two"></hr>
        </div>
    )
}