import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Hot Wheels team.",
};

const page = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-muted-foreground mt-4">
        Contact page content goes here.
      </p>
    </section>
  );
};

export default page;
