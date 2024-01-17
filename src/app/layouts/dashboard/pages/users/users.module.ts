import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { DialogDeleteStudent } from './components/dialog-delete-student/dialog.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DialogEditStudent } from './components/dialog-form-edit/dialog-form-edit.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    DialogDeleteStudent,
    DialogEditStudent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    SharedModule,
    MatDialogModule,
    SharedModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }
