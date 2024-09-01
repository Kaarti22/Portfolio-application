import HeroBanner from "@/components/HeroBanner";
import ProjectCrousel from "@/components/ProjectCrousel";

const Home = () => {
  return (
    <div className="my-10 flex flex-col gap-10">
      <HeroBanner />
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 inline-block text-transparent bg-clip-text">Selected works</div>
        <div className="text-gray-500 text-primary">Glimpses into some of my projects</div>
      </div>
      <div className="flex flex-col gap-5 bg-white h-auto p-8 rounded-2xl">
        <ProjectCrousel />
      </div>
    </div>
  );
};

export default Home;
