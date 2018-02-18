import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class menuComponent {
    @Input() title;
    isCollapsed = false;

    toggleCollapseNavbar (){
        this.isCollapsed = !this.isCollapsed;
        // console.log(this.isCollapsed);
    }
}