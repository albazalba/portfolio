import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <section className="section bg-violet">
    <div className="footer">
      <h4 style={{color:"rgb(208 204 204)"}}>Living, learning, & leveling up one day at a time.</h4>
      <SocialLinks />
    </div>
  </section>
}

export default Footer
