import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Collaborate from "../components/Collaborate"
import Footer from "../components/Footer"
import Blogs from "../components/Blogs"
export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects />
      <Collaborate />
      <Footer />
    </Layout>
 )
}
// ...GatsbyImageSharpFluid
