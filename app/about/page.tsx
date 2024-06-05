import Image from "next/image";
import { Card } from "@/app/components/card";
import Link from "next/link";
import React from "react";
import Particles from "@/app/components/particles";
import { Navigation } from "../components/nav";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/About" },
];
const imageStyle = {
  borderRadius: "50%",
};

const about = () => {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 min-h-screen via-zinc-900 to-zinc-900/0 ">
      <Particles className="absolute inset-0 -z-10 " quantity={500} />
      <Navigation />

      <div className="container flex justify-center px-4 mx-auto pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-zinc-200">
          <div>
            <Image
              src="/me.jpeg"
              width={200}
              height={200}
              style={imageStyle}
              alt="Picture of the developer"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex-1">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              I love building projects that solve my real-life issues. As a
              strong believer in collaborating with the broader community when I
              feel out of my depth, I find this approach not only broadens my
              horizons but also strengthens my projects. With two degrees in
              Education and Training, I bring a wealth of knowledge to my work,
              which is proving invaluable given the current demand on developers
              to be lifelong learners.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              As part of my learning process, I am an advocate for the
              reflective process. I believe that sharing what I learn through my
              blog not only reinforces my own understanding but also benefits
              others in the community. This ongoing reflection and sharing help
              me grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
