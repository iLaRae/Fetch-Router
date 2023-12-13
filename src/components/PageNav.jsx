import { Link } from "react-router-dom"


function PageNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/fetchpoke">Fetch Your Pokemon</Link>
                </li>
            </ul>

        </nav>
    )
}

export default PageNav
