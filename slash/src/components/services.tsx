import React from 'react';

interface ECommerceTalkProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image1Src: string;
  image2Src: string;
  altText1: string;
  altText2: string;
}

const ECommerceTalk: React.FC<ECommerceTalkProps> = ({
  title,
  description1,
  description2,
  description3,
  image1Src,
  image2Src,
  altText1,
  altText2,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-4">{description1}</p>
          <p className="mb-4">{description2}</p>
          <p>{description3}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={image1Src} alt={altText1} />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={image2Src}
            alt={altText2}
          />
        </div>
      </div>
    </section>
  );
};

export default ECommerceTalk;
