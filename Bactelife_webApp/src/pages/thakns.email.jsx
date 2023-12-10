import React from "react";
import ThanksContent from '../components/Thanks'; // Renombrado desde 'ThankYouPage'

import { Header } from "../components/Header"
import { Footer } from '../components/Footer';

export default function ThankYouPage() {
    document.title = 'thanks'
    return (
        <>
            <Header button={false}/>
            <ThanksContent /> {/* Utilizando el componente renombrado */}
            <Footer />
        </>
    )
}
