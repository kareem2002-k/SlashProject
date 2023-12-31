import React from 'react';

interface FooterProps {
  companyName: string;
  resourcesHeading: string;
  followUsHeading: string;
  legalHeading: string;
  privacyPolicyLink: string;
  termsConditionsLink: string;
  rightsReservedText: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  resourcesHeading,
  followUsHeading,
  legalHeading,
  privacyPolicyLink,
  termsConditionsLink,
  rightsReservedText,
}) => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img
                src="./assets/logo.jpg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {companyName}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {resourcesHeading}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">

                    Twitter
                    
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    FaceBook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {followUsHeading}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {legalHeading}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href={privacyPolicyLink} className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={termsConditionsLink} className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="" className="hover:underline">
              {rightsReservedText}
            </a>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
