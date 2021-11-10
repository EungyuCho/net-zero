import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import "./layout.css";
import Routing from "../routes/route";
import Scroll from "../components/Scroll";
import { toReactArray } from "../util/react.util";
import pageRouter from "../config/pageRouter";
import { colors } from "../config/theme";

const Layout = ({ children }) => {
  const [visible, SetVisible] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (visible) {
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
    } else {
      body.style.position = "";
      body.style.top = "";
      body.style.height = "";
      body.style.overflowY = "";
    }
  }, [visible]);
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
        <div style={{ position: "relative", zIndex: 999999 }}>
          {visible && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                overflowY: "hidden",
                zIndex: 9999,
                backgroundColor: "#333333",
              }}
            >
              <div
                style={{
                  width: "100vw",
                  height: "13vh",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 15,
                  paddingLeft: 30,
                }}
              >
                {toReactArray(
                  pageRouter.map(({ label, navigate }) => (
                    <span
                      style={{
                        marginBottom: "30px",
                      }}
                    >
                      <Link
                        to={navigate}
                        style={{
                          textDecoration: "none",
                          color: "#E5E5E5 ",
                          fontWeight: "bold",
                          fontSize: "1.7rem",
                          lineHeight: "1.7rem",
                          fontFamily: "Nanum Gothic",
                        }}
                      >
                        {label}
                      </Link>
                    </span>
                  ))
                )}
              </div>
            </div>
          )}
          <Header
            siteTitle={data.site.siteMetadata.title}
            visible={visible}
            setVisible={SetVisible}
          />
          <Routing />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{}}>{children}</div>
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
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
