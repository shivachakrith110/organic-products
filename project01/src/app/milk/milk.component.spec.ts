import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkComponent } from './milk.component';

describe('MilkComponent', () => {
  let component: MilkComponent;
  let fixture: ComponentFixture<MilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
