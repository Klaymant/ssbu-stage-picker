"use client"

import { StageList } from "@/app/StageList";
import { PhaseSelector } from "@/app/PhaseSelector";
import { SetPhase } from "@/types/SetPhase";
import { useState } from "react";

export default function Home() {
  const [selectedPhase, setSelectedPhase] = useState<SetPhase>('firstPick');

  return (
    <main className="flex justify-around flex-wrap gap-x-4 p-4 sm:p-8">
      <section>
        <PhaseSelector selection={selectedPhase} setSelection={setSelectedPhase} />
        <StageList />
      </section>
    </main>
  );
}
