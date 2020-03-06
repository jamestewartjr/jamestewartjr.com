import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {Typography} from '@material-ui/core';
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Articles extends React.Component {
  render() {
    const {data, location}= this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title="Articles">
        <div className="articles-container">
          <Helmet>
            {/* <title>{config.siteTitle}</title> */}
            <title>{`Articles | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/articles/`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <Typography align="center" variant="h1">
            Articles
          </Typography>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Articles;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
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
