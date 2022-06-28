import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartModifiedComponent } from './shopping-cart-modified.component';

describe('ShoppingCartModifiedComponent', () => {
  let component: ShoppingCartModifiedComponent;
  let fixture: ComponentFixture<ShoppingCartModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartModifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
