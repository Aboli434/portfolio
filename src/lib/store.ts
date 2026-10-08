import { create } from 'zustand';

type AppStatePhase = 'hero' | 'universe' | 'project';
type AiStatus = 'idle' | 'speaking' | 'transitioning';

interface AppState {
  phase: AppStatePhase;
  activeProjectId: string | null;
  hoveredProjectId: string | null;
  
  aiStatus: AiStatus;
  aiSubtitle: string | null;
  
  setPhase: (phase: AppStatePhase) => void;
  setActiveProject: (id: string | null) => void;
  setHoveredProject: (id: string | null) => void;
  
  setAiStatus: (status: AiStatus) => void;
  setAiSubtitle: (subtitle: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  phase: 'hero',
  activeProjectId: null,
  hoveredProjectId: null,
  
  aiStatus: 'idle',
  aiSubtitle: null,
  
  setPhase: (phase) => set({ phase }),
  
  setActiveProject: (id) => set({ 
    activeProjectId: id, 
    phase: id ? 'project' : 'universe' 
  }),
  
  setHoveredProject: (id) => set({ hoveredProjectId: id }),
  
  setAiStatus: (status) => set({ aiStatus: status }),
  setAiSubtitle: (subtitle) => set({ aiSubtitle: subtitle }),
}));
