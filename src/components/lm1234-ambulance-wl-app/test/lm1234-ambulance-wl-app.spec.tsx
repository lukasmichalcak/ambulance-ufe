import { newSpecPage } from '@stencil/core/testing';
import { Lm1234AmbulanceWlApp } from '../lm1234-ambulance-wl-app';

describe('lm1234-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Lm1234AmbulanceWlApp],
      html: `<lm1234-ambulance-wl-app base-path="/"></lm1234-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("lm1234-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Lm1234AmbulanceWlApp],
      html: `<lm1234-ambulance-wl-app base-path="/ambulance-wl/"></lm1234-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("lm1234-ambulance-wl-list");
  });
});