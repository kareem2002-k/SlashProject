import React from 'react';
// import {useStor}
import NavBar from './components/navBar';
import Contact from './components/contact';
import Services from './components/services';
import Faq from './components/faq';
import Footer from './components/footer';

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <Contact />
            <Services />
            <Faq />
            <Footer />
        </>
    );
};

export default App;
