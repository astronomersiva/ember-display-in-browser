import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { assert } from '@ember/debug';

import {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isBlink,
  isMobile
} from 'ember-display-in-browser/utils/browser-checks';

import layout from '../templates/components/display-in-browser';

export default Component.extend({
  layout,

  shouldRender: computed('except', 'only', 'all', 'none', function() {
    let {
      except,
      only,
      all,
      none
    } = this.getProperties('except', 'only', 'all', 'none');

    if (all && none) {
      assert('Using both all and none is not possible.');
    }

    if (all) {
      let shouldDisplay = all.toString() === 'true' ? true : false;
      return shouldDisplay;
    }

    if (none) {
      let shouldDisplay = none.toString() === 'true' ? false : true;
      return shouldDisplay;
    }

    if (isPresent(except) && isPresent(only)) {
      assert('Using both except and only is not possible.');
    }

    let browsers = [
      { name: 'mobile', isCurrentBrowser: isMobile() },
      { name: 'chrome', isCurrentBrowser: isChrome() },
      { name: 'firefox', isCurrentBrowser: isFirefox() },
      { name: 'safari', isCurrentBrowser: isSafari() },
      { name: 'opera', isCurrentBrowser: isOpera() },
      { name: 'ie', isCurrentBrowser: isIE() },
      { name: 'edge', isCurrentBrowser: isEdge() },
      { name: 'blink', isCurrentBrowser: isBlink() }
    ];

    let currentBrowser = (browsers.find(browser => browser.isCurrentBrowser) || {}).name;
    currentBrowser = (currentBrowser || '').toLowerCase();

    if (isPresent(except)) {
      if (Array.isArray(except)) {
        except = except.map(browser => browser.toLowerCase());
      } else {
        except = except.toLowerCase();
      }

      return !except.includes(currentBrowser);
    }

    if (isPresent(only)) {
      if (Array.isArray(only)) {
        only = only.map(browser => browser.toLowerCase());
      } else {
        only = only.toLowerCase();
      }

      return only.includes(currentBrowser);
    }
  })
});
