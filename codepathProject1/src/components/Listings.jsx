import React from 'react'

const Listings = (props) => {
    const link = `https://www.google.com/search?q=${props.title}`
    
    return (
        <div className='listing-align'>
            <div className='listing-container'>
                <img src={props.image} className="image-container"/>
                <h1 className='title'>{props.title}</h1>
                <p className='description'>{props.description}</p>
                <p className='rating'>Rating: {props.rating}</p>
                <a href={link} className='book'>Book</a>
            </div>
        </div>
    )
}
export default Listings