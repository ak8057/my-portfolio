import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CREATE VISUAL MAGIC, BUILD DIGITAL EXPERIENCES, AND CRAFT STORIES THAT INSPIRE."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Hi, I’m Abhay Kumar, a Computer Science undergraduate with a passion for full-stack web development. My journey revolves around creating impactful software, contributing to open-source projects, and exploring innovative solutions to real-world challenges.I'm passionate about building software that makes a difference."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my work as a developer, I’ve also participated in and won accolades at hackathons. I’m always eager to connect with fellow developers, share my knowledge, and collaborate on exciting projects."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you can find me binge-watching anime, sketching and creating portraits, playing chess and exploring new skills.These hobbies fuel my creativity and keep me inspired to innovate in my work."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects in my free time. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frameworks & Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React.js, Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, MySQL, GitHub, Figma, Google Cloud, Vite, HTML5."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Languages"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript, Python, Java, C, C++."
                }
              />
            </div>
            {/* <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Blender"
                }
              />
            </div> */}
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few projects I've worked on :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
