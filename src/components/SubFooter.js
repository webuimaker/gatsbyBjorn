import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                {props.data.site.siteMetadata.contact.copyright}
              </li>
             
            </ul>
           
          </div>
        </div>
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
            contact {
              email
              copyright
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
