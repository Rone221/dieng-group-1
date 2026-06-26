import type { Metadata } from "next";
import Impact from "@/components/sections/Impact";

export const metadata: Metadata = {
  title: "Our Impact — The Dieng Group",
  description: "Impact told as field notes, not figures — relationships kept and goods that arrive.",
};

export default function ImpactPage() {
  return <Impact />;
}
