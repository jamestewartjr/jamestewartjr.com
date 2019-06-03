import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
// import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="The web home of James D Stewart JR."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>James Stewart Jr. </h1>
          <p>
          Full Stack engineer who enjoys using javascript to communicate via different platforms.
          </p>
        </div>
      </div>

      {/* <div className="container pt-2">
        <Call button />
      </div> */}

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3"></h2>
          </div>
          {/* Content summary on homepage*/}
          {/* {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))} */}
          {/* <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div> */}
          <h6 className="title-3 text-dark mb-4">Currently</h6>
          <ul>
            <lI>
              <a href='https://'> Frontend Engineer (Contract)</a>
            </lI>
          </ul>
          <h6 className="title-3 text-dark mb-4">Previously</h6>
          <ul>
            <lI>
              <a href='https://www.invue.com'> InVue: Software Engineer (Contract)</a>
            </lI>
            <lI>
              <a href='https://learnersguild.org'> Learners Guild: Software Engineer</a>
            </lI>
            <lI>
              <a href='https://getcolorstock.com'> Colorstock: Co-founder </a>
            </lI>
            <lI>
              <a href='https://www.charlotteagenda.com/20077/work-life-of-james-stewart-co-founder-of-colorstock/'> Detailed Block: Co-founder, CEO  </a>
            </lI>
          </ul>
        </div>
      </div>

      {/* <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;