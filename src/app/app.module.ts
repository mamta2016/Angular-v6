import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
