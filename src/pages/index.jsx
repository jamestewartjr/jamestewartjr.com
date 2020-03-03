import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
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
          <About />
        </div>
      </Layout>
    );
  }
}

export default Index;
