import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchAccountantComponent } from './search-accountant/search-accountant.component';
import { CreateAccountantComponent } from './create-accountant/create-accountant.component';

const routes: Routes = [
    {
        path: 'index',
        component: StudentLoginComponent
    },
    {
        path: 'admin',
        component: AdminLoginComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchAccountantComponent
    },
    {
        path: 'create_accountant',
        component: CreateAccountantComponent
    }

];

export const appRouterModule = RouterModule.forRoot(routes);
