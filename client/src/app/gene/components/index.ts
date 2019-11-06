import { FamilyDetailComponent } from './family-detail.component';
import { GeneComponent } from './gene.component';
import { GeneDetailComponent } from './gene-detail.component';
import { MacroComponent } from './macro.component';
import { MicroLegendComponent } from './micro-legend.component';
import { MicroComponent } from './micro.component';
import { PlotComponent } from './plot.component';
import { TrackDetailComponent } from './track-detail.component';
import * as fromShared from './shared';
import * as fromViewers from './viewers';

export const components: any[] = [
  FamilyDetailComponent,
  GeneComponent,
  GeneDetailComponent,
  MacroComponent,
  MicroComponent,
  MicroLegendComponent,
  PlotComponent,
  TrackDetailComponent,
  ...fromShared.components,
  ...fromViewers.components
];

export * from './family-detail.component';
export * from './gene.component';
export * from './gene-detail.component';
export * from './macro.component';
export * from './micro-legend.component';
export * from './micro.component';
export * from './plot.component';
export * from './track-detail.component';
export * from './shared';
export * from './viewers';
