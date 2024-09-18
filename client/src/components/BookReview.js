import React from "react"


const BookReview= ({id,name, image, description})=> {
    return(
        
      
        <div>
    




    <div class="swiper-slide swiper-slide box">
         <img src={image} alt={name}/>

         <h3>{name}</h3>

         <p>{description}</p>

         <div class="stars">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half-alt"></i>
         </div>
                   
       </div>
        
        </div>
   
    )
    
}

export default BookReview;