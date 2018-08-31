import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeComponent } from './components/joke/joke.component';
import { CcCardHoverDirective } from './cc-card-hover.directive';
import { ObservableComponent } from './components/observable/observable.component';
import { PipeComponent } from './components/pipeComponent/pipe.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { CustomePipe } from './Pipes/custome.pipe';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { ReactiveModelComponent } from './components/reactive-model/reactive-model.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { InjectorsComponent } from './components/injectors/injectors.component';
import { ProviderComponent } from './components/provider/provider.component';
import { TokenComponent } from './components/token/token.component';
import { ConfigOfServiceComponent, SimpleService } from './components/config-of-service/config-of-service.component';
import { OtherService } from './components/config-of-service/config-of-service.component';
import { CoreHttpAPIComponent } from './components/core-http-api/core-http-api.component';
import { HttpWithObservableComponent } from './components/http-with-observable/http-with-observable.component';
import { HttpWithPromiseComponent } from './components/http-with-promise/http-with-promise.component';
import { SearchService, AlwaysAuthGuard, UserService, AlwaysAuthChildGuard, UnsearchedTermGuard } from './services/search.service';
import { appRoute } from './app.routing';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/artist-album-list/artist-album-list.component';
import { OnlyLoggedInUsersGuard } from './services/only-loggedin-user.service';
import { HookJoke, HookJokeComponent, HookJokeListComponent, HookAppComponent } from './components/life-cicle-hook';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeComponent,
    CcCardHoverDirective,
    ObservableComponent,
    PipeComponent,
    AsyncPipeComponent,
    CustomePipe,
    ModelDrivenComponent,
    ReactiveModelComponent,
    TemplateFormComponent,
    InjectorsComponent,
    ProviderComponent,
    TokenComponent,
    ConfigOfServiceComponent,
    CoreHttpAPIComponent,
    HttpWithObservableComponent,
    HttpWithPromiseComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    // hook
    HookJokeComponent,
    HookJokeListComponent,
    HookAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    SimpleService,
    OtherService, 
    SearchService,
    AlwaysAuthGuard,
    AlwaysAuthChildGuard,
    UserService,
    UnsearchedTermGuard,
    OnlyLoggedInUsersGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
