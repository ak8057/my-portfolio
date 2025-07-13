import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
      <p className="text-[25px] uppercase sm:text-[30px] md:text-[35px] lg:text-[40px]">
        Lost in code? Don&apos;t worry, even the best explorers take a wrong
        turn.
      </p>
      <Image
        src="/notFound.png"
        alt="Funny Meme"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
      />
      <div>
        <Link
          href="/"
          className="text-[25px] uppercase sm:text-[30px] md:text-[35px] lg:text-[40px]"
        >
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
