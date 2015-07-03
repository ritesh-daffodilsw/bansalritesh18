Package.describe({

  summary: "What this does",

  version: "1.0.0",

  name: "ritesh:grid",
 
 
});


Package.on_use(function(api){
  api.use("templating", "client");
  api.add_files("template.html", "client");
});
