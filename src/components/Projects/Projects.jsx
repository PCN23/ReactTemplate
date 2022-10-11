// import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
  return <div>
    <h1>My Personal Projects</h1>
    <NavLink to="paccfish">PaccFish</NavLink>
    <NavLink to="failedsoccer">Failed Soccer</NavLink>
    <NavLink to="cars">Cars</NavLink>
    <Outlet />
  </div>;
}
