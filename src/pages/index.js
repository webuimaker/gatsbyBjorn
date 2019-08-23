import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Aboutinfo from '../components/Aboutinfo';
import Section3 from '../components/Section3';
import Recentnews from '../components/Recentnews';

const Home = (props) => {
 
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
	  
	   <div className="intro">
        <div className="container">
          <h1>SThe Scientific Method, applied to  <br/> the creation of Economic value.</h1>          
        </div>
      </div>
	  <div className="about-info py-10">
        <Aboutinfo/>
      </div>
	  <div className="sec3 ">
        <Section3/>
      </div>
	  <div className="container">
        <Recentnews />
      </div>


    </Layout>
  );
};

export const query = graphql`
  query {
     
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
