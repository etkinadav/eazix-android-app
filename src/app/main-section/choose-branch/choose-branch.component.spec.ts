import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBranchComponent } from './choose-branch.component';

describe('MainSectionComponent', () => {
  let component: ChooseBranchComponent;
  let fixture: ComponentFixture<ChooseBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseBranchComponent]
    });
    fixture = TestBed.createComponent(ChooseBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
