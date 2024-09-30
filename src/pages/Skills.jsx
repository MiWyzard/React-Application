import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNode, faHtml5, faCss3, faVuejs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} size="2x" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} size="2x" />
          <p>React JS, React Native</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faVuejs} size="2x" />
          <p>Vue</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <p>HTML & CSS</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3} size="2x" />
          <p>Bootstrap, Tailwind</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faNode} size="2x" />
          <p>Node JS, Express</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
