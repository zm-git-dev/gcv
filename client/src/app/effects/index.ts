import { AlignmentEffects } from "./alignment.effects";
import { MacroTracksEffects } from "./macro-tracks.effects";
import { MicroTracksEffects } from "./micro-tracks.effects";
import { RouterEffects } from "./router.effects";

export const effects: any[] = [
  AlignmentEffects,
  MacroTracksEffects,
  MicroTracksEffects,
  RouterEffects,
];

export * from "./alignment.effects";
export * from "./macro-tracks.effects";
export * from "./micro-tracks.effects";
export * from "./router.effects";
