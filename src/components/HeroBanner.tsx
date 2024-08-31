import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white rounded-2xl h-auto p-8 flex flex-col gap-8">
        <div className="text-6xl font-bold">
          I am Kartikeya Mondi, a competitive programmer and a web developer.
        </div>
        <div className="text-lg text-gray-600">
          Crafting digital experiences since 2022. Specializing in
          conceptualizing and producing innovative and modern solutions to
          software problems.
        </div>
        <a href="./about">
          <Button className="flex items-center gap-2">
            <div>Know myself</div>
            <MoveRight />
          </Button>
        </a>
      </div>
      <div className="bg-white rounded-2xl h-auto hidden md:block">
        <img
          src="./hero_banner.jpg"
          alt="Hero image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
