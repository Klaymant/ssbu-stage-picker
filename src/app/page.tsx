"use client"

import { StageSelection } from "@/app/StageSelection";
import { PhaseSelector } from "@/app/PhaseSelector";
import { AppProvider } from "./contexts/AppProvider";
import { StagesProvider } from "./contexts/StagesProvider";

export default function Home() {
  return (
    <AppProvider>
      <StagesProvider>
        <main className="p-4 sm:p-8">
          <section>
            <PhaseSelector />
            <StageSelection />
          </section>
        </main>
      </StagesProvider>
    </AppProvider>
  );
}
