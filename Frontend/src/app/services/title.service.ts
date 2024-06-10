import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
private titleSource = new BehaviorSubject<string>('Generar Comprobante');
currentTitle = this.titleSource.asObservable();

  constructor() { }

  changeTitle(title:string):void{
    console.log('TitleService: Changing title to', title);
    if(title){
      this.titleSource.next(title);
    }else{
      console.log('TitleSERVICE: Received undefined title, ignoring.');
    }
  
  }
}
