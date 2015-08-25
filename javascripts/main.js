// Pull in all the various javascript libraries
requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",

  },
  shim: {
    "bootstrap": ["jquery"],
  }
});

// The main function requiring all our anciliary scripts
requirejs(["dependencies", "deck", "winTest"], 
  function(dependencies, deck, win) {

// deck.allcards();
});

