import { Routes } from '@angular/router';
import { HttpWithPromiseComponent } from './components/http-with-promise/http-with-promise.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { ReactiveModelComponent } from './components/reactive-model/reactive-model.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { CoreHttpAPIComponent } from './components/core-http-api/core-http-api.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/artist-album-list/artist-album-list.component';
import { AlwaysAuthGuard, AlwaysAuthChildGuard, UnsearchedTermGuard } from './services/search.service';
import { OnlyLoggedInUsersGuard } from './services/only-loggedin-user.service';

export const appRoute : Routes = [
    {path: '',redirectTo:'coreHttpApi', pathMatch: 'full'},
    {path: 'find', redirectTo:'modelDriven'},
    {path: 'promise', component: HttpWithPromiseComponent, canDeactivate:[UnsearchedTermGuard]},
    {path: 'modelDriven', component: ModelDrivenComponent},
    {path: 'reactive', component: ReactiveModelComponent},
    {path: 'template', component: TemplateFormComponent},
    {path: 'coreHttpApi', component: CoreHttpAPIComponent},
    {path: 'jokeList', component: JokeListComponent},
    {path: 'artist/:artistId', component: ArtistComponent,
    // canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildGuard],
        children: [
            {path: '', redirectTo: 'tracks', pathMatch: 'full'}, 
            {path: 'tracks', component: ArtistTrackListComponent}, 
            {path: 'albums', component: ArtistAlbumListComponent}, 
        ]
    },
    // {path: '**', component: JokeListComponent},
]