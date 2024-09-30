import '../App.css';

const Experience = () => {
  return (
    <section>
      <div className="experience-card">
        <h2>Work Experience</h2>

        <div>
          <h3 className="company-name">PT Baracipta Esa Engineering</h3>
          <h4 className="company-date">August 2023 - December 2023</h4>

          <p className="job-title">Internship MSIB Full Stack Developer</p>
          <ul className="job-responsibilities">
            <li>Improving Digital Platform Service Levels Through Integrated Systems</li>
            <li>Application integration with RESTful API</li>
            <li>Usability testing of the system using UAT (User Acceptance Testing)</li>
            <li>Database implementation using MySQL</li>
            <li>Implementation of UI/UX mockup design on application interface</li>
            <li>Responsive Web Design Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;