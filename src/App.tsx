import { useState } from "react";
import { Header } from "./Header";
import { experience, projects } from "./constants";
import "animate.css/animate.min.css";

const App = () => {
  const [jobCycleIndex, setJobCycleIndex] = useState(0);
  const [currentSelectedJob, setCurrentSelectedJob] = useState<{
    title: string;
    job: string;
    date: string;
    points: string[];
  }>(experience[0]);

  return (
    <div className="App">
      <Header />
      <div className="email-right animate__animated animate__bounce">
        <a
          href="mailto:nthnlrichards@gmail.com"
          target="__blank"
          rel="noreferrer"
        >
          nthnlrichards@gmail.com
        </a>
      </div>
      <ul className="socials-left animate__animated animate__bounce">
        <li>
          <a
            href="https://github.com/natethedev1"
            target="__blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="" target="__blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <title>Twitter</title>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="" target="__blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </li>
      </ul>
      <div className="hero animate__animated animate__fadeInUp">
        <p className="tagline">Hi, my name is</p>
        <h1>Nathaniel.</h1>
        <h2>I engineer awesome things.</h2>
        <p>
          I am a software engineer and tech enthusiast who has worked in
          multiple areas of the tech industry including business to business
          software, customer service tools, real estate, food and drink, and
          game development. I am currently based in Michigan, USA. I have been
          able to work with both freelance clients as well as contract, and
          full-time positions. I am passionate about building, learning, and
          teaching, and I am always looking for new opportunities to do so.
          Being creative and engineering solutions to problems is what I love to
          do.
        </p>
      </div>
      <div className="about" id="about">
        <div className="left">
          <h2>
            <span>01.</span> About Me <hr />
          </h2>
          <p>
            I love working on new ideas and utilizing my variety of skills not
            only with programming, but with 3D and 2D art, and audio design. In
            my free-time, I typically work on side projects, tools for my daily
            engineering work, or play games with friends. Some of my favorite
            projects I've worked on is Orion Engine, a web-based game engine, A
            medieval tavern game I worked on named DUNKEEP, and a fully featured
            video and voice calling clone of discord named Symplee.
          </p>
          <p>
            Over the years I have spent a lot of time learning and continue to
            learn new tools and ideas every day. Sometimes I enjoy going deeper,
            some of the things I have looked into this year are: compilers, open
            source development, Rust, and more. I am always looking for new
            things to learn and new people to learn from.
          </p>
          <p>Here are a few technologies I've worked with recently:</p>
          <ul>
            <li>▹ ReactJS</li>
            <li>▹ Typescript</li>
            <li>▹ Rust</li>
            <li>▹ Node.JS</li>
            <li>▹ C#</li>
            <li>▹ SQL</li>
          </ul>
        </div>
        <img src="/me.jpg" alt="Nathaniel Richards" />
      </div>
      <div className="experience" id="experience">
        <h2>
          <span>02.</span> Experience <hr />
        </h2>
        <div className="job-cycle">
          <div className="left">
            {experience.map((job, key) => (
              <p
                onClick={() => setCurrentSelectedJob(job)}
                key={key}
                style={{
                  borderLeft:
                    job.title === currentSelectedJob.title
                      ? "2px solid #a2a6a8"
                      : "2px solid #233554",
                }}
              >
                {job.title}
              </p>
            ))}
          </div>
          <div className="right">
            <h3>
              {currentSelectedJob.job} <span>@ {currentSelectedJob.title}</span>
            </h3>
            <p className="date">{currentSelectedJob.date}</p>
            <ul>
              {currentSelectedJob.points.map((point, key) => (
                <li key={key}>▹ {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="work" id="work">
        <h2>
          <span>03.</span> My Work <hr />
        </h2>
        <div className="projects">
          {projects.map((project, key) => (
            <div key={key} className="project-card">
              <div className="content">
                <p className="tagline">Featured Project</p>
                <h3>{project.title}</h3>
                <p className="desc">{project.description}</p>
                <div className="tech">
                  {project.tech.map((tech, key) => (
                    <p key={key}>{tech}</p>
                  ))}
                </div>
                <div className="links">
                  {project.github.includes("http") ? (
                    <a href={project.github} target="__blank" rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  ) : (
                    <p>{project.github}</p>
                  )}
                  {project.url.includes("http") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  ) : (
                    <p>{project.url}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact" id="contact">
        <p className="tagline">04. What's Next?</p>
        <h2>Get In Touch</h2>
        <p className="sub">
          I am a software engineer and game developer who is passionate about
          designing, developing, and shipping production quality technology and
          games. If you want to contact me I am available 7 days a week 24 hours
          a day.
        </p>
        <a href="mailto:nthnlrichards@gmail.com">Say Hello</a>
      </div>
    </div>
  );
};

export default App;
