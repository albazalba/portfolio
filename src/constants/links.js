import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
    sectionId: ""
  },
  {
    id: 2,
    text: "contact",
    url: "/contact/",
    sectionId: ""
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.sectionId}><Link to={link.url}>{link.text}</Link></a>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
