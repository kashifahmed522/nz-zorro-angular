import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderStatusModel } from '../model/loader-status.model';

@Injectable()
export class SubjectService {
  private copyTemplateData$: BehaviorSubject<any> = new BehaviorSubject(null);
  private LoaderStatus$: BehaviorSubject<any> = new BehaviorSubject(null);

  getCopyTemplateData(): Observable<any> {
    return this.copyTemplateData$.asObservable();
  }

  setCopyTemplateData(obj: any) {
    this.copyTemplateData$.next(obj);
  }

  getLoaderStatus(): Observable<any> {
    return this.LoaderStatus$.asObservable();
  }

  setLoaderStatus(status: LoaderStatusModel) {
    this.LoaderStatus$.next(status);
  }
}
