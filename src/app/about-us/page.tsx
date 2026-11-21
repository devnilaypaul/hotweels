import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hot Wheels and what drives us.",
};

const page = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="text-muted-foreground mt-4">
        About page content goes here.
      </p>
    </section>
  );
};

export default page;
