import React from "react";
import "./Exercise.css"

function Exercise(){

    return(
        <div className="images">
        <div >
            <h1> Exercises</h1>
            <figure className="imgs">
                <img src="img1.jpg" alt="img1" height={'300px'} width={'200px'}/>
                <img src="img2.jpg" alt="img2" height={'300px'} width={'200px'} />
                <img src="img3.jpg" alt="img2" height={'300px'} width={'200px'} />


                 <figcaption className="caption">
                 <a href="https://in.pinterest.com/pin/731272058240984923/">FOR MORE CLICK HERE</a><i class="fa-solid fa-arrow-pointer"></i>
                 </figcaption>
            </figure>
        </div>
        </div>
    )
}   

export default Exercise