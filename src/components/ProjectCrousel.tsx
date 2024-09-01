"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Projects = [
  {
    img: "./AI_mock_interviewer.png",
    title: "Prep AI - An AI Mock Interviewer",
    description:
      "Prepare for your upcoming interviews with Prep AI by generating interview questions through Gemini AI, also generating a rating and feedback from your interview.",
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
    img: "./FoodByte.png",
    title: "FoodByte - An Online Food Ordering Website",
    description:
      "A 3-level hierarchical platform where users can order food online, restaurant owners can manage customer orders, and admins can manage all the restaurant owners.",
    skills: ["Next.JS", "MongoDB", "Tailwind CSS", "Stripe", "Google OAuth"],
  },
  {
    img: "./portfolio.png",
    title: "ViewPoint - An admin manageable Portfolio application",
    description:
      "A complete portfolio application with admin panel with a robust backend and two different frontends.",
    skills: [
      "React.JS",
      "Node.JS",
      "Express.JS",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "ShadCn UI",
    ],
  },
  {
    img: "./quality_inpection.png",
    title: "Quality Inspection of Sour Lemons using Deep Learning",
    description:
      "A deep learning model of EfficientNet B0 to inspect the quality of sour lemons using image processing technique.",
    skills: ["Tensorflow", "Scikit-learn", "Keras"],
  },
];

const ProjectCrousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => prevIndex === Projects.length - 1 ? 0 : prevIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" tabIndex={currIndex}>
        <CarouselContent>
          {Projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="h-auto md:h-96 grid grid-cols-1 md:grid-cols-5 gap-6 rounded-2xl">
                <div className="md:col-span-3">
                  <img
                    src={`${item.img}`}
                    alt="AI Mock Interviewer image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div className="text-2xl font-semibold">{item.title}</div>
                  <div className="text-lg text-gray-500">{item.description}</div>
                  <Button>Know more</Button>
                  <div>
                    {item.skills.map((skill, index) => (
                      <Button key={index} variant={"outline"} className="h-8 rounded-full text-gray-500">
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
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
