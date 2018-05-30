import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-in-browser', 'Integration | Component | display in browser', {
  integration: true
});

test('it renders when all is specified', function(assert) {
  this.render(hbs`
    {{#display-in-browser all="true"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it does not render when none is specified', function(assert) {
  this.render(hbs`
    {{#display-in-browser none="true"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('it renders when only chrome is specified', function(assert) {
  window.chrome = { why: 'because this wont be there in headless chrome' };
  window.chrome.webstore = true;

  this.render(hbs`
    {{#display-in-browser only="chrome"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.render(hbs`
    {{#display-in-browser only="Chrome"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.set('only', ['Chrome']);
  this.render(hbs`
    {{#display-in-browser only=only}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it does not render when except chrome is specified', function(assert) {
  window.chrome = { why: 'because this wont be there in headless chrome' };
  window.chrome.webstore = false;

  this.render(hbs`
    {{#display-in-browser except="chrome"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.render(hbs`
    {{#display-in-browser except="Chrome"}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.set('except', ['Chrome']);
  this.render(hbs`
    {{#display-in-browser except=except}}
      template block text
    {{/display-in-browser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
