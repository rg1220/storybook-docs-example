import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req1 = require.context('../src/stories', true, /\.stories\.ts$/);
const req2 = require.context('../src/stories', true, /\.stories\.mdx$/);
function loadStories() {
  req1.keys().forEach(filename => req1(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
