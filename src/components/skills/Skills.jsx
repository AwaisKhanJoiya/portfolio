import "./skill.scss";
import { skills } from "../../data";

const Skills = () => {
  return (
    <div className="skills_container">
      <div className="left_container inner_container">
        <div className="inner">
          <h2 className="about_me">About me</h2>
          <p className="about_desc">
            I am a self-taught full-stack developer with over 2 years of
            experience. During my experience in web development, I have to build
            many websites for my clients. All of them have a 5-star rating about
            me. I am also a level one seller on Fiverr, maintaining a 5-star
            rating. My mission is to learn the latest trending technologies and
            deliver my clients quality work. I love coding and am always willing
            to learn new technologies. I always work hard for my clients until
            they get what they want.
          </p>
          <button className="hire_btn">Hire me</button>
        </div>
      </div>
      <div className="right_container inner_container">
        <div className="inner">
          <h2 className="about_me">Skills</h2>
          <div className="skills">
            {skills.map((obj) => (
              <div className="skill">
                <p className="skill_heading">{obj.name}</p>
                <div className="progress">
                  <div
                    className="progress_up"
                    style={{ width: obj.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
