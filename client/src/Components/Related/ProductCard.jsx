import React from 'react';

export default function ProductCard({ key, id, image, category, name, price}) {
 // console.log(category)
 return (
   <div key={id}>
       <h3>{image}</h3>
       <h3>{category}</h3>
       <h3>{name}</h3>
       <h3>{price}</h3>
   </div>
 )
}


