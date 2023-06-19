import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gaming from '../images/gaming.jpg'
import coding from "../images/coding.jpg";
import ent_ship from "../images/ent_ship.jpg";
import scratch from "../images/scratch_programming.png";
import vex from "../images/vex.jpg";

import 'aos/dist/aos.css';
import aos from 'aos';

// Initialize AOS
aos.init();

const teamMembers = [
  {
    name: 'Coding',
    description: `Our coding classes are designed to teach students the basics of coding and software
    development. We believe that coding is a critical skill in the digital age.`,
    image: coding,
  },
  {
    name: 'Game Design and Development',
    description: `Our game design and development classes are designed to teach students the basics of
    game design and development. using open source software like Scratch and Unity.`,
    image: gaming,
  },
  {
    name: 'Entrepreneurship',
    description: `Our entrepreneurship programs are designed to provide students with the skills and knowledge
    needed to start and run a successful business.`,
    image: ent_ship,
  },
  {
    name: 'Scratch Programming',
    description: `Our coding classes are designed to teach students the basics of coding and software
    development. We believe that coding is a critical skill in the digital age.`,
    image: scratch,
  },
  {
    name: 'Robotics',
    description: `this workshops are designed to teach students the fundamentals of robotics and
    engineering. robotics is an exciting field that combines science, engineering, and mathematics.`,
    image: vex,
  },
  // Add more team members as needed
];

const StudentPrograms = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          draggable
          swipeable
          centerMode={false}
          autoPlay={false}
          keyBoardControl={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="mx-4"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="bg-white rounded shadow p-6 flex flex-col justify-center items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-38 h-28 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-700 mb-4 text-justify">{member.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default StudentPrograms;
