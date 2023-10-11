import React from 'react'
import Book from './Book';

const books = [{
    image:'https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg', 
    title: 'The Hidden Hindu Book',
    publisher: 'Akshat Gupta',
    price: '$ 100'
},

{image:'https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg', 
title: 'The Hidden Hindu Book',
publisher: 'Akshat Gupta',
price: '$ 700'
}

]
const BookList = () => {
  return (
    <div>
      {
        books.map((elements) =>{
            return <Book image = {elements.image} 
            title = {elements.title} publisher = {elements.publisher}
            price = {elements.price}/>
        })
      }
      </div>
  )
}

export default BookList
