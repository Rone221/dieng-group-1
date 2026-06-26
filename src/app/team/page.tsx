import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "The Team — The Dieng Group",
  description: "The contributors behind the dispatch — advisory, programs, strategy, and the field.",
};

export default function TeamPage() {
  return <Team />;
}
