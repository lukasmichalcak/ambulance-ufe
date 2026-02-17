import { newSpecPage } from '@stencil/core/testing';
import { Lm1234AmbulanceWlList } from '../lm1234-ambulance-wl-list';

describe('lm1234-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Lm1234AmbulanceWlList],
      html: `<lm1234-ambulance-wl-list></lm1234-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <lm1234-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lm1234-ambulance-wl-list>
    `);
  });
});
