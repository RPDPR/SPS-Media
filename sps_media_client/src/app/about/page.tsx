import type { Metadata } from "next";
import Link from "next/link";
import { AcceptButton } from "shared/ui/button/index";

export const metadata: Metadata = {
  title: "About SPS Media",
};

export default function About() {
  return (
    <div className="font-sans grid grid-rows-2 grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-white text-center">
      <div>
        <h1 className="pb-5">Here will be about us page</h1>
        <Link href="/about/#">
          <AcceptButton>{"NIKITA ABOUT PAGE"}</AcceptButton>
        </Link>
      </div>
    </div>
  );
}
