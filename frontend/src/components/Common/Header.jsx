import React from 'react'
import logo from  "../../assets/img/logo-Hunger.png"
import mainBanner from "../../assets/img/background.png"
import whiteLine from "../../assets/img/whiteline.png"



function Header() {
  return (
    <>
<img class="backgroundimg" src={mainBanner} alt="" />
    <img class="whitebg" src={whiteLine} alt="" />
    <img class="logo" src={logo} alt="" />
    <p class="text">
      Good Food is <br />The Foundation of<br /><span class="happiness"
        >GENUINE HAPPINESS</span>
    </p>
    </>
  )
}

export default Header