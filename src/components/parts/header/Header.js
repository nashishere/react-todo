/* @flow */

import * as React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {RoutePaths} from "../../../constants";
import {toggleLanguage} from "../../../utils/i18n";

import "./Header.scss";

const Header = () => {
  const {t} = useTranslation();

  return (
    <div className="todo-app-header">
      <Link className="todo-app-header-title"
            to={RoutePaths.LIST}>
        {t("header.title")}
      </Link>

      <a className="todo-app-header-change-language"
         type="link"
         onClick={toggleLanguage}>
        {t("header.change_language")}
      </a>
    </div>
  );
};

export default Header;