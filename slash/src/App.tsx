import React from 'react';
import ContactSection from './components/contact';
import Services from './components/services';
import Faq from './components/faq';
import Footer from './components/footer';
import './App.css';
import Hero from './components/hero';
import Testimonials from './components/testomnials';
import Navbar from './components/navBar';
import ECommerceTalk from './components/services';
import Contact from './components/contact';
import ProductList from './pages/Products';

const App: React.FC = () => {
  const navbarData = {
    logoSrc: 'https://seeklogo.com/images/S/slash-logo-0435BB56F5-seeklogo.com.png',
    logoAlt: 'Logo',
    companyName: 'Slash', // Updated company name
    buttonLabel: 'Shop Now', // Updated button label
    menuItems: [
      { label: 'Home', link: '#', isActive: true },
      { label: 'Products', link: '#products', isActive: false },
      { label: 'About Us', link: '#about', isActive: false },
      { label: 'Contact', link: '#contact', isActive: false },
    ],
    onButtonClick: () => {
      // Do something when the button is clicked
    },
  };

  const featuredData = [
    {
      title: 'New Arrivals',
      description: 'Discover the latest trends in fashion with our new arrivals.',
      link: '#new-arrivals',
      isNew: true,
    },
  ];

  React.useEffect(() => {
    console.log('Fetching product data...');
  }
  );

  return (
    <div className="flex flex-col min-h-screen overflow-hidden w-full">
      <Navbar {...navbarData} />
      <ProductList   />

      {/*
      <Hero items={featuredData} />
      <ECommerceTalk
        title="Discover Style with Slash"
        description1="Explore the latest fashion trends with Slash - your ultimate destination for style. From timeless classics to cutting-edge designs, we've got it all."
        description2="Shop with confidence, knowing that we curate our collection with a keen eye for quality and uniqueness. Elevate your wardrobe with Slash today!"
        description3="Sign up for our newsletter to stay updated on new arrivals, exclusive offers, and more."
        image1Src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        image2Src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
        altText1="Fashionable clothing 1"
        altText2="Fashionable clothing 2"
      />
      <Contact
        title="Get in Touch"
        description="Have questions about our products or need assistance? Reach out to us - we're here to help!"
        emailLabel="Your Email"
        emailPlaceholder="name@slashfashion.com"
        subjectLabel="Subject"
        subjectPlaceholder="How can we assist you?"
        messageLabel="Your Message"
        buttonText="Send Message"
      />
      <Footer
        companyName="Slash"
        resourcesHeading="Explore"
        followUsHeading="Connect with Us"
        legalHeading="Legal Information"
        privacyPolicyLink="#privacy-policy"
        termsConditionsLink="#terms-conditions"
        rightsReservedText="Slash™ - All Rights Reserved"
      /> */}
    </div>
  );
};

export default App;
