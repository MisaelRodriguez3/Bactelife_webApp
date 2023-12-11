import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export function Nav() {
    const navigate = useNavigate()
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    )
}
