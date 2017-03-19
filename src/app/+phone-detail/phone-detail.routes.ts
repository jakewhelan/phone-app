// imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PhoneDetailComponent } from './phone-detail.component';

// routes declaration
const routes: Routes = [
	// core module components
    { path: '', component: PhoneDetailComponent },
]

// module export
export const PhoneDetailRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);