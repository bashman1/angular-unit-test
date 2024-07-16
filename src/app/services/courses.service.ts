import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  findCourseById(courseId:number):Observable<any>{
    return this.http.get(`/api/courses/${courseId}`);
  }

  findAllCourses():Observable<any>{
    return this.http.get(`/api/courses`)
    .pipe(
      map((res:any)=>res['payload'])
    );
  }

  saveCourse(courseId:number, changes:Partial<any>){
    return this.http.put(`/api/courses/${courseId}`, changes);
  }

  findLessons(
    courseId:number, filter='', sortOrder='asc', pageNumber=0, pageSize=3
  ):Observable<any>{
    return this.http.get('/api/lessons',{
        params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map((res:any)=>res['payload'])
    );
  }


}
