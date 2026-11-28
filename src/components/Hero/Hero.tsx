import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "700+", label: "Models" },
  { value: "1968", label: "Established" },
  { value: "1:64", label: "Scale" },
];

const specs = [
  { label: "Redline", position: "top-[6%] left-[2%]" },
  { label: "Treasure Hunt", position: "top-[36%] -right-2" },
  { label: "1:64 Scale", position: "bottom-[8%] left-[4%]" },
];

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate -mt-16 flex min-h-[calc(100dvh-0.75rem)] items-center overflow-hidden pt-24 pb-12 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] opacity-50"
          style={{ backgroundSize: "64px 64px" }}
        />

        <div className="absolute top-[-20rem] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.705_0.213_47.6/0.35),transparent_70%)] blur-3xl lg:top-[-14rem] lg:left-[28%]" />

        <div className="absolute top-1/2 right-[-30%] h-[160%] w-[70rem] -translate-y-1/2 -rotate-12 bg-[repeating-linear-gradient(90deg,oklch(0.705_0.213_47.6/0.2)_0px,oklch(0.705_0.213_47.6/0.2)_2px,transparent_2px,transparent_32px)] [mask-image:linear-gradient(to_left,black,transparent_65%)]" />

        <div className="from-background absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
      </div>

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both border-border bg-background/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium tracking-[0.22em] uppercase backdrop-blur duration-500 motion-reduce:animate-none">
            <span className="size-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_2px_oklch(0.705_0.213_47.6/0.6)]" />
            1:64 scale &middot; est. 1968
          </p>

          <h1
            id="hero-heading"
            className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both font-display mt-6 text-6xl leading-[0.85] uppercase delay-100 duration-700 motion-reduce:animate-none sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
            Pocket-sized
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text pb-2 text-transparent">
              Adrenaline
            </span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-muted-foreground mt-6 max-w-xl text-base delay-200 duration-700 motion-reduce:animate-none sm:text-lg">
            From the 1968 Redline that started it all to today&apos;s treasure
            hunts, explore the cars, the history, and the obsession behind the
            orange track.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-8 flex flex-col gap-3 delay-300 duration-700 motion-reduce:animate-none sm:flex-row">
            <Link
              href="/models"
              className="group focus-visible:ring-offset-background inline-flex h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 text-sm font-semibold tracking-[0.12em] text-white uppercase shadow-[0_18px_40px_-18px_oklch(0.705_0.213_47.6)] transition-colors hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:outline-none">
              Explore models
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/history"
              className="border-border bg-background/50 hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-12 items-center justify-center rounded-md border px-6 text-sm font-semibold tracking-[0.12em] uppercase backdrop-blur transition-colors focus-visible:ring-2 focus-visible:outline-none">
              Our story
            </Link>
          </div>

          <dl className="animate-in fade-in fill-mode-both border-border mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-6 delay-500 duration-700 motion-reduce:animate-none">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-muted-foreground text-[0.65rem] tracking-[0.2em] uppercase">
                  {stat.label}
                </dt>
                <dd className="font-display mt-1 text-3xl leading-none">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          aria-hidden
          className="animate-in fade-in zoom-in-95 fill-mode-both relative mx-auto hidden w-full max-w-md delay-300 duration-1000 motion-reduce:animate-none lg:block">
          <div className="relative aspect-square w-full">
            <div className="border-border/70 absolute inset-0 rounded-full border" />
            <div className="border-border/60 absolute inset-[10%] animate-spin rounded-full border border-dashed [animation-duration:60s]" />
            <div className="border-border/50 absolute inset-[24%] rounded-full border" />
            <div className="absolute inset-[24%] rounded-full bg-[conic-gradient(from_140deg,oklch(0.705_0.213_47.6/0.7),oklch(0.637_0.237_25.3/0.15)_45%,transparent_65%)] blur-2xl" />

            <div className="border-border bg-background/70 absolute inset-[36%] grid place-items-center rounded-full border text-center shadow-[0_0_80px_-20px_oklch(0.705_0.213_47.6/0.7)] backdrop-blur">
              <div>
                <span className="font-display block text-7xl leading-none">
                  68
                </span>
                <span className="text-muted-foreground mt-1 block text-[0.55rem] tracking-[0.4em] uppercase">
                  The origin
                </span>
              </div>
            </div>

            {specs.map((spec) => (
              <span
                key={spec.label}
                className={cn(
                  "border-border bg-background/80 text-foreground/80 absolute rounded-full border px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.2em] uppercase shadow-lg backdrop-blur",
                  spec.position,
                )}>
                {spec.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
