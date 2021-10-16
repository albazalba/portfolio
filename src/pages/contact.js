import React, {useRef, useState} from "react"
import emailjs from 'emailjs-com';
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import logo from "../assets/logo.svg"
import Navbar from "../components/Navbar"

const query = graphql`
{
  file(relativePath: {eq: "thankyou.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Contact = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n8rnul3', 'template_ywf4wc9', e.target , 'user_7hmR9vy5mTEwXyp7uQMop')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  return <ContactPage>
    <Navbar />
    <div className="contact-page">
      {result ? 
        <div className="thankyou-page">
        <Image fluid={fluid} className="thankyou-img" />
        <p>Thanq we got your message, will contact you ASAP!</p>
        </div>
       :
       <form className="contact-form" onSubmit={sendEmail}>
        <p>How can I help you?</p>
       <div className="half-fields">
          <div className="fields">
              <label>Name</label>
              <input type="text" name="name" required />
          </div>
          <div className="fields">
            <label>E-mail</label>
            <input type="text" name="e-mail" required />
          </div>
        </div>
        <div className="full-fields">
          <label>Message</label>
          <textarea type="text" rows="5" name="message" required />
        </div>
        <button type="submit">Submit</button>
        <div>{result ? "success" : null}</div>
      </form> 

    }
    </div>
  </ContactPage>
}

const ContactPage = styled.div`
display: flex;
/* flex-flow: column; */
width: 100%;
justify-content: center;
  p{
    /* width: 70%; */
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    margin: 50px;
  }
  .contact-form{
    button{
      width: 120px;
      height: 40px;
      margin: 20px;
      border: none;
      border: 2px solid #7510F7;
      background: white;
      color: #7510F7;
      border-radius: 30px;
      &:hover{
          background: #7510F7;
          color: white;
        }
    }
  }

  @media screen and (max-width: 768px){
    p{
      font-size: 18px;
    }
    .contact-form{
      button{
        width: 30%;
        margin: 20px;
        border: 2px solid #7510F7;
        /* background: #7510F7; */
        background: white;
        height: 35px;
        color: #7510F7;
        border-radius: 30px;
        &:hover{
          background: #7510F7;
          color: white;
        }
      }

  }

  }
    
`
export default Contact
