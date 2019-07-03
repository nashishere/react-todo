/* @flow */

import * as React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {toggleLanguage} from "../../../utils/i18n";

import "./Header.scss";

const Header = () => {
  const {t} = useTranslation();

  return (
    <nav className="todo-app-header">
      <Link className="todo-app-header-title"
            to="/list">
        {t("header.title")}
      </Link>

      <a className="todo-app-header-change-language"
         type="button"
         onClick={toggleLanguage}>
        {t("header.change_language")}
      </a>
    </nav>
  );
};

export default Header;