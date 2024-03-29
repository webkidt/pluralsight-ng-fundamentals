import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::placeholder { color: #999; }
    `]
})
export class CreateEventComponent {
    newEvent: any;
    isDirty = true;

    constructor(
        private router: Router,
        private eventService: EventService) {
    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
