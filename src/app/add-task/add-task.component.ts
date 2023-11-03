import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet(): void {
    this.bottomSheet.open(AddTaskBottomSheet);
  }
}

@Component({
  selector: 'add-task-bottom-sheet',
  templateUrl: 'add-task-bottom-sheet.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskBottomSheet {
  options: FormGroup;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddTaskBottomSheet>,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      taskName: new FormControl(''),
      taskDesc: new FormControl(''),
    });
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
