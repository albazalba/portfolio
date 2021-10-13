import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import logo from "../assets/logo.svg"
import Navbar from "../components/Navbar"

const contact = () => {
  return <ContactPage>
    <Navbar />
    <div className="form-container">
      <h3>Thanks for taking the time to reach out. How can I help you today?</h3>
      <form>
       <div className="half-fields">
          <div className="fields">
              <label>Name</label>
              <input type="text" required />
          </div>
          <div className="fields">
            <label>E-mail</label>
            <input type="text" required />
          </div>
        </div>
        <div className="full-fields">
          <label>Message</label>
          <input type="text" rows="5" required />
        </div>
      </form>
    </div>
  </ContactPage>
}

const ContactPage = styled.div`
display: flex;
justify-content: center;
  h3{
    width: 70%;
    text-align: center;
    font-weight: 200;
  }
  .form-container{
    margin: 10px 15px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .half-fields{
      display: flex;
      font-size: 19px;
      /* margin: 5px; */
      justify-content: space-between;
      .fields{
        width: 45%;
        display: flex;
        flex-flow:column;
        input{
          font-size: 15px;
          padding: 10px;
        }
      }
    }
    .full-fields{
      display: flex;
      flex-flow: column;
      font-size: 19px ;
      input{
          font-size: 15px;
          padding: 10px;
          height: 50px;
        }
    }

  }
    
`
export default contact
