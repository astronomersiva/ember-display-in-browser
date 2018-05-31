import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | display in browser', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders when all is specified', async function(assert) {
    await render(hbs`
      {{#display-in-browser all="true"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it does not render when none is specified', async function(assert) {
    await render(hbs`
      {{#display-in-browser none="true"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('it renders in Chrome when only chrome is specified', async function(assert) {
    window.chrome = { why: 'because this wont be there in headless chrome' };
    window.chrome.webstore = true;

    await render(hbs`
      {{#display-in-browser only="chrome"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');

    await render(hbs`
      {{#display-in-browser only="Chrome"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');

    this.set('only', ['Chrome']);
    await render(hbs`
      {{#display-in-browser only=only}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it does not render in Chrome when except chrome is specified', async function(assert) {
    window.chrome = { why: 'because this wont be there in headless chrome' };
    window.chrome.webstore = true;

    await render(hbs`
      {{#display-in-browser except="chrome"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), '');

    await render(hbs`
      {{#display-in-browser except="Chrome"}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), '');

    this.set('except', ['Chrome']);
    await render(hbs`
      {{#display-in-browser except=except}}
        template block text
      {{/display-in-browser}}
    `);

    assert.equal(find('*').textContent.trim(), '');
  });
});
