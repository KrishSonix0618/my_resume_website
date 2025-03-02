import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import './tailwind.css';

const Resume = () => {
  const [activeContact, setActiveContact] = useState(null);

useEffect(() => {
  if (activeContact) {
    const timeout = setTimeout(() => setActiveContact(null), 5000);
    return () => clearTimeout(timeout);
  }
}, [activeContact]);


  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold">Krishna Soni</h1>
        <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
          <li><a href="#summary" className="hover:text-blue-500">Summary</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#Project" className="hover:text-blue-500">Project</a></li>
          <li><a href="#education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Krishna Soni</h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mt-2">ETL Developer | Spotfire Developer</h2>
        <div className="flex space-x-4 sm:space-x-6 mt-4">
          <FaLinkedin className="text-xl sm:text-2xl cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/krishna-soni-928547105", "_blank")} />
          <FaGithub className="text-xl sm:text-2xl cursor-pointer" onClick={() => window.open("https://github.com/KrishSonix0618", "_blank")} />
          <FaPhone className="text-xl sm:text-2xl cursor-pointer" onClick={() => setActiveContact(activeContact === "phone" ? null : "phone")} />
          <FaEnvelope className="text-xl sm:text-2xl cursor-pointer" onClick={() => setActiveContact(activeContact === "email" ? null : "email")} />
        </div>
        {activeContact === "phone" && <p className="mt-2 bg-gray-200 p-2 rounded">+91 8169220711</p>}
        {activeContact === "email" && <p className="mt-2 bg-gray-200 p-2 rounded">krishna.soni.0618@gmail.com</p>}
      </section>

      {/* Summary Section */}
      <section id="summary" className="flex justify-center py-12 sm:py-24 px-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">Summary</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Professional Data Analyst with over 7+ years of experience who leads a team in developing and maintaining reports using Spotfire, Power BI, SQL, Azure Data Factory, Azure Databricks, Teradata and SAS. Experienced in building custom dashboard, reports, data pipelines and optimize workflow to enhance performance, leading to rapid delivery of business data, providing valuable insights into company performance on an annual basis. This enables businesses to assess their progress effectively and make informed strategic decisions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-24 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Job 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Delivery Module Lead - Mphasis Limited</h3>
            <p className="text-gray-700 text-sm sm:text-base">March 2024 - Present | Bangalore</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Streamlined SAS workflow, cutting process time by 33% (from 6 hours to 4 hours), resulting in improved operational efficiency.</li>
              <li>Migrated existing SAS scripts to Azure Databricks technology, achieving a 62% reduction in execution time, from 8 hours to 3 hours.</li>
              <li>Executed comprehensive regression testing between SAS and Azure Databricks, achieving 98% data accuracy and consistency, which facilitated the business's decision to migrate to Azure Databricks.</li>
              <li>Investigated processes with a 35% data discrepancy, implementing corrective actions to reduce the discrepancy to 5-6%. Shared the results and code with the business for review and further validation.</li>
              <li>Analyzed data quality issues and implemented bug fixes to resolve discrepancies, improving data integrity and ensuring more accurate and reliable reporting on dashboards.</li>
              <li>Developed and administered 10+ dashboards in Spotfire, converting business requirements into actionable visualizations and reports to drive informed decision-making.</li>
              <li>Transferred data from on-premises to the cloud using Azure Data Factory, developing automated pipelines which uses parallel processing, that improved data transfer efficiency by reducing processing time by 10% and minimizing manual intervention.</li>
              <li>Orchestrated post-migration data assessment from on-premises to Azure cloud, achieving 99.9% data accuracy ensuring seamless business transition.</li>
            </ul>
          </div>
          {/* Job 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">IT Analyst - Tata Consultancy Services</h3>
            <p className="text-gray-700 text-sm sm:text-base">February 2017 - January 2024 | Mumbai</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Transitioned 5+ vendor application reports into Spotfire using Oracle SQL, streamlined tasks, and conducted validation checks to ensure accuracy and system stability.</li>
              <li>Managed a team of 8+ associates, delivering daily client updates, troubleshooting issues, and enhancing database views and Spotfire reports.</li>
              <li>Oversaw data migration to AWS, synchronized application databases, and provided technical assistance for batch processes, guaranteeing 24/5 application uptime.</li>
              <li>Executed quality assurance testing for software releases, collaborated with cross-functional teams to resolve incidents, and conducted disaster recovery testing.</li>
              <li>Led training workshops for business users on Spotfire, developed customized reports, and maintained process documentation and SOPs for audits.</li>
              <li>Modified static data at the trade level, performed bulk data loads, and validated tests in Non-Prod environments, ensuring 100% accuracy before implementing changes in Prod.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="Project" className="py-12 sm:py-24 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Project</h2>
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-lg sm:text-xl font-semibold">POC(Spotfire to Power BI)</h3>
          <p className="text-gray-700 text-sm sm:text-base">December 2024 - Present | Mphasis Limited</p>
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
            <li>Achieved successful migration of 2 Spotfire dashboards to Power BI, ensuring a flawless transition while maintaining a 90% accuracy in data visualization and preserving all key user functionalities throughout the process.</li>
            <li>Optimized dashboard performance by optimizing queries, implementing aggregation techniques, and improving data load time within Power BI, resulting in a 10% reduction in dashboard load time.</li>
            <li>Validated dashboard data between Spotfire and Power BI, achieving 98% accuracy and consistency in data alignment.</li>
            </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-24 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Education</h2>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Master of Computer Applications</h3>
            <p className="text-gray-700 text-sm sm:text-base">Sastra Deemed To Be University, 2020</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Bachelor of Science in Information Technology</h3>
            <p className="text-gray-700 text-sm sm:text-base">M.L Dahanukar College Of Commerce(University of Mumbai), 2013</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-24 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Technical Skills</h3>
            <p className="text-gray-700 text-sm sm:text-base">Oracle SQL, Spotfire, Power BI, ETL, Teradata, Python, Unix, TDV, SAS</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Cloud Skills</h3>
            <p className="text-gray-700 text-sm sm:text-base">Azure Data Factory, Azure Databricks, Azure SQL</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Agile Skills</h3>
            <p className="text-gray-700 text-sm sm:text-base">Rally, ServiceNow</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold">Soft Skills</h3>
            <p className="text-gray-700 text-sm sm:text-base">Analytical, Customer-Focused Mindset, Teamwork, Leadership, Communication</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-100 mt-10">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Krishna Soni. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
