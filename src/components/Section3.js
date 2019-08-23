import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import sec3image from '../images/sec3image.jpg';

const Call = props => (

	<div className="row ">
		<div className="col-6 imagebg">
		</div>
		<div className="col-6 p-10 txt-white">
			
			<h1 className="titlenew">Sed ut perspiciatis unde.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
			<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
			
			
			  <div className="call-box-bottom">
				<a href="/contact" className="button">
				  Contact
				</a>
			  </div>
			
		</div>
	</div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
           
            
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
