import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {/* <div className="col-12">
          <Call button={false} />
        </div> */}
        <div className="col-8">
          <h4 className="mt-4"> Connect </h4>
          <ul>
          <lI>
              <a href='https://medium.com/@JameStewartJr'> Blog </a>
            </lI>
            <lI>
              <a href='https://github.com/jamestewartjr/'> Github</a>
            </lI>
            <lI>
              <a href='https://twitter.com/jamestewartjr'> Twitter</a>
            </lI>
            <lI>
              <a href='https://www.linkedin.com/in/jamestewartjr/'> LinkedIn  </a>
            </lI>
          </ul>
            
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
