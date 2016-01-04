// package metadata file for Meteor.js
var packageName = 'matthieuh:pure-angular-date-range-picker'; // https://atmospherejs.com/angularui/angular-ui-router
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.2.0';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: 'A pure Angular (moment.js is the only dependency) date range picker.',
  git: 'https://github.com/matthieuh/matthieuh:pure-angular-date-range-picker',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.4.0', where); // Dependencies

  api.addFiles('dist/scripts/ob-daterangepicker.js', where); // Files in use
  api.addFiles('dist/scripts/vendor.js', where); // Files in use
  api.addFiles('dist/styles/ob-daterangepicker.css', where); // Files in use
});
