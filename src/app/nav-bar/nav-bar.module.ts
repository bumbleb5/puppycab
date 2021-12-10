import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component is small bucket
// module is large container
import { NavBarComponent } from "./nav-bar.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        // lets Angular know to assoc the component with the module
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        // CommonModule lets us use *ngIf & *ngFor, other directives
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ]
})
// to import into app.module.ts
export class NavBarModule { }
