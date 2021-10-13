import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const jobs = [
  {
    id:1,
    company:"Igeeks Technologies",
    position:"Intern",
    date:"01-jan-2021 to 30-march-2021",
    desc:[{id:1, name:"Worked on a project to predict Big Mart Sales reports using supervised machine learning Algorithm Such as Ridge regression and Linear regression."}]
  },
  {
    id:2,
    company:"Antstack",
    position:"Intern",
    date:"01-july-2022 to Current",
    desc:[{id:1, name:"Desc1"}, {id:2, name:"desc2"}, {id:3, name:"desc3"}]
  }
]

const Jobs = () => {
  const [value, setValue] = useState(0)
  const {company, position, date, desc} = jobs[value]
  return (
    <section className="section jobs">
      <Title style={{color:"black"}}  title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item,index) => {
            return (
              <button key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 
              "active-btn"}`}
              > {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="jobs-date">{date}</p>
          {desc.map((item,index)=>{
              return <div key={item.key} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
