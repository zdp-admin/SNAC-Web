import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../../../core/services/constant';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreateUserService {

    constructor(
        private http: HttpClient,
        private constant: Constant
    ) {}

    public createInvestor(user: any): Observable<any> {
        return this.http.post(`${this.constant.api}Investors`, user);
    }

    public createAccredited(user: any): Observable<any> {
        return this.http.post(`${this.constant.api}Accrediteds`, user);
    }

    public createAdmin(user: any): Observable<any> {
        return this.http.post(`${this.constant.api}Users`, user);
    }

    public fetchModule(): Observable<any> {
        return this.http.get(`${this.constant.api}Modules`);
    }

    public groupUser(file: Array<any>, type: number): Observable<any> {
        return this.http.post(`${this.constant.api}Administrative/SaveFileUsers`, {
            File: file,
            Type: type
        });
    }

    public getInstitutions(): Observable<any> {
        return this.http.get(`${this.constant.api}Institutions/GetList`);
    }

    public getGender(): Observable<any> {
        return this.http.get(`${this.constant.api}Genders`);
    }

    public getPeriodos(type: number): Observable<any> {
        return this.http.get(`${this.constant.api}Periods/GetByType?type=${type}`);
    }

    public getTypeContract(): Observable<any> {
        return this.http.get(`${this.constant.api}TypeContract`);
    }
}
