import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./MenuItems.css";
export default [
  { id: 1, title: <Link to="/home">Home</Link>, cName: "nav-link" },

  { id: 2, title: "About", cName: "nav-link" },
  {
    id: 3,
    title: (
      <NavDropdown title="All Catagory" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          {" "}
          <Link to="/all-news/news">Top News </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          {" "}
          <Link to="/all-news/sports">Sports </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          {" "}
          <Link to="/all-news/health">Health </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    ),
    cName: "nav-link",
  },
  { id: 4, title: "Contact Us", cName: "nav-link" },
  { id: 5, title: "Feedback", cName: "nav-link" },
];
