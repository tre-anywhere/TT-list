import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemsFormComponent } from './task-items-form.component';

describe('TaskItemsFormComponent', () => {
  let component: TaskItemsFormComponent;
  let fixture: ComponentFixture<TaskItemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
