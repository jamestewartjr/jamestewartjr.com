import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
// import About from "../components/About";
import config from "../../data/SiteConfig";

class Index extends Component {
  render() {
    const {location}= this.props;
    return (
      <Layout location={location} title="Info">
        <div className="index-container">
          <Helmet>
            <title>{`Info | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          {/* <About /> */}
          {/* <div className="hero"> */}
          <div className="about-wrapper">
            <h1>Hi! I'm James.</h1>
            <p> I'm a full stack software developer coding in modern javascript.</p>
            <p> This is my little part of the web.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
