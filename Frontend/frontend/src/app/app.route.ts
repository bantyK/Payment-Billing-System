import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

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
    }

];

export const appRouterModule = RouterModule.forRoot(routes);
