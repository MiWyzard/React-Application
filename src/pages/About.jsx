import '../App.css';

const About = () => {
  return (
    <section>
      <div className="about-content">
        <h2>About Me</h2>
        <p>Name: Ikhsan Habib Kusuma</p>
        <p>Role: Full Stack Developer</p>
        <div className="about-contact">
          <h3>Contact Information</h3>
          <p>Yogyakarta, Indonesia</p>
          <p>Phone: +6285293402352</p>
          <p>Email: <a href="mailto:IkhsanKusuma1551@gmail.com">IkhsanKusuma1551@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default About;
