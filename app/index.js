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
  this.src_dir = "public";
  this.dest_dir = "dest";
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
  var public_directories = [
    "", "/view", "/controller", "/model", "/js", "/css", "/lib"
  ];
  public_directories.forEach(function(dir) {
    this.mkdir(this.src_dir + dir);
    this.mkdir(this.dest_dir + dir);
  }.bind(this));

  this.copy('index.html', this.dest_dir + '/index.html');
};

OimouGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('bowerrc', '.bowerrc');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};
