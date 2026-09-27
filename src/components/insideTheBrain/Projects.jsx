import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollReveal from "@/components/scrollAnimation/ScrollReveal";

import project1 from "@/assets/project/ecommerce.png";
import project2 from "@/assets/project/drugfinder.png";
import project3 from "@/assets/project/rinad.png";
import project4 from "@/assets/project/crypto.png";
import project5 from "@/assets/project/location.png";
import project6 from "@/assets/project/extension.png";

const projects = [
  {
    title: "Rinad Fashion",
    description:
      "Developed a modern fashion website with a strong focus on visual design, smooth interactions, and a clean user interface.",
    image: project3,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/smiinmhrn/Rinad-Fashion",
  },
  {
    title: "E-Commerce",
    description:
      "Developed a responsive e-commerce website with reusable components, product pages, navigation, and interactive UI elements.",
    image: project1,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://e-commerce-phi-three-83.vercel.app",
    github: "https://github.com/smiinmhrn/E-commerce",
  },
  {
    title: "Drug Finder - Full Stack",
    description:
      "Developed a full-stack application for searching drug information from a structured dataset. Implemented fuzzy search to handle spelling errors and provide relevant suggestions.",
    image: project2,
    technologies: ["JavaScript", "Python", "FastAPI"],
    demo: "https://drug-finder.vercel.app",
    github: "https://github.com/smiinmhrn/drug-finder",
  },
  {
    title: "Crypto Tracker",
    description:
      "Developed a cryptocurrency tracking application using market data from a REST API. Implemented cryptocurrency search, sorting, detailed information, and price charts.",
    image: project4,
    technologies: ["React", "Axios", "CoinGecko API"],
    demo: "#",
    github: "#",
  },
  {
    title: "Historical Location Explorer",
    description:
      "Developed an interactive web application for exploring historical locations. Implemented location-based data presentation and an interactive user interface.",
    image: project5,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://historic-geo-locator.vercel.app",
    github: "https://github.com/smiinmhrn/historic-geo-locator",
  },
  {
    title: "Browser Extensions Manager",
    description:
      "Developed a responsive browser extensions management interface with filtering and interactive controls.",
    image: project6,
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://typescript-practice-two.vercel.app",
    github: "https://github.com/smiinmhrn/typescript-practice",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-36 text-white">
      <div className="mx-auto w-full max-w-325">
        {/* Heading */}
        <ScrollReveal>
          <div className="mx-auto mb-25 max-w-175 text-center">
            <span className="mb-4 inline-block font-sans text-sm font-bold tracking-[5px] text-[#D06167] max-sm:text-[11px] max-sm:tracking-[3px]">
              MY WORK
            </span>

            <h2
              className="font-['Kalam'] text-[clamp(42px,6vw,70px)] leading-[1.1] text-white"
              style={{
                textShadow:
                  "4px 4px 0px #D06167, 0 0 30px rgba(208, 97, 103, 0.2)",
              }}
            >
              Things I've{" "}
              <strong
                className="text-[#D06167]"
                style={{
                  textShadow: "3px 3px 0px black",
                }}
              >
                built.
              </strong>
            </h2>

            <p className="mt-6 font-sans text-[17px] leading-[1.8] text-white/75 max-sm:text-sm">
              A few things I've created while learning, experimenting, breaking
              things and building them again.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-x-9 gap-y-17.5 max-[900px]:mx-auto max-[900px]:max-w-162.5 max-[900px]:grid-cols-1 max-[900px]:gap-y-20 max-sm:gap-y-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={(index % 2) * 0.12}>
              <article
                className="
                  group
                  relative
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-[25px]
                  border
                  border-white/15
                  bg-[linear-gradient(145deg,rgba(35,20,23,0.97),rgba(10,8,10,0.99))]
                  p-6
                  shadow-[0_30px_70px_rgba(0,0,0,0.45),0_0_40px_rgba(208,97,103,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2.5
                  hover:border-[#D06167]/70
                  hover:shadow-[0_35px_80px_rgba(0,0,0,0.55),0_0_50px_rgba(208,97,103,0.18)]
                  max-sm:rounded-[20px]
                 max-sm:p-4.5
                "
              >
                {/* Number */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    -top-6.25
                    z-3
                    font-['Kalam']
                    text-[85px]
                    font-bold
                    text-transparent
                    opacity-50
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:opacity-80
                    max-sm:right-2.5
                    max-sm:-top-5
                    max-sm:text-[65px]
                  "
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image */}
                <div
                  className="
                    relative
                    aspect-16/10
                    w-full
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-white/12
                    bg-[#080808]
                    shadow-[0_20px_45px_rgba(0,0,0,0.5)]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      block
                      h-full
                      w-full
                      scale-[1.04]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-[#D06167]/80
                      opacity-0
                      transition-opacity
                      duration-400
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        translate-y-4
                        border-2
                        border-white
                        px-6
                        py-3
                        font-sans
                        text-[13px]
                        font-bold
                        tracking-[2px]
                        text-white
                        transition-transform
                        duration-400
                        group-hover:translate-y-0
                      "
                    >
                      VIEW PROJECT
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1 pt-6">
                  {/* Title */}
                  <h3
                    className="
                      mb-4
                      font-['Kalam']
                      text-[clamp(28px,3vw,38px)]
                      leading-[1.2]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      max-sm:text-[31px]
                    "
                    style={{
                      textShadow: "3px 3px 0px #D06167",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5.5 font-sans text-[15px] leading-[1.8] text-white/75 max-sm:text-sm max-sm:leading-[1.7]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2 max-sm:mb-5 max-sm:gap-1.75">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-[#D06167]/40
                          bg-[#D06167]/12
                          px-2.75
                          py-1.5
                          font-sans
                          text-[11px]
                          font-semibold
                          text-[#ffb0b4]
                          transition-all
                          duration-300
                          hover:-translate-y-0.75
                          hover:border-[#D06167]
                          hover:bg-[#D06167]/30
                          max-sm:px-2.25
                          max-sm:py-1.5
                          max-sm:text-[10px]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2.5 max-sm:gap-2">
                    {/* Live Demo فقط اگر demo وجود داشته باشد */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-[10px]
                          border
                          border-white/15
                          bg-white/6
                          px-4
                          py-2.25
                          font-sans
                          text-xs
                          font-semibold
                          text-white
                          no-underline
                          transition-all
                          duration-300
                          hover:-translate-y-0.75
                          hover:border-[#D06167]
                          hover:bg-[#D06167]
                          hover:shadow-[0_8px_20px_rgba(208,97,103,0.3)]
                          max-sm:px-3
                          max-sm:py-2
                          max-sm:text-[11px]
                        "
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}

                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-[10px]
                          border
                          border-white/15
                          bg-white/6
                          px-4
                          py-2.25
                          font-sans
                          text-xs
                          font-semibold
                          text-white
                          no-underline
                          transition-all
                          duration-300
                          hover:-translate-y-0.75
                          hover:border-[#D06167]
                          hover:bg-[#D06167]
                          hover:shadow-[0_8px_20px_rgba(208,97,103,0.3)]
                          max-sm:px-3
                          max-sm:py-2
                          max-sm:text-[11px]
                        "
                      >
                        <FaGithub className="text-sm" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
