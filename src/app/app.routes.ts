//imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//components
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Routes declaration
const routes: Routes = [
	// core module components
    { path: '', component: PhoneListComponent },
    // lazy loaded modules
    { path: 'detail', loadChildren: './+phone-detail/phone-detail.module#PhoneDetailModule' },
    // 404 page not found
	{ path: '**', component: PageNotFoundComponent }
]

//module export
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });