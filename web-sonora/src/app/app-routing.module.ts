import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { SoundComponent } from './pages/sound/sound.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sound', component: SoundComponent },
  { path: 'video', component: VideoComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
