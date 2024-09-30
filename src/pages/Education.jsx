import '../App.css';

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Hacktiv8 IBM</h3>
          <p>FGA-DTS Web Development Program + React</p>
          <p className="education-item-date">August 2024 – October 2024</p>
        </div>
        <div className="education-item">
          <h3>Enigma Camp</h3>
          <p>Online IT Bootcamp Java</p>
          <p className="education-item-date">August 2024 – October 2024</p>
        </div>
        <div className="education-item">
          <h3>Progate</h3>
          <p>FGA-DTS Mobile App Development with React Native</p>
          <p className="education-item-date">May 2024 – July 2024</p>
        </div>
        <div className="education-item">
          <h3>Universitas Amikom Yogyakarta</h3>
          <p>Bachelor of Informatics Engineering</p>
          <p className="education-item-date">2020 – 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Education;