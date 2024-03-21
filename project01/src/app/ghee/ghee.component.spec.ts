import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheeComponent } from './ghee.component';

describe('GheeComponent', () => {
  let component: GheeComponent;
  let fixture: ComponentFixture<GheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GheeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
