import { Formulario } from '../components/form'
import { Header } from "../components/Header"

export default function ContactPage() {
    document.title = 'Contact'
    return (
        <>
            <Header />
            <Formulario />
        </>
    )
}
