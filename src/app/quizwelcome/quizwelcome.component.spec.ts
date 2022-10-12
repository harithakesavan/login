import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizwelcomeComponent } from './quizwelcome.component';

describe('QuizwelcomeComponent', () => {
  let component: QuizwelcomeComponent;
  let fixture: ComponentFixture<QuizwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizwelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
