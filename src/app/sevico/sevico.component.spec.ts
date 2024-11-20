import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevicoComponent } from './sevico.component';

describe('SevicoComponent', () => {
  let component: SevicoComponent;
  let fixture: ComponentFixture<SevicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
