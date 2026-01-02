import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [codingSkills, setCodingSkills] = useState([
    { name: "React", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
    { name: "Spring Boot", percentage: 80 },
    { name: "Java", percentage: 75 },
    { name: "Oracle & MyBatis", percentage: 70 },
    { name: "HTML/CSS", percentage: 80 },
  ]);
  // 프로젝트 카테고리
  const projectCategories = [
    { name: "All", count: 2 },
    { name: "Solo-project", count: 0 },
    { name: "Team-project", count: 2 },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  // Main.jsx 파일 등 projects 배열이 정의된 곳

  const projects = [
    {
      id: 1,
      title: "Semi Project",
      description: "세미 프로젝트 - codePaw",
      image: `${import.meta.env.BASE_URL}profile_images/semi-project.jpg`,
      category: "Team-project",
      pdfUrl: `${import.meta.env.BASE_URL}pdfs/기획보고서_최종_codePaw.pdf`,
    },
    {
      id: 2,
      title: "Final Project",
      description: "파이널 프로젝트 - Talk & Deal",
      image: `${import.meta.env.BASE_URL}profile_images/final-project.jpg`,
      category: "Team-project",
      pdfUrl: `${
        import.meta.env.BASE_URL
      }pdfs/FinalProject_최종보고서_Talk & Deal.pdf`,
    },
  ];
  // 선택된 카테고리에 따라 필터링된 프로젝트 목록
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Home 영역 DOM을 직접 가리키기 위한 ref
  const homeRef = useRef(null);
  // Home 섹션을 아래로 스크롤할수록 점점 투명하게 만드는 효과
  useEffect(() => {
    const home = homeRef.current;
    if (!home) return;
    const homeHeight = home.offsetHeight;

    const handleScroll = () => {
      const rawOpacity = 1 - window.scrollY / homeHeight;
      const opacity = Math.max(0, Math.min(1, rawOpacity));
      home.style.opacity = opacity;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* Home Section */}
      <section id="home">
        <div className="home_container" ref={homeRef}>
          <img
            className="home_avatar"
            src={`${import.meta.env.BASE_URL}profile_images/Lee-Yong-Jae.jpg`}
            alt="Profile"
          />
          <h2 className="home_title">
            안녕하세요
            <br />
            <strong className="home_title--strong">
              신입 개발자 이용재입니다.
            </strong>
          </h2>
          <p className="home_description">
            늦게 시작했지만 누구보다 진지하게 개발에 임하고 있습니다. 모르는
            부분을 그대로 두지 않고 끝까지 해결하는 것을 가장 중요한 태도로
            생각합니다. 작은 기능 하나도 정확히 이해하며 만드는 개발자가 되고
            싶습니다.
          </p>
          <Link className="home_contact" to="#contact">
            Contact
          </Link>
        </div>
        <div className="home_divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section max-container">
        <h2 className="title">About Me</h2>
        <p className="description">
          Spring Boot와 React를 활용한 풀스택 개발 경험을 보유하고 있습니다. 팀
          프로젝트를 통해 실무 중심의 협업 능력을 키웠습니다.
        </p>
        <ul className="majors">
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faHtml5} />
            <p className="major_title">Front-end</p>
            <p>React, HTML, CSS, JavaScript</p>
          </li>
          <li className="major">
            <FontAwesomeIcon className="major_icon" icon={faServer} />
            <p className="major_title">Back-end</p>
            <p>Spring Boot, Node.js, Oracle, MyBatis</p>
          </li>
        </ul>
        <ul className="jobs">
          <li className="job">
            <img src={`${import.meta.env.BASE_URL}profile_images/khlogo.jpg`} />
            <div>
              <p className="job_name">이 용 재 (KH 교육원)</p>
              <p className="job_period">2025.05.19 ~ 2025.11.04</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="max-container">
          <h2 className="title">My Skills</h2>
          <p className="description">Skills & Attributes</p>
          <div className="skills">
            <section className="skills_coding">
              <h3 className="skills_title">Coding Skills</h3>
              <ul>
                {codingSkills.map((skill, index) => (
                  <li key={index}>
                    <div>
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div>
                      <div style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="skills_tools">
              <h3 className="skills_title">Tools</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Eclipse</li>
                <li>SQL Developer</li>
              </ul>
            </section>
            <section className="skills_etc">
              <h3 className="skills_title">Etc</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Vite</li>
                <li>Maven</li>
                <li>Axios</li>
                <li>Recoil</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <div className="max-container">
          <h2 className="title">My Work</h2>
          <p className="description">Projects</p>
          <ul className="categories">
            {projectCategories.map((category) => (
              <li key={category.name}>
                <button
                  className={`category ${
                    selectedCategory === category.name
                      ? "category--selected"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  {category.name}{" "}
                  <span className="category_count">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="projects">
            {filteredProjects.map((project, index) => (
              <li
                key={project.id || `placeholder-${index}`}
                className="project"
              >
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project_img"
                  />
                  <div className="project_metadata">
                    <h3 className="project_title">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
