import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import { colors } from "../config/theme";

const Scroll = ({ showBelow }) => {
  const classes = makeStyles((theme) => ({
    toTop: {
      zIndex: 2,
      bottom: "2vh",
      backgroundColor: colors.private,
      color: "black",
      "&:hover, &.Mui-focusVisible": {
        transition: "0.3s",
        color: "#397BA6",
        backgroundColor: "#DCDCDC",
      },
      [theme.breakpoints.up("xs")]: {
        right: "5%",
        backgroundColor: colors.private,
      },
      [theme.breakpoints.up("lg")]: {
        right: "6.5%",
      },
    },
  }));

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    console.log(window.scrollY, show);
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};
export default Scroll;
