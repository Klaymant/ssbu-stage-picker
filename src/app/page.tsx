"use client"

import { StageSelection } from "@/app/components/StageSelection";
import { PhaseSelector } from "@/app/components/PhaseSelector";
import { AppProvider } from "./contexts/AppProvider";
import { StagesProvider } from "./contexts/StagesProvider";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <AppProvider>
      <StagesProvider>
        <div className="content-wrap">
          <main className="p-2 sm:p-8 text-center">
            <section>
              <PhaseSelector />
              <StageSelection />
            </section>
          </main>
        </div>
        <Footer />
      </StagesProvider>
    </AppProvider>
  );
}
