'use client';
import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <Image
        src="/images/profile-pic.jpg"
        width={100}
        height={110}
        alt="that's me!"
        className="profile-img"
      />
      <div className="hero-txt">
        <h1>
          Hi, I'm <span> Jamila Mahamed </span>
        </h1>
        <p>
          I am a junior front-end developer. I love making <br /> responsive and
          accessible website.
        </p>
      </div>
      <div className="tech-header">My tech stack</div>
      <div className="tech-stack">
        <div className="tech html">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
          HTML
        </div>
        <div className="tech css">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/css3.png"
            alt="css3"
          />
          CSS
        </div>
        <div className="tech js">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
          Javascript
        </div>
        <div className="tech react">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/officel/48/react.png"
            alt="react"
          />
          ReactJS
        </div>
        <div className="tech nextjs">
<img width="24" height="24" src="https://img.icons8.com/color/24/nextjs.png" alt="nextjs"/>          NextJs
        </div>
      </div>

      <Link className="project-link" href="#projects-section" onClick={handleScroll}>
      <div className="swipe-projects">
        My Projects 
        <img className="arrow-down" src="./images/arrow.png" alt="arrow" height={30} width={36}/>
      </div>
      </Link>

    </div>
  );
};

export default Hero;
