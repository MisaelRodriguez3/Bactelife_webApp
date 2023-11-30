import { Formulario } from '../components/form'
import { Header } from "../components/Header"
import { Footer } from '../components/Footer';

export default function ContactPage() {
    document.title = 'Contact'
    return (
        <>
            <Header button={false}/>
            <Formulario />
            <Footer />
        </>
    )
}
