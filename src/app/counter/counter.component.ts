import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    count: number = 0;
    @Output() augment = new EventEmitter();
    @Output() diminue = new EventEmitter();
    
    countUp() {
        this.count++;
        this.augment.emit(1);
    }
    countDown() :void {
        if(this.count !== 0){
            this.count--;
            this.augment.emit(-1);
        }
    }

}