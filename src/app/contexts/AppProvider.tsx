import { SetPhase } from "@/types/SetPhase";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextValues | null>(null);

export function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within AppProvider');
	}

return context;
}

export function AppProvider({ children }: { children: ReactNode }) {
	const [setPhase, setSetPhase] = useState<SetPhase>('firstPick');

	return (
		<AppContext.Provider value={{ setPhase, setSetPhase }}>
			{children}
		</AppContext.Provider>
	);
}

type AppContextValues = {
	setPhase: SetPhase;
	setSetPhase: Dispatch<SetStateAction<SetPhase>>;
};