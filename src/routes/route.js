import React from "react";
import { Link } from "gatsby";
import pageRouter from "../config/pageRouter";
import { toReactArray } from "../util/react.util";
import { colors } from "../config/theme";
import styles from "./route.module.css";

const Routing = () => (
  <div className={styles.route}>
    {toReactArray(
      pageRouter.map(({ label, navigate }) => (
        <span className={styles.navigate}>
          <Link
            to={navigate}
            style={{
              textDecoration: "none",
              color: colors.grey,
              fontWeight: "bold",
              fontFamily: "Nanum Gothic",
            }}
          >
            {label}
          </Link>
        </span>
      ))
    )}
  </div>
);

export default Routing;
