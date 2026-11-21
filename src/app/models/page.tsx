import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Models",
  description: "Browse the Hot Wheels model lineup.",
};

const page = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">Models</h1>
      <p className="text-muted-foreground mt-4">
        Models page content goes here.
      </p>
    </section>
  );
};

export default page;
