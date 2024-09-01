import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Projects = [
  {
    img: "",
    title: "Prep AI - An AI Mock Interviewer",
    description: "Prepare for your upcoming interviews with Prep AI by generating interview questions through Gemini AI, also generating a rating and feedback from your interview.",
    skills: [
      "Gemini AI",
      "Next.JS",
      "Drizzle ORM",
      "Postgre SQL",
      "Clerk",
      "Tailwind CSS",
      "ShadCn UI",
    ],
  },
  {
    img: "",
    title: "",
    description: "",
    skills: [
      "",
      "",
    ],
  },
  {
    img: "",
    title: "",
    description: "",
    skills: [
      "",
      "",
    ],
  },
  {
    img: "",
    title: "",
    description: "",
    skills: [
      "",
      "",
    ],
  },
];

const ProjectCrousel = () => {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {Projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="h-96 flex items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{item.title}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectCrousel;
