
import React from "react";
import Navbar from "./navBar";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from "./footer";
import { navigate } from "astro/virtual-modules/transitions-router.js";


interface MainLayoutProps { 
    children: React.ReactNode;
    }


const MainLayout :React.FC<MainLayoutProps>= ({children}) => {


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
    logoSrc: '../assets/logo.jpg',
    logoAlt: data?.story?.content?.navSection[0]?.logoAlt,
    companyName: data?.story?.content?.navSection[0]?.companyName, // Updated company name
    buttonLabel: data?.story?.content?.navSection[0]?.buttonLabel, // Updated button label
    menuItems: [
      { label: 'Home', link: '#', isActive: true },
      { label: 'Products', link: '/product', isActive: false },
      { label: 'Talk to us', link: '#about', isActive: false },
      { label: 'Contact', link: '#contact', isActive: false },
    ],
    onButtonClick: () => {
        navigate('/product');
    },
  };


  return (
    <>

  <Navbar {...navbarData} />

    {children}


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
  );
}

export default MainLayout;