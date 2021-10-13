import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section id="services" className="section bg-violet">
    <h2 className="section-title-light">Services</h2>
    <div className="section-center services-center">
      {services.map(service => {
        const { id, icon, title, text } = service
        return (
          <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services
