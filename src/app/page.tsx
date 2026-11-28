import Hero from "@/components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hot Wheels",
  },
  description: "Explore Hot Wheels models, history, and more.",
};

const page = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
