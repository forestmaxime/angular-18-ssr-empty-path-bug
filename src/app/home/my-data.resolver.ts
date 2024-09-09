import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MyDataResolver {
  constructor(
    private readonly http: HttpClient,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<number[]> {
    console.warn('getting data');
    return this.http.get('http://localhost:4000/api/my-data').pipe(
      map((r) => r as number[])
    );
  }
}
