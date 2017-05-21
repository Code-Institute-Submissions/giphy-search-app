import { MainSectionComponent } from './main-section/main-section.component';
import { GiphyComponent } from './giphy/giphy.component';

export const appRoutes = [
  {
    path: '',
    component: MainSectionComponent,
  },
  {
    path: 'home',
    component: MainSectionComponent,
  },
  {
    path: 'giphy',
    component: GiphyComponent,
  },


  // {
  //   path: 'resources/:id',
  //   component: ResourceViewComponent,
  // },
  // {
  //   path: 'email-templates',
  //   component: EmailTemplateListComponent,
  // },
  //
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
