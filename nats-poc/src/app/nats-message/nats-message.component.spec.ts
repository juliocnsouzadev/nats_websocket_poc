import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatsMessageComponent } from './nats-message.component';

describe('NatsMessageComponent', () => {
  let component: NatsMessageComponent;
  let fixture: ComponentFixture<NatsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
