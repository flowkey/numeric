Package.describe({
  name: 'flowkey:numeric',
  summary: 'Sophisticated numerical computations in pure javascript',
  version: '1.0.3',
  git: 'https://github.com/flowkey/numeric.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4')
  api.addFiles('flowkey:numeric.js', "client");
  api.export("numeric","client");
});


