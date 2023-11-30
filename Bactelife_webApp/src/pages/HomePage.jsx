import { Header } from "../components/Header"
import { Footer } from '../components/Footer';

export default function HomePage() {
    document.title = 'Estimation Tool - Bactelife'


    return (
        <>
            <Header button={true} />
            <Footer />
        </>
    )
}
