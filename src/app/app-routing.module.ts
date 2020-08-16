import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

import { DefaultComponent } from './skills-comp/default/default.component';
import { JavaComponent } from './skills-comp/java/java.component';
import { PythonComponent } from './skills-comp/python/python.component';
import { Html5Component } from './skills-comp/html5/html5.component';
import { Css3Component } from './skills-comp/css3/css3.component';
import { JavascriptComponent } from './skills-comp/javascript/javascript.component';
import { AngularComponent } from './skills-comp/angular/angular.component';
import { NodejsComponent } from './skills-comp/nodejs/nodejs.component';
import { VscodeComponent } from './skills-comp/vscode/vscode.component';
import { IntellijComponent } from './skills-comp/intellij/intellij.component';
import { AndroidsComponent } from './skills-comp/androids/androids.component';
import { BootstrapComponent } from './skills-comp/bootstrap/bootstrap.component';
import { TensorflowComponent } from './skills-comp/tensorflow/tensorflow.component';
import { NumpyComponent } from './skills-comp/numpy/numpy.component';
import { LinuxComponent } from './skills-comp/linux/linux.component';
import { AgileComponent } from './skills-comp/agile/agile.component';
import { GitComponent } from './skills-comp/git/git.component';
import { SqlComponent } from './skills-comp/sql/sql.component';
import { EngComponent } from './skills-comp/eng/eng.component';
import { ChineseComponent } from './skills-comp/chinese/chinese.component';
import { PandasComponent } from './skills-comp/pandas/pandas.component';
import { ReactComponent } from './skills-comp/react/react.component';

const routes: Routes = [
  { path: '', redirectTo: '/main_page', pathMatch: 'full' },
  { path: 'main_page', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: '', component: DefaultComponent, outlet: 'cvoutlet' },
      { path: 'java', component: JavaComponent, outlet: 'cvoutlet' },
      { path: 'python', component: PythonComponent, outlet: 'cvoutlet' },
      { path: 'html5', component: Html5Component, outlet: 'cvoutlet' },
      { path: 'css3', component: Css3Component, outlet: 'cvoutlet' },
      {
        path: 'javascript',
        component: JavascriptComponent,
        outlet: 'cvoutlet',
      },
      { path: 'angular', component: AngularComponent, outlet: 'cvoutlet' },
      { path: 'nodejs', component: NodejsComponent, outlet: 'cvoutlet' },
      { path: 'vscode', component: VscodeComponent, outlet: 'cvoutlet' },
      { path: 'intellij', component: IntellijComponent, outlet: 'cvoutlet' },
      { path: 'androids', component: AndroidsComponent, outlet: 'cvoutlet' },
      { path: 'bootstrap', component: BootstrapComponent, outlet: 'cvoutlet' },
      {
        path: 'tensorflow',
        component: TensorflowComponent,
        outlet: 'cvoutlet',
      },
      { path: 'numpy', component: NumpyComponent, outlet: 'cvoutlet' },
      { path: 'linux', component: LinuxComponent, outlet: 'cvoutlet' },
      { path: 'agile', component: AgileComponent, outlet: 'cvoutlet' },
      { path: 'sql', component: SqlComponent, outlet: 'cvoutlet' },
      { path: 'git', component: GitComponent, outlet: 'cvoutlet' },
      { path: 'eng', component: EngComponent, outlet: 'cvoutlet' },
      { path: 'chinese', component: ChineseComponent, outlet: 'cvoutlet' },
      { path: 'pandas', component: PandasComponent, outlet: 'cvoutlet' },
      { path: 'react', component: ReactComponent, outlet: 'cvoutlet' },
    ],
  },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
