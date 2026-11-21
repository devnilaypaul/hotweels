import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "Discover the history of Hot Wheels.",
};

const page = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">History</h1>
      <p className="text-muted-foreground mt-4">
        History page content goes here.
      </p>
    </section>
  );
};

export default page;
