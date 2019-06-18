import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AppComponent } from '../app/app.component';
import { BrowserModule } from '@angular/platform-browser';

storiesOf('App', module)
  .addDecorator(
    moduleMetadata({
      imports: [ BrowserModule ],
      declarations: [ AppComponent ],
      providers: []
    })
  )
  .add('Root', () => ({
    template: `<app-root></app-root>`
  }));
