import React from 'react';
import Footer from './components/footer';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navBar';
import ECommerceTalk from './components/services';
import Contact from './components/contact';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.storyblok.com/v2/cdn/stories/landing?version=draft&token=9PFACYpHqj3thQB4B6Roxgtt&cv=1703089534'
        );
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const navbarData = {
    logoSrc: 'https://seeklogo.com/images/S/slash-logo-0435BB56F5-seeklogo.com.png',
    logoAlt: data?.story?.content?.navSection[0]?.logoAlt,
    companyName: data?.story?.content?.navSection[0]?.companyName, // Updated company name
    buttonLabel: data?.story?.content?.navSection[0]?.buttonLabel, // Updated button label
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
      {loading ? <div className="flex items-center justify-center h-screen">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />{" "}
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div> :   
          <>
      <Navbar {...navbarData} />
      

      
      <Hero items={featuredData} />
      <ECommerceTalk
        title={data?.story?.content?.heroSection[0]?.title}
        description1={data?.story?.content?.heroSection[0]?.description1}
        description2={data?.story?.content?.heroSection[0]?.description2}
        description3="Sign up for our newsletter to stay updated on new arrivals, exclusive offers, and more."
        image1Src={data?.story?.content?.heroSection[0]?.image1Src}
        image2Src={data?.story?.content?.heroSection[0]?.image1Src}
        altText1="Fashionable clothing 1"
        altText2="Fashionable clothing 2"
      />
      <Contact
        title={data?.story?.content?.contact[0]?.title}
        description={data?.story?.content?.contact[0]?.description}
        emailLabel="Your Email"
        emailPlaceholder="name@slashfashion.com"
        subjectLabel="Subject"
        subjectPlaceholder="How can we assist you?"
        messageLabel="Your Message"
        buttonText={data?.story?.content?.contact[0]?.buttonText}
      />
      <Footer
        companyName={data?.story?.content?.footer[0]?.companyName}
        resourcesHeading={data?.story?.content?.footer[0]?.resourcesHeading}
        followUsHeading={data?.story?.content?.footer[0]?.followUsHeading}
        legalHeading={data?.story?.content?.footer[0]?.legalHeading}
        privacyPolicyLink={data?.story?.content?.footer[0]?.privacyPolicyLink}
        termsConditionsLink={data?.story?.content?.footer[0]?.termsConditionsLink}
        rightsReservedText="Slash™ - All Rights Reserved"
      />
      </>
  }
    </div>
  
  );
};

export default App;