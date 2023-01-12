import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceobservableComponent } from './spaceobservable.component';

describe('SpaceobservableComponent', () => {
  let component: SpaceobservableComponent;
  let fixture: ComponentFixture<SpaceobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceobservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
