import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            onClick={() => setReadMore(!readMore)}
            className="info-btn"
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <div className="tour-footer">
          <button
            type="button"
            className="btn btn-block delete-btn"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </article>
  )
}

export default Tour
