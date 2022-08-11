import "./styles.css";

import { IntlProvider } from "react-intl";

import React from "react";

import { Link, Route, Switch, Router } from "react-router-dom";

import { Header } from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";

//Router Link
import { BrowserRouter } from "react-router-dom";

import "./Components/Styles/app.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
