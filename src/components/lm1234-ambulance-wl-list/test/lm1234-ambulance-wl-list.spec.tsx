import { newSpecPage } from '@stencil/core/testing';
import { Lm1234AmbulanceWlList } from '../lm1234-ambulance-wl-list';

describe('lm1234-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Lm1234AmbulanceWlList],
      html: `<lm1234-ambulance-wl-list></lm1234-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as Lm1234AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
