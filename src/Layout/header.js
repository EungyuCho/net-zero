import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Scroll from "../components/Scroll";
import { colors } from "../config/theme";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: colors.private,
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            wordBreak: "break-all",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
