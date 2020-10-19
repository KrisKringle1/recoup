import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Real People. Real Results.</h1>
    <p>At RECOUP our mission is to help our community feel confident in their bodies, move pain free and change their lives forever.
        As a private exercise studio that specializes in personal training and customized nutrition, we offer time-tested results with
        over a decade of experience. We understand how hard it is to take that first step. Whether it’s picking up the phone or
        walking through the front door, we promise to provide a safe, clean, and non-intimidating environment that’s an extension of our home.
        Let us help you look and feel better than you ever have in your life.</p>

  </Layout>
)

export default IndexPage
