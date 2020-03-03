import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Notes extends React.Component {
  render() {
    const {data, location}= this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title="Notes">
        <div className="notes-container">
          <Helmet>
            {/* <title>{config.siteTitle}</title> */}
            <title>{`Notes | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/notes/`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Notes;

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
