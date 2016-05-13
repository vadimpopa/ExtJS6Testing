phantom.injectJs('boot.js');

var casper = require('casper').create();

casper.start('http://local.accaimip.com/index.php');

casper.then(function() {
    if (this.exists('div.signup-section')) {
        this.echo('the shortcut exists');
    } else {
        this.echo('the shortcut not exists');
    }
});

casper.run();