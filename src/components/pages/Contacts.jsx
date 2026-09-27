import { useEffect, useState } from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

import AuraBackground from "@/components/background/AuraBackground";

export default function Contacts() {
  const [showContent, setShowContent] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    const linksTimer = setTimeout(() => {
      setShowLinks(true);
    }, 700);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(linksTimer);
    };
  }, []);

  const links = [
    {
      name: "GitHub",
      description: "See what I've built.",
      icon: FaGithub,
      url: "https://github.com/smiinmhrn",
    },
    {
      name: "Telegram",
      description: "Just say hi.",
      icon: FaTelegramPlane,
      url: "https://t.me/smiinmhrn",
    },
    {
      name: "LinkedIn",
      description: "Let's connect.",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/saminmehran",
    },
  ];

  return (
    <AuraBackground>
      <div
        className="
          min-h-screen
          text-white
          flex
          flex-col
          items-center
          justify-center
          kalam-text

          px-6
          sm:px-8

          py-16
          sm:py-20
          lg:py-0
        "
      >
        {/* Main text */}
        <h1
          className={`
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-center
            max-w-5xl

            transition-all
            duration-700
            ease-out

            ${
              showContent
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-6 blur-sm"
            }
          `}
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          Did you have fun in my brain? I hope it left an impression on you.{" "}
          <span
            className="text-[#D06167]"
            style={{
              textShadow: "2px 2px 0px white",
            }}
          >
            I’d be happy if I could inspire you or help you with your next
            project.
          </span>
        </h1>

        {/* Contact */}
        <div
          className={`
            mt-14
            text-center

            transition-all
            duration-700
            ease-out

            ${
              showLinks
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <p
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{
              textShadow: "2px 2px 0px #D06167",
            }}
          >
            Still curious?
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    w-44
                    px-5
                    py-4

                    border
                    border-[#D06167]/40
                    rounded-xl

                    bg-[#fff5f5]/80
                    backdrop-blur-sm

                    shadow-[0_4px_20px_rgba(208,97,103,0.12)]

                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:border-[#D06167]
                    hover:bg-[#ffe9ea]
                    hover:shadow-[0_8px_25px_rgba(208,97,103,0.25)]
                  "
                >
                  <Icon
                    className="
                      mx-auto
                      text-3xl
                      mb-3
                      text-[#D06167]

                      transition-all
                      duration-300

                      group-hover:scale-110
                    "
                  />

                  <p
                    className="
                      text-lg
                      font-bold
                      text-[#444]

                      transition-colors
                      duration-300

                      group-hover:text-[#D06167]
                    "
                  >
                    {link.name}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {link.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </AuraBackground>
  );
}
