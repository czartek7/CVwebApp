import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { JavaComponent } from './skills-comp/java/java.component';
import { PythonComponent } from './skills-comp/python/python.component';
import { DefaultComponent } from './skills-comp/default/default.component';
import { Html5Component } from './skills-comp/html5/html5.component';
import { Css3Component } from './skills-comp/css3/css3.component';
import { JavascriptComponent } from './skills-comp/javascript/javascript.component';
import { AngularComponent } from './skills-comp/angular/angular.component';
import { NodejsComponent } from './skills-comp/nodejs/nodejs.component';
import { VscodeComponent } from './skills-comp/vscode/vscode.component';
import { AndroidsComponent } from './skills-comp/androids/androids.component';
import { IntellijComponent } from './skills-comp/intellij/intellij.component';
import { BootstrapComponent } from './skills-comp/bootstrap/bootstrap.component';
import { TensorflowComponent } from './skills-comp/tensorflow/tensorflow.component';
import { NumpyComponent } from './skills-comp/numpy/numpy.component';
import { LinuxComponent } from './skills-comp/linux/linux.component';
import { GitComponent } from './skills-comp/git/git.component';
import { AgileComponent } from './skills-comp/agile/agile.component';
import { SqlComponent } from './skills-comp/sql/sql.component';
import { EngComponent } from './skills-comp/eng/eng.component';
import { ChineseComponent } from './skills-comp/chinese/chinese.component';
import { PandasComponent } from './skills-comp/pandas/pandas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutMeComponent,
    CvComponent,
    ContactComponent,
    JavaComponent,
    PythonComponent,
    DefaultComponent,
    Html5Component,
    Css3Component,
    JavascriptComponent,
    AngularComponent,
    NodejsComponent,
    VscodeComponent,
    AndroidsComponent,
    IntellijComponent,
    BootstrapComponent,
    TensorflowComponent,
    NumpyComponent,
    LinuxComponent,
    GitComponent,
    AgileComponent,
    SqlComponent,
    EngComponent,
    ChineseComponent,
    PandasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
