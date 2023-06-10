import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabshistoryPage } from './tabshistory.page';

describe('TabshistoryPage', () => {
  let component: TabshistoryPage;
  let fixture: ComponentFixture<TabshistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabshistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
