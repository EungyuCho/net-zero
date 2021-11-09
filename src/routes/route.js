import React from "react";
import { Link } from "gatsby";
import pageRouter from "../config/pageRouter";
import { toReactArray } from "../util/react.util";
import { colors } from "../config/theme";

const Routing = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: 10,
      paddingLeft: 25,
      minWidth: 200,
    }}
  >
    {toReactArray(
      pageRouter.map(({ label, navigate }) => (
        <Link
          to={navigate}
          style={{
            marginBottom: 10,
            textDecoration: "none",
            color: colors.grey,
            fontWeight: "bold",
            fontFamily: "Nanum Gothic",
          }}
        >
          {label}
        </Link>
      ))
    )}
  </div>
);

export default Routing;
