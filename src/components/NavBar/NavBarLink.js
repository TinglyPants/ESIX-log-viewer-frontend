import { Link } from "react-router-dom";

export default function NavBarLink({ href, text }) {
    return (
        <Link to={href} className="border-r-[1px] border-white p-5">
            {text}
        </Link>
    );
}
