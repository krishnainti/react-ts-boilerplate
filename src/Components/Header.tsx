import React, { memo, FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@mui/material";

interface HeaderProps {}

interface HeaderButton {
  label: string;
  link: string;
}

const buttons: HeaderButton[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "List Page",
    link: "/list-page",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
];

const Header: FC<HeaderProps> = () => {
  const location = useLocation();

  return (
    <div className="App__header--items">
      {buttons.map((button: HeaderButton, i: number) => {
        return (
          <Link to={button.link} key={i}>
            <Button
              variant={location.pathname === button.link ? "contained" : "text"}
            >
              {button.label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default memo(Header);
