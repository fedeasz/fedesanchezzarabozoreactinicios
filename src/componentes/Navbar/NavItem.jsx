import { Link } from "react-router-dom";

const NavItem = ({href,children}) => {
    return(
        <li>
            <Link to={href}>{children}</Link>
        </li>
    )
}

export default NavItem;