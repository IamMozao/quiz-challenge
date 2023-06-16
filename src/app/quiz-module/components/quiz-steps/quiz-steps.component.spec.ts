import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStepsComponent } from './quiz-steps.component';

describe('QuizStepsComponent', () => {
  let component: QuizStepsComponent;
  let fixture: ComponentFixture<QuizStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
