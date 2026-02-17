import { newE2EPage } from '@stencil/core/testing';

describe('lm1234-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm1234-ambulance-wl-list></lm1234-ambulance-wl-list>');

    const element = await page.find('lm1234-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
