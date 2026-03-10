import { newE2EPage } from '@stencil/core/testing';

describe('lm1234-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm1234-ambulance-wl-app></lm1234-ambulance-wl-app>');

    const element = await page.find('lm1234-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
