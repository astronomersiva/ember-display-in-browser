import Controller from '@ember/controller';

export default Controller.extend({
  except: ['chrome', 'safari', 'firefox', 'mobile', 'ie']
});
