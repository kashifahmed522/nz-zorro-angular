import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  setLoaderStatus(status: {
    isActive: boolean;
    type?: string;
    message?: string;
    desc?: string;
  }) {
    this.LoaderStatus$.next(status);
  }
}
