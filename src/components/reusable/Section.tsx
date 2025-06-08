import React from 'react'
import clsx from "clsx";


type Props = {
    title: string;
    description: string;
    variant?: "dark" | "light";
    id?: string;
    bg?:boolean;
    children?: React.ReactNode;
  };

const Section = ({ title, description, variant = "dark", id, bg = true, children }: Props) => {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={clsx(
        "py-16 pb-16 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans clip-path-custom",
         bg && (isDark ? "bg-stone-900 text-white" : "bg-white text-black")
      )}
    >
      <div className="text-center mb-8">
        <h2 className={clsx("text-3xl sm:text-4xl font-bold", isDark ? "text-white" : "text-stone-900")}>
          {title}
        </h2>
        <div className={clsx("w-40 h-1 mx-auto mt-2", isDark ? "bg-orange-700" : "bg-orange-400")}></div>
        <p className={clsx("mt-4 text-lg font-semibold", isDark ? "text-neutral-400" : "text-neutral-700")}>
          {description}
        </p>
      </div>
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

export default Section