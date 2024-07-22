import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeInfoPage } from './liste-info.page';

describe('ListeInfoPage', () => {
  let component: ListeInfoPage;
  let fixture: ComponentFixture<ListeInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
