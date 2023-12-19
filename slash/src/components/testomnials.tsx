import React from 'react';

interface TestimonialCardProps {
  data: {
    image: {
      filename: string;
    };
    name: string;
    comment: string;
  };
}

interface TestimonialsProps {
  data: {
    title: string;
    testimonial_cards: TestimonialCardProps['data'][];
  };
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const { title, testimonial_cards } = data;

  return (
    <section className="px-52 bg-zinc-950 pt-24 pb-32">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {testimonial_cards.map((t, index) => (
          <TestimonialCard data={t} key={index} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const { image, name, comment } = data;

  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
        <p className="text-xl leading-normal">{comment}</p>
        <Avatar image={image.filename} name={name} />
      </div>
    </div>
  );
};

interface AvatarProps {
  image: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className="flex items-center mt-3 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10">
        <img src={props.image} width="100" height="100" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
      </div>
    </div>
  );
};

export default Testimonials;
