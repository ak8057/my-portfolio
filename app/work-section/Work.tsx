import ProjectGrid from "./ProjectGrid";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";


const Work = () => {
  return (
    // <section
    //   className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
    //   id="work"
    // >
    //   <h2 className="mb-10 text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
    //     Featured Work
    //   </h2>

    //   <ProjectGrid />
    // </section>
    <div
      className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      id="work"

    >
      <AnimatedWords2
        title={"FEATURED WORK"}
        style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
      />
      <ProjectGrid />
    </div>
  );
};

export default Work;
