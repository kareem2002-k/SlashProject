import React from 'react';
import NavBar from './components/navBar';
import ContactSection from './components/contact'; // Assuming you have a 'ContactSection' component
import Services from './components/services';
import Faq from './components/faq';
import Footer from './components/footer';
import './App.css';
import Hero from './components/hero';
import Testimonials from './components/testomnials';

const App: React.FC = () => {
  // Assuming you have some data
  const servicesData = {
    title: 'Services Title',
    service_cards: [
      { title: 'Service 1', subtitle: 'Subtitle 1', price: '$100', description: 'Description 1' },
      { title: 'Service 2', subtitle: 'Subtitle 2', price: '$150', description: 'Description 2' },
      // Add more service cards as needed
    ],
  };

  const testimonialsData = {
    title: 'Testimonials Title',
    testimonial_cards: [
      { image: { filename: 'https://seeklogo.com/images/S/slash-logo-0435BB56F5-seeklogo.com.png' }, name: 'Name 1', comment: 'Comment 1' },
      { image: { filename: 'https://seeklogo.com/images/S/slash-logo-0435BB56F5-seeklogo.com.png' }, name: 'Name 2', comment: 'Comment 2' },
      // Add more testimonial cards as needed
    ],
  };

  const faqData = {
    title: 'FAQ Title',
    faq_cards: [
      { question: 'Question 1', answer: 'Answer 1' },
      { question: 'Question 2', answer: 'Answer 2' },
      // Add more FAQ cards as needed
    ],
  };

  const contactData = {
    title: 'Contact Title',
    description: 'Contact Description',
    email: 'contact@example.com',
    phone: '+123456789',
    location: '123 Main St, Cityville',
  };

  const footerdData = {
   text : 'Footer text'
    };

  return (
    <>
      <NavBar />
      <Hero />
      <Services data={servicesData} />
      <Faq data={faqData} />
      <Testimonials data={testimonialsData} />
      <ContactSection data={contactData} />
      <Footer data={footerdData} />


    </>
  );
};

export default App;
