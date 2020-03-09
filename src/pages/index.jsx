import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {IconButton} from '@material-ui/core';
// import Image from 'gatsby-image';
import Layout from "../layout";
import CompactListing from "../components/CompactListing";
import config from "../../data/SiteConfig";
import SOCIAL from '../constants/social';

class Index extends Component {
  render() {
    const {data, location}= this.props;
    const postEdges = data.allMarkdownRemark.edges;
    const articles = [];
    postEdges.forEach(postEdge => {
      articles.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });

    return (
      <Layout location={location} title="Info">
        <div className="index-container">
          <Helmet>
            <title>{`${config.siteTitle} Full Stack Engineer`}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          {/* <div className="hero"> */}
          <div className="about-wrapper">
            <div className="highlight">
              <div className="bio">
                <h1>Hi, I'm James.</h1>
                <p> 
                  I'm a full stack software engineer coding in modern javascript based in Charlotte.
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
            <h2>Recent Articles</h2>
            <h3>
              <CompactListing data={articles} />
            </h3>
          </div>

        </div>
      </Layout>
    );
  }
}

export default Index;


export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;