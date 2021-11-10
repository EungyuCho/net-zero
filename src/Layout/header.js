import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { colors } from "../config/theme";
import HamBurgerRoute from "../routes/hamburgerRoute";

const Header = ({ siteTitle, visible, setVisible }) => (
  <div
    style={{
      width: "100vw",
      background: colors.private,
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HamBurgerRoute visible={visible} setVisible={setVisible} />
      </div>
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
