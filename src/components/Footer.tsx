import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/kaarti.man/",
  },
  {
    icon: <Github />,
    link: "https://github.com/Kaarti22",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/kartikeya-mondi-1b429325a/",
  },
  {
    icon: <Twitter />,
    link: "https://x.com/KartikeyaMondi",
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-white h-auto rounded-2xl p-8 flex flex-col gap-3">
      <div className="text-2xl font-semibold">Connect</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 text-gray-600">
          <div>
            Feel free to reach out and connect. I'm always happy to talk.
          </div>
          <div>kaartimondi@gmail.com</div>
        </div>
        <div className="md:justify-end flex flex-row gap-6">
          {socialLinks.map((item, index) => (
            <a key={index} href={`${item.link}`}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
