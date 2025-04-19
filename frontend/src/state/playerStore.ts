import { create } from "zustand";

type PlayerState = {
  name: string;
  level: number;
  xp: number;
  currentZone: number;
  knownSpells: string[];

  setName: (name: string) => void;
  gainXP: (amount: number) => void;
  levelUp: () => void;
  setZone: (zoneId: number) => void;
  learnSpell: (spell: string) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  name: "Apprentice",
  level: 0,
  xp: 0,
  currentZone: 1,
  knownSpells: [],

  setName: (name) => set({ name }),
  gainXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  levelUp: () => set((state) => ({ level: state.level + 1 })),
  setZone: (zoneId) => set({ currentZone: zoneId }),
  learnSpell: (spell) =>
    set((state) =>
      state.knownSpells.includes(spell)
        ? state
        : { knownSpells: [...state.knownSpells, spell] }
    ),
}));
