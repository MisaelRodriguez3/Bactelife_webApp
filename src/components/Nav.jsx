import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export function Nav() {
    const navigate = useNavigate()
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/case-studies">Estudios de caso</Link></li>
                <li><Link to="/about-us">Acerca de nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/resources">Recursos</Link></li>
            </ul>
        </nav>
    )
}
