import React from 'react'

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <div className="tour-footer">
          <button className="btn">Not Interested</button>
        </div>
      </div>
    </article>
  )
}

export default Tour
