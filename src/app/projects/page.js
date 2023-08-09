import React from "react";
import Image from 'next/image';

function Projects(){
  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="mt-10 px-8">
            <h1 className="text-teal-500 text-5xl font-semibold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-4xl">
            OUR PROJECTS
            </h1>
          </div>
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <p className="text-base text-gray-400 ">
                  Find our below projects for your reference.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogCard
              Image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              date="Jan 07, 2023"
              CardTitle="Expertise"
              CardDescription="With over a decade of experience, our team comprises highly-skilled professionals with extensive knowledge in electrical engineering, solar power projects, and project management. Continuous learning and development are key to our success, and we stay abreast of the latest technologies, regulations, and industry trends. This expertise allows us to provide the best-in-class services to our clients, ensuring that their projects are executed ."
            />
            <BlogCard
              Image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              date="Mar 15, 2023"
              CardTitle="Customized Solutions"
              CardDescription="We understand that each client has unique requirements, and we tailor our solutions accordingly. Our team collaborates closely with clients to understand their goals and objectives, site conditions, and budget constraints. This collaborative approach allows us to develop customized strategies and recommendations that meet their specific needs, ensuring optimal system performance, energy savings, and return on investment."
            />
            <BlogCard
              Image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              date="Apr 20, 2023"
              CardTitle="Quality Assurance"
              CardDescription="At V-TECH Renewables, we prioritize quality in every aspect of our work. We adhere to industry standards and best practices, ensuring that our services are delivered to the highest level of quality. Our team conducts thorough inspections, performs rigorous testing, and implements strict quality control measures throughout the project lifecycle. We source equipment and components from reputable manufacturers and suppliers to ensure."
            />
            <BlogCard
              Image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              date="Aug 11, 2023"
              CardTitle="Customer Satisfaction"
              CardDescription="Client satisfaction is our ultimate goal. We strive to exceed our clients' expectations by providing exceptional customer service and support throughout the project lifecycle. Our dedicated team of professionals is committed to open communication, transparency, and responsiveness. We listen to our clients' concerns, address their inquiries promptly, and keep them informed at every stage of the project."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;


const BlogCard = ({ Image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
            {date && (
              <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-teal-500 rounded bg-primary">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="inline-block mb-4 text-xl font-semibold text-gray-500 hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <img src={Image} alt="" className="w-full rounded"/>
            <p className="text-base text-gray-500 text-justify">{CardDescription}</p>
          </div>
          <div className="pt-4">
            <a href="#" className="px-4 py-2 text-gray-100 bg-gray-500 rounded dark:bg-gray-400 dark:hover:bg-teal-500  hover:bg-gray-400">Learn more<span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </>
  );
};
