import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ahmadpiracha3@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AhmadPiracha",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmad-waseem-piracha/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/ahmadpiracha",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/14127406/ahmad-piracha",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentHeaderRef = headerRef.current;

      if (!currentHeaderRef) return;

      if (lastScrollY > currentScrollY) {
        currentHeaderRef.style.transform = "translateY(0)";
      } else {
        currentHeaderRef.style.transform = "translateY(-200px)";
      }
      lastScrollY = currentScrollY;
    };
    // Set up listeners for the scroll event

    window.addEventListener("scroll", handleScroll);
    // Remove listeners

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}

            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  icon={social.icon}
                  size="lg"
                  href={social.url}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={social.icon} size="1x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contact")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
