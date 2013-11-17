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

/**
 *  setup constants
 */
OimouGenerator.prototype.initConstants = function() {
  this.public_dir = "public";
};

OimouGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  this.initConstants();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: "input",
      name: "port",
      message: "Which port would you like to use as preview?",
      default: 9080
    }
  ];

  this.prompt(prompts, function (props) {
    this.port = props.port;

    cb();
  }.bind(this));
};

OimouGenerator.prototype.app = function app() {
  this.mkdir(this.public_dir + '');
  this.mkdir(this.public_dir + '/view');
  this.mkdir(this.public_dir + '/controller');
  this.mkdir(this.public_dir + '/model');
  this.mkdir(this.public_dir + '/js');
  this.mkdir(this.public_dir + '/css');
  this.mkdir(this.public_dir + '/lib');

  this.copy('index.html', this.public_dir + '/index.html');
};

OimouGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('bowerrc', '.bowerrc');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};
