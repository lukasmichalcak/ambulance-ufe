import { newSpecPage } from '@stencil/core/testing';
import { Lm1234AmbulanceWlEditor } from '../lm1234-ambulance-wl-editor';

describe('lm1234-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Lm1234AmbulanceWlEditor],
      html: `<lm1234-ambulance-wl-editor entry-id="@new"></lm1234-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});