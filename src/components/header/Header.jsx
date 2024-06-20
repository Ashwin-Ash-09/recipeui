import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
   <a href="/" className={style.link}>
     <div className={style.header}>
      <h2>Recipes.ash</h2>
    </div>
   </a>
  );
}
