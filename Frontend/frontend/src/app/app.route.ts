import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchStudentComponent } from './search-student/search-student.component';

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
        component: SearchStudentComponent
    }

];

export const appRouterModule = RouterModule.forRoot(routes);
