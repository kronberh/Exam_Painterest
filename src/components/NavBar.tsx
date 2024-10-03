import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar () {
    const menu_items = [
        { path: "/", title: "Home" },
        { path: "add-image", title: "Add Image" },
        { path: "account", title: "You" },
      ];
    return (
        <>
            <nav>
                <li>
                    <img src="/logo.png" alt="Painterest" />
                </li>
                {menu_items.slice(0, -1).map((el, index) => (
                <li key={index}>
                    <NavLink to={el.path} end>{el.title}</NavLink>
                </li>
                ))}
                <li>
                    <input type="search" placeholder="⌕" />
                </li>
                <li>
                    <NavLink to={menu_items[menu_items.length - 1].path} end>{menu_items[menu_items.length - 1].title}</NavLink>
                </li>
        </nav>
      </>
    );
}

export { Navbar }
