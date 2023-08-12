import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  return (
    <>
    <div className="container bg-white-300 py-22 sm:py-32">

     <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">OUR SERVICES</h2>      
        </div> 
      </div>
     
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"> 
      <div className="container">
        <div className="-mx-1 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/projectmanagement1.jpg"
                alt="services-image"
                width={800}
                height={850}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-teal-500 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ELECTRICAL PROJECTS
                </h3>
                <p className="mt-5 leading-6 tracking-tight text-justify text-gray-400 font-sans text-base line-clamp-5">
                At V-TECH Renewables, we pride ourselves on our in-depth knowledge and experience in electrical projects. From initial design and planning to installation and maintenance, we provide end-to-end consulting services, ensuring that our clients electrical systems meet their specific requirements. Our team of highly skilled electrical engineers and technicians has a proven track record of delivering successful projects for various industries, including residential, commercial, and industrial sectors. We work closely with our clients, understanding their needs and delivering innovative solutions that optimize energy efficiency enhance safety, and ensure reliable power distribution.
                </p>
                <div className="flex justify-center lg:justify-start mt-5">
                 <Link className="px-4 py-2 text-gray-100 bg-gray-500 rounded dark:bg-gray-400 dark:hover:bg-teal-500  hover:bg-gray-400" href="/services/ourservices/projectmanage">
                  Learn More
                 </Link>
                </div>
              </div>
              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-teal-500 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                SOLARPOWER PROJECTS
                </h3>
                <p className="mt-5 leading-6 tracking-tight text-justify text-gray-400 font-sans text-base line-clamp-5">
                As advocates of renewable energy, we offer consultancy and implementation services for solar power projects. Our dedicated team of solar energy experts assists clients in designing, installing, and maintaining efficient solar power solutions. Whether it's a small residential installation or a large-scale commercial project, we tailor our services to each client's unique needs and location. With a focus on maximizing solar energy generation, we utilize the latest technologies, such as photovoltaic (PV) panels, energy storage systems,and smart grid integration, to deliver cost-effective and sustainable solar power projects.Our team also provides ongoing monitoring and maintenance services to ensure optimal system performance and longevity.
                </p>
                <div className="flex justify-center lg:justify-start mt-5">
                 <Link className="px-4 py-2 text-gray-100 bg-gray-500 rounded dark:bg-gray-400 dark:hover:bg-teal-500  hover:bg-gray-400" href="/services/ourservices/projectmanage">
                  Learn More
                 </Link>
                </div>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-teal-500 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                PROJECT MANAGEMENT
                </h3>
                <p className="mt-5 leading-6 tracking-tight text-justify text-gray-400 font-sans text-base line-clamp-5">
                At V-TECH Renewables, effective project management is at the core of what we do. We understand the complexities involved in electrical and solar power projects and strive to deliver exceptional results within budget and timeline constraints. Our experienced project managers take a proactive approach, ensuring thorough planning, efficient resource allocation, and seamless coordination among various stakeholders. We keep our clients updated throughout the project's lifecycle, providing regular progress reports,and addressing any challenges that may arise. Our commitment to meticulous project management ensures successful project completion and client satisfaction.
                </p>
                <div className="flex justify-center lg:justify-start mt-5">
                 <Link className="px-4 py-2 text-gray-100 bg-gray-500 rounded dark:bg-gray-400 dark:hover:bg-teal-500  hover:bg-gray-400" href="/services/ourservices/projectmanage">
                  Learn More
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-gray-300">
        <div className="mb-16 text-center">
          <h3 className="text-base text-gray-500 font-bold tracking-wide uppercase">Features</h3>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-teal-500">
            How we can help your Business
          </p>
        </div>
        <div className="flex flex-wrap my-12">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <div className="ml-4 text-xl text-teal-500">Quality Assurance</div>
            </div>
            <p className="leading-loose text-gray-500 text-justify tracking-tight ">
            At V-TECH Renewables, we prioritize quality in every aspect of our work. We adhere to industry standards and best practices, ensuring that our services are delivered to the highest level of quality. Our team conducts thorough inspections, performs rigorous testing, and implements strict quality control measures throughout the project lifecycle. We source equipment and components from reputable manufacturers and suppliers to ensure reliability and performance. By employing robust quality assurance processes, we guarantee the reliability and longevity of the systems we design and implement, providing peace of mind to our clients.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <div className="ml-4 text-xl text-teal-500">Customized Solutions</div>
            </div>
            <p className="leading-loose text-gray-500 text-justify tracking-tight">
            We understand that each client has unique requirements, and we tailor our solutions accordingly. Our team collaborates closely with clients to understand their goals and objectives, site conditions, and budget constraints. This collaborative approach allows us to develop customized strategies and recommendations that meet their specific needs, ensuring optimal system performance, energy savings, and return on investment. We consider factors such as shading analysis, energy consumption patterns, available roof space, and local regulations to design solar power systems that are tailored to each client's location and objectives.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <div className="ml-4 text-xl text-teal-500">Customer Satisfaction</div>
            </div>
            <p className="leading-loose text-gray-500 text-justify tracking-tight">
            Client satisfaction is our ultimate goal. We strive to exceed our clients' expectations by providing exceptional customer service and support throughout the project lifecycle. Our dedicated team of professionals is committed to open communication, transparency, and responsiveness. We listen to our clients' concerns, address their inquiries promptly, and keep them informed at every stage of the project. We also provide comprehensive post-installation support, including maintenance, troubleshooting, and system optimization. Our commitment to superior customer service enables us to build long-lasting relationships with our clients, based on trust and mutual success.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <div className="ml-4 text-xl text-teal-500">Expertise</div>
            </div>
            <p className="leading-loose text-gray-500 text-justify tracking-tight">
            With over a decade of experience, our team comprises highly-skilled professionals with extensive knowledge in electrical engineering, solar power projects, and project management. Continuous learning and development are key to our success, and we stay abreast of the latest technologies, regulations, and industry trends. This expertise allows us to provide the best-in-class services to our clients, ensuring that their projects are executed to the highest standards.We strive to deliver the best results for every project and are continually improving our processes and technology to ensure that our customers get the most value for their money.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
  </>
 )
};

export default Services;
