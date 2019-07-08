/* @flow */

import * as React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {RoutePaths} from "../../../constants";
import {LanguageSelector} from "../index";

import "./Header.scss";

const Header = () => {
  const {t} = useTranslation();

  return (
    <div className="todo-app-header">
      <Link className="todo-app-header-title"
            to={RoutePaths.LIST}>
        {t("header.title")}
      </Link>

      <LanguageSelector />
    </div>
  );
};

export default Header;