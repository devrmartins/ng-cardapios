import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardapiosComponent } from './lista-cardapios.component';

describe('ListaCardapiosComponent', () => {
  let component: ListaCardapiosComponent;
  let fixture: ComponentFixture<ListaCardapiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardapiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCardapiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
