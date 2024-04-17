import { ComponentFixture, TestBed } from '@angular/core/testing';

import { offerFormDialogComponent } from './offer-form-dialog.component';

describe('offerFormDialogComponent', () => {
  let component: offerFormDialogComponent;
  let fixture: ComponentFixture<offerFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [offerFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(offerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { offerFormDialogComponent };
