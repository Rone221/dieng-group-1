import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { Shell } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Contact — The Dieng Group",
  description: "Tell us where you operate, through a few qualifying questions. We'll meet you there.",
};

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Shell>
        <Contact />
      </Shell>
    </section>
  );
}
