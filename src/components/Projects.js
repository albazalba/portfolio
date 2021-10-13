import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import {MdKeyboardArrowRight} from 'react-icons/md'

const projects = [
  {
    id:1,
    name:"Swiggy Clone",
    url:"http://sampleclone.netlify.app/",
    coverImage:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d60b8104723621.5f69867167e34.png"
  },
  {
    id:2,
    name:"Movie app",
    url:"https://popcorn-movie.vercel.app",
    coverImage:"https://images-na.ssl-images-amazon.com/images/I/81QxeaJB2HL.jpg"

  }
]

const Projects = () => {
  return (
    <section id="projects" className="section bg-violet">
      <h2 className="section-title-light">Projects</h2>
      <div className="project-section">
        {projects.map(project => {
          const { id, name, url, coverImage } = project
          return (
            <article key={id} className="project">
              <img className="project-img" src={coverImage} alt="swiggyclone" />
              <a href={project.url}><button className="project-btn">Visit website<span style={{marginLeft:"5px", fontWeight:"bold"}}><MdKeyboardArrowRight /></span></button></a>
              {/* <h4>{title}</h4> */}
              
              {/* <p>{text}</p> */}
            </article>
            )
        })}
        </div>
      </section> 
      )
}

export default Projects
