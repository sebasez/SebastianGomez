import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './profile/info/info.component';
import { IntroComponent } from './profile/intro/intro.component';
import { KnowledgeComponent } from './profile/knowledge/knowledge.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { EducationComponent } from './profile/education/education.component';
import { ContactComponent } from './profile/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    IntroComponent,
    KnowledgeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
