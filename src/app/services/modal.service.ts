import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private messageSource = new BehaviorSubject({});
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  open(value: any, chapterName: string, urlType: string) {
    value.currentChapterName = chapterName;
    value.currentUrlType = urlType

    this.messageSource.next(value);
  }
}
