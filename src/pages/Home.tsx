import HeroBanner from "@/components/HeroBanner";
import ProjectCrousel from "@/components/ProjectCrousel";

const Home = () => {
  return (
    <div className="my-10 flex flex-col gap-10">
      <HeroBanner />
      <div className="flex flex-col gap-5 bg-white h-auto p-8 rounded-2xl">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-semibold">Selected works</div>
          <div className="text-gray-500">Glimpses into some of my projects</div>
        </div>
        <ProjectCrousel/>
      </div>
    </div>
  );
};

export default Home;
