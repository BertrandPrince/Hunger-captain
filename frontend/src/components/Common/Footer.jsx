import React from 'react'
import logoFooter from "../../assets/img/logo-HungerFooter.svg"

function Footer() {
  return (
    <>
    <footer>
      <img class="footer-logo" src={logoFooter} alt="" /><br />
      <p class="footer-p">
        Premium Quality Food at the best and most affodable price <br />
        we have a new offer everyday for 365 days
      </p>
      <p class="contact">
        <span id="contact">Contact</span><br />
        E-mail : quickfood@Hungercaptian.com | Hotline: +1 131 138 138
      </p>
      <hr />
    </footer>
    <p class="copyrights">
      DESIGN BY HUNGER CAPTIAN - ©️ 2022. ALL RIGHTS RESERVED.
    </p>
    </>
  )
}

export default Footer