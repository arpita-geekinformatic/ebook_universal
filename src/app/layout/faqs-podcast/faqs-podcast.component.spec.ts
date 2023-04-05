import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsPodcastComponent } from './faqs-podcast.component';

describe('FaqsPodcastComponent', () => {
  let component: FaqsPodcastComponent;
  let fixture: ComponentFixture<FaqsPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
