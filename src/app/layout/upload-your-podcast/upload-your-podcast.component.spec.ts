import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadYourPodcastComponent } from './upload-your-podcast.component';

describe('UploadYourPodcastComponent', () => {
  let component: UploadYourPodcastComponent;
  let fixture: ComponentFixture<UploadYourPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadYourPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadYourPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
