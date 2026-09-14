import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type SelectedIntervention = {
  id: string;
  title: string;
  detail: string;
  unit: string;
  cooling: string;
};

type InterventionContextValue = {
  selectedInterventions: SelectedIntervention[];
  toggleIntervention: (intervention: SelectedIntervention) => void;
};

const InterventionContext = createContext<InterventionContextValue | null>(null);

export function InterventionProvider({ children }: { children: ReactNode }) {
  const [selectedInterventions, setSelectedInterventions] = useState<SelectedIntervention[]>([]);
  const toggleIntervention = (intervention: SelectedIntervention) => {
    setSelectedInterventions((current) => current.some((item) => item.id === intervention.id)
      ? current.filter((item) => item.id !== intervention.id)
      : [...current, intervention]);
  };
  const value = useMemo(() => ({ selectedInterventions, toggleIntervention }), [selectedInterventions]);
  return <InterventionContext.Provider value={value}>{children}</InterventionContext.Provider>;
}

export function useInterventions() {
  const context = useContext(InterventionContext);
  if (!context) throw new Error("useInterventions must be used within InterventionProvider");
  return context;
}
