import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'eventsingalway',
    loadChildren: () => import('./eventsingalway/eventsingalway.module').then( m => m.EventsingalwayPageModule)
  },
  {
    path: 'pubs',
    loadChildren: () => import('./pubs/pubs.module').then( m => m.PubsPageModule)
  },
 
  {
    path: 'pubsingalway',
    loadChildren: () => import('./pubsingalway/pubsingalway.module').then( m => m.PubsingalwayPageModule)
  },

  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },

  {
    path: 'weatherstatus',
    loadChildren: () => import('./weatherstatus/weatherstatus.module').then( m => m.WeatherstatusPageModule)
  },
  
    
  

   
  


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
