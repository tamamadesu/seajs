
var MODULES_PATH = 'http://modules.seajs.org/';

if (location.href.indexOf('/~lifesinger/') > 0) {
  MODULES_PATH = 'http://' + location.host + '/~lifesinger/spm/modules/';
}


seajs.config({
  base: MODULES_PATH,

  alias: {
    'less':  'less/1.1.4/less'
  },

  preload: ['plugin-less']
});


define(function(require) {

  var test = require('../../test');

  require('./a.less');
  test.assert(find('a_less'), 'a.less is ok');
  test.done();


  function find(flag) {
    var styles = document.getElementsByTagName('style');

    for (var i = 0, len = styles.length; i < len; i++) {
      var s = styles[i];
      var id = s.id;
      if (id && ~id.indexOf(flag)) {
        return s;
      }
    }
  }

});
