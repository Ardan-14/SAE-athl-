import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AthletismeComponent } from './athletisme/athletisme.component';
import { GameComponent } from './game/game.component';
import { LigueComponent } from './ligue/ligue.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { HomeComponent } from './home/home.component';
import { ClubComponent } from './club/club.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'athletisme', component: AthletismeComponent},
  { path: 'game', component: GameComponent },
  { path: 'ligue', component: LigueComponent },
  { path: 'club', component: ClubComponent },
  { path: 'rgpd', component: RgpdComponent },
  { path: '**', component: ErrorComponent },
];