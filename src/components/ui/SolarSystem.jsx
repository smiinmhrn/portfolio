import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import ScrollReveal from "@/components/scrollAnimation/ScrollReveal";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    orbit: 1,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
    orbit: 1,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    orbit: 2,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    orbit: 2,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    orbit: 2,
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    orbit: 3,
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
    orbit: 3,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    orbit: 3,
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
    orbit: 3,
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    orbit: 4,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff",
    orbit: 4,
  },
  {
    name: "REST API",
    icon: SiPostman,
    color: "#FF6C37",
    orbit: 4,
  },
];

const orbitSizes = {
  1: 150,
  2: 220,
  3: 290,
  4: 360,
};

function Skill({ skill, index, total }) {
  const Icon = skill.icon;

  const angle = (360 / total) * index;

  return (
    <div
      className="skill"
      style={{
        "--angle": `${angle}deg`,
        "--radius": `${orbitSizes[skill.orbit]}px`,
        "--skill-color": skill.color,
      }}
    >
      <div className="skill-counter-rotate">
        <div className="skill-tooltip">{skill.name}</div>

        <div className="skill-icon">
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
}

export default function SolarSystem() {
  const groupedSkills = [1, 2, 3, 4].map((orbit) =>
    skills.filter((skill) => skill.orbit === orbit),
  );

  return (
    <section className="solar-section">
      <ScrollReveal delay={0.25}>
        <div className="solar-content">
          <div className="solar-system">
            {/* Orbit rings */}

            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
            <div className="orbit orbit-4" />

            {/* Center */}

            <div className="solar-center">
              <div className="center-glow" />

              <div className="center-content">
                <span>&lt;/&gt;</span>
              </div>
            </div>

            {/* Skills */}

            {groupedSkills.map((orbitSkills) =>
              orbitSkills.map((skill, index) => (
                <Skill
                  key={skill.name}
                  skill={skill}
                  index={index}
                  total={orbitSkills.length}
                />
              )),
            )}
          </div>
        </div>

        <style>{`
        .solar-section {
          width: 100%;
          padding: 100px 20px;
          overflow: hidden;
          color: white;
        }

        .solar-content {
          max-width: 1250px;
          margin: 0 auto;
        }

        .solar-heading {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .solar-heading span {
          font-size: 13px;
          letter-spacing: 4px;
          color: #888;
        }

        .solar-heading h2 {
          margin: 15px 0;
          font-size: clamp(35px, 5vw, 60px);
          line-height: 1;
          font-weight: 400;
        }

        .solar-heading h2 strong {
          font-weight: 700;
        }

        .solar-heading p {
          color: #777;
          line-height: 1.8;
          font-size: 15px;
        }

        .solar-system {
          position: relative;
          width: 760px;
          height: 760px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid white;
        border-radius: 50%;
        pointer-events: none;
        }

        .orbit-1 {
          width: 300px;
          height: 300px;
        }

        .orbit-2 {
          width: 440px;
          height: 440px;
        }

        .orbit-3 {
          width: 580px;
          height: 580px;
        }

        .orbit-4 {
          width: 720px;
          height: 720px;
        }

        .solar-center {
          position: absolute;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(
            circle,
            #ffffff 0%,
            #dddddd 20%,
            #555 55%,
            #111 75%
          );

          box-shadow:
            0 0 35px rgba(255,255,255,.15),
            0 0 100px rgba(255,255,255,.08);

          z-index: 5;
        }

        .center-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255,255,255,.04);
          filter: blur(20px);
        }

        .center-content {
          position: relative;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #080808;
          border: 1px solid rgba(255,255,255,.2);
          font-size: 30px;
          color: white;
        }

        .skill {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;

          transform:
            rotate(var(--angle))
            translateX(var(--radius));

          animation: orbitRotate 20s linear infinite;
        }

        .skill-counter-rotate {
          position: relative;
          width: 58px;
          height: 58px;

          transform: translate(-50%, -50%);

          animation: counterRotate 20s linear infinite;
        }

        .skill-icon {
          width: 58px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: var(--skill-color);

          background: rgba(15,15,15,.95);

          border: 1px solid rgba(255,255,255,.12);

          box-shadow:
            0 0 20px color-mix(
              in srgb,
              var(--skill-color) 20%,
              transparent
            );

          cursor: pointer;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .skill-icon:hover {
          transform: scale(1.25);

          border-color: var(--skill-color);

          box-shadow:
            0 0 25px var(--skill-color),
            0 0 60px color-mix(
              in srgb,
              var(--skill-color) 30%,
              transparent
            );
        }

        .skill-tooltip {
          position: absolute;
          bottom: 70px;
          left: 50%;

          transform: translateX(-50%);

          padding: 7px 12px;

          border-radius: 7px;

          background: #151515;

          border: 1px solid rgba(255,255,255,.1);

          font-size: 12px;
          white-space: nowrap;

          opacity: 0;
          pointer-events: none;

          transition: .25s ease;
        }

        .skill-counter-rotate:hover .skill-tooltip {
          opacity: 1;
          bottom: 68px;
        }

        @keyframes orbitRotate {
          from {
            transform:
              rotate(var(--angle))
              translateX(var(--radius))
              rotate(0deg);
          }

          to {
            transform:
              rotate(calc(var(--angle) + 360deg))
              translateX(var(--radius))
              rotate(360deg);
          }
        }

        @keyframes counterRotate {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(-360deg);
          }
        }

        @media (max-width: 800px) {
          .solar-system {
            transform: scale(.75);
            margin: -80px auto;
          }
        }

        @media (max-width: 550px) {
          .solar-system {
            transform: scale(.48);
            margin: -180px auto;
          }

          .solar-section {
            padding: 70px 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill,
          .skill-counter-rotate {
            animation: none;
          }
        }
      `}</style>
      </ScrollReveal>
    </section>
  );
}
