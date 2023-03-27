import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPodcastsComponent } from './all-podcasts.component';

describe('AllPodcastsComponent', () => {
  let component: AllPodcastsComponent;
  let fixture: ComponentFixture<AllPodcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPodcastsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
