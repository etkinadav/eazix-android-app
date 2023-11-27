import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePrintingSystemComponent } from './choose-printing-system.component';

describe('MainSectionComponent', () => {
  let component: ChoosePrintingSystemComponent;
  let fixture: ComponentFixture<ChoosePrintingSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosePrintingSystemComponent]
    });
    fixture = TestBed.createComponent(ChoosePrintingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
