import type { Metadata } from "next";
import DispatchDesk from "@/components/DispatchDesk";
import Podcast from "@/components/sections/Podcast";
import { Shell } from "@/components/primitives";

export const metadata: Metadata = {
  title: "The Meridian Dispatch — The Dieng Group",
  description: "Subscribe to the newsletter and download the gated PDF brief from the corridor.",
};

export default function DispatchPage() {
  return (
    <>
      <section id="dispatch" className="py-16 md:py-24">
        <Shell>
          <DispatchDesk />
        </Shell>
      </section>
      <Podcast />
    </>
  );
}
