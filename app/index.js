'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var OimouGenerator = module.exports = function OimouGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(OimouGenerator, yeoman.generators.Base);

OimouGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

OimouGenerator.prototype.app = function app() {
  var PUBLIC_DIR = "public";

  this.mkdir(PUBLIC_DIR + '');
  this.mkdir(PUBLIC_DIR + '/view');
  this.mkdir(PUBLIC_DIR + '/controller');
  this.mkdir(PUBLIC_DIR + '/model');
  this.mkdir(PUBLIC_DIR + '/js');
  this.mkdir(PUBLIC_DIR + '/css');
  this.mkdir(PUBLIC_DIR + '/lib');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

OimouGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};
