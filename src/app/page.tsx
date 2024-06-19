"use client"

import { StageSelection } from "@/app/components/StageSelection";
import { PhaseSelector } from "@/app/components/PhaseSelector";
import { AppProvider } from "./contexts/AppProvider";
import { StagesProvider } from "./contexts/StagesProvider";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <AppProvider>
      <StagesProvider>
        <div className="page-container">
          <div className="content-wrap">
            <Header />
            <main className="p-2 sm:p-4 text-center">
              <section>
                <PhaseSelector />
                <StageSelection />
              </section>
            </main>
          </div>
          <Footer />
        </div>
      </StagesProvider>
    </AppProvider>
  );
}
