import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthComponent } from './auth/auth.component';
import { VerifyEmployeeComponent } from './verify-employee/verify-employee.component';
import { EmployeeNotFoundComponent } from './employee-not-found/employee-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'auth',
        component: LoginComponent
    },
    {
        path: 'recovery-password',
        component: RecoveryPasswordComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
    {
        path: 'snac',
        component: VerifyEmployeeComponent
    },
    {
        path: 'not-found',
        component: EmployeeNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRouting {}
