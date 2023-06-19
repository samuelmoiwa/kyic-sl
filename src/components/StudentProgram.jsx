/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import JoinStudentProgramForm from "./JoinOurStudentProgramForm";
import kyic_3 from "../images/kyic_3.png";
import kyic_img1 from "../images/kyic_img1.jpg"
import kyic_img2 from "../images/kyic_img2.jpg"
import kyic_img3 from "../images/kyic_img3.jpg"
import join_our_student_program from "../images/join_our_program.svg";
import StudentProgramCards from './StudentPrograms';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StudentPrograms() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="bg-gray-100 w-full">
        <div
          className="
        w-full bg-cover bg-no-repeat h-96
        align-middle justify-center
        flex-col
        flex items-center text-center"
          style={{ backgroundImage: `url(${kyic_3})` }}
        >
          <h1 className="text-white text-5xl font-bold ">Student Programs</h1>
        </div>
      </div>

      {/* <!--Container--> */}
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
            Promoting STEM Education
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <p className="text-gray-600 mb-8 text-justify">
                The Kamara Yokie Innovation Center (KYIC) is a youth-led center in Sierra Leone that promotes STEM
                education and develops young entrepreneurs in Africa. KYIC engages students through STEM education
                programs, offering hands-on experience in science, technology, engineering, and mathematics. Students
                participate in workshops, seminars, and mentorship sessions to excel in STEM subjects.
              </p>
            </div>

            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <img src={kyic_img1} alt="Image 1" />
            </div>

            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <p className="text-gray-600 mb-8 text-justify">
                KYIC also offers an entrepreneurship program, guiding students in developing their business ideas
                into viable ventures. They learn practical skills such as marketing, financial management,
                and business planning. Additionally, KYIC conducts outreach initiatives, partnering with
                schools and communities to promote STEM education and entrepreneurship.
              </p>
            </div>

            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <img src={kyic_img2} alt="Image 2" />
            </div>

            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <p className="text-gray-600 mb-8 text-justify">
                Through their online platform, KYIC provides access to educational resources, videos, tutorials, and
                interactive activities, ensuring students across Africa can learn and grow regardless of their location.
                Overall, KYIC equips students with the knowledge, skills, and resources they need to succeed in the
                21st century.
              </p>
            </div>

            <div className="w-full sm:w-1/2 p-6" data-aos="fade-up">
              <img src={kyic_img3} alt="Image 3" />
            </div>
          </div>
        </div>
      </section>


      <section class="bg-gray-100 border-b py-6">
        <div class="container max-w-7xl mx-auto m-8 p-6">
          <h2 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800 mb-10">
            Student Programs
          </h2>
          <StudentProgramCards />
        </div>
      </section>

      <section class="bg-white border-b py-8 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${join_our_student_program})` }}
      >
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800 mb-10">
            Sign up for our student program
          </h2>
          <JoinStudentProgramForm />
        </div>
      </section>
    </div>
  );
}
