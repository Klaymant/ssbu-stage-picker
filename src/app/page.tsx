"use client"

import { StageSelection } from "@/app/StageSelection";
import { PhaseSelector } from "@/app/PhaseSelector";
import { AppProvider } from "./contexts/AppProvider";

export default function Home() {
  return (
    <AppProvider>
      <main className="flex justify-around flex-wrap gap-x-4 p-4 sm:p-8">
        <section>
          <PhaseSelector />
          <StageSelection />
        </section>
      </main>
    </AppProvider>
  );
}
