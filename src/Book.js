import React from 'react'
import './book.css'

const Book = (props) => {
    

    const {image, title, price, publisher} = props;
  return (
    <div className='book'>
        <div className='book-image'> 
        <img src= {image} 
      alt= 'Details'></img>
        </div>
      <div className='book-info'>
       <h2>{title}</h2>
       <p>{publisher}</p>
       <p>{price}</p>
       <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Book
