import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { FocusDirective } from './focus.directive';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { ClickService } from './click.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BoardComponent,
    ListComponent,
    FocusDirective,
    CardComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    DragulaModule
  ],
  providers: [
    ClickService
  ],
  entryComponents: [
    CardDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
