import React from 'react'

function Review() {
  return (
    <>
    <section>
        <ul class="container1">
<li class="menu1">
        <img class="closebutton" src="./img/img-cross.png" alt="" />
        <div class="writereview">
           
        <p class="Write">Write Review</p>
        <p class="thought">Choose your thought</p>
        <div class="buttongood">
            <button class="goodimg"><img class="images"  src="./img/img-good.png" alt="" /></button>
            <button class="goodimg"><img class="images"  src="./img/img-good.png" alt="" /></button>
            <button class="goodimg"><img class="images"  src="./img/img-good.png" alt="" /></button>
            <button class="goodimg"><img class="images"  src="./img/img-good.png" alt="" /></button>
        </div>
        <input class="input button" type="text" placeholder="Enter Your Name"> <br>
            <input class="input button" type="text" placeholder="Enter Your Feedback / Review"> <br>
            <button class="sendreview">SEND REVIEW</button>
        </div>
        </li>
    </ul></section>
    
    </>
  )
}

export default Review