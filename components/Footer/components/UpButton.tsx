"use client";

import { ChevronUp } from "lucide-react";
import { FunctionComponent } from "react";

const isBrowser = () => typeof window !== "undefined";

interface ScrollOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const UpButton: FunctionComponent = () => {
  return (
    <button
      className="p-2 md:p-4 flex justify-center text-secondary-500 hover:text-primary-400"
      onClick={scrollToTop}
    >
      <ChevronUp />
    </button>
  );
};
