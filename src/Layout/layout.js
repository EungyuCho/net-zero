import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Routing from "../routes/route";
import Scroll from "../components/Scroll";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Routing />
            <div
              style={{
                margin: "0 auto",
                paddingTop: 0,
                width: "60vw",
              }}
            >
              {children}
            </div>
            <div
              style={{ padding: 60, display: "flex", alignItems: "flex-end" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "fixed",
                bottom: 0,
                width: "100%",
              }}
            >
              <div></div>
              <div style={{ marginRight: 50, marginBottom: 50 }}>
                <Scroll showBelow={250} />
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
