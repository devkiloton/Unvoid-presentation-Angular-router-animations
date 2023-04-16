import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'one',
    loadComponent: () =>
      import('./pages/one/one.component').then(mod => mod.OneComponent),
  },
  {
    path: 'two',
    loadComponent: () =>
      import('./pages/two/two.component').then(mod => mod.TwoComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/three/three.component').then(mod => mod.ThreeComponent),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
