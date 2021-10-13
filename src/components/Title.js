import React from "react"

const Title = ({title, color}) => {
  return <h2 className="section-title" style={{color:{color}}}>{title}</h2>
}

export default Title
