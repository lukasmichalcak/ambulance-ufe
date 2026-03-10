import { newE2EPage } from '@stencil/core/testing';

describe('lm1234-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm1234-ambulance-wl-editor></lm1234-ambulance-wl-editor>');

    const element = await page.find('lm1234-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
