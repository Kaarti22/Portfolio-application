import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MenubarItems = [
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "About",
    link: "/about",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Work Experiences",
    link: "/experiences",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Projects",
    link: "/projects",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Skills",
    link: "/skills",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Coding Profiles",
    link: "/coding-profiles",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Achievements",
    link: "/achievements",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Volunteer experiences",
    link: "/volunteer-experiences",
  },
  {
    icon: <User className="mr-2 h-4 w-4" />,
    name: "Interview Experiences",
    link: "/interview-experiences",
  },
];

const NavbarItems = MenubarItems.slice(0, -3);

const Header = () => {
  return (
    <div className="w-full h-14 bg-white rounded-full p-4 flex items-center justify-between">
      <a href="/" className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
        <div className="text-primary text-xl font-bold">Portfolio</div>
      </a>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {MenubarItems.map((item, index) => (
                <a key={index} href={`${item.link}`}>
                  <DropdownMenuItem className="cursor-pointer">
                    {item.icon}
                    <span>{item.name}</span>
                  </DropdownMenuItem>
                </a>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <Button className="w-full">Connect with me</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex items-center gap-4 xl:gap-6">
        {NavbarItems.map((item, index) => (
          <a
            key={index}
            href={`${item.link}`}
            className="text-gray-600 hover:text-gray-800 font-normal hover:font-medium"
          >
            {item.name}
          </a>
        ))}
        <Button className="rounded-full">Connect with me</Button>
      </div>
    </div>
  );
};

export default Header;
