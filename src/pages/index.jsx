import React, { Component } from "react";
import Helmet from "react-helmet";
import {IconButton} from '@material-ui/core';
// import Image from 'gatsby-image';
import Layout from "../layout";
// import About from "../components/About";
import config from "../../data/SiteConfig";
import SOCIAL from '../constants/social';

class Index extends Component {
  render() {
    const {location}= this.props;
    return (
      <Layout location={location} title="Info">
        <div className="index-container">
          <Helmet>
            <title>{`${config.siteTitle} Full Stack Engineer`}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          {/* <About /> */}
          {/* <div className="hero"> */}
          <div className="about-wrapper">
            <div className="highlight">
              <div className="bio">
                <h1>Hi, I'm James.</h1>
                <p> 
                  I'm a full stack software engineer coding in modern javascript.
                  This is my little part of the web.
                </p>
              
                {/* <Image
                  className="avatar"
                  // fixed={data.avatar.childImageSharp.fixed}
                  // alt={author}
                  style={{
                    marginBottom: 0,
                    minWidth: 250,
                    borderRadius: `100%`,
                    border: `8px solid var(--blue)`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                /> */}
                <ul className="horizontal-links">
                  {SOCIAL.map(s => (
                    <li key={s.kind}>
                      <a className="u-no-box-shadow" style={{ textDecoration: "none" }} href={s.url}>
                        <IconButton aria-label={s.kind}>
                          <s.icon />
                        </IconButton>
                      </a>
                    </li>
                    ))}
                </ul>
              </div>
              <img src={config.userAvatar} alt="James" className="avatar" />
            </div>
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Index;
