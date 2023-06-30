import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuteComponent } from './kute.component';

describe('KuteComponent', () => {
  let component: KuteComponent;
  let fixture: ComponentFixture<KuteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KuteComponent]
    });
    fixture = TestBed.createComponent(KuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
