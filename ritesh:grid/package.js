Package.describe({

  summary: "What this does",

  version: "1.0.6",

  name: "ritesh:grid",
  git : "https://github.com/ritesh-daffodilsw/bansalritesh18/ritesh:riteshgrid"  
 
});


Package.on_use(function(api){
  api.use("templating", "client");
  api.add_files("template.html", "client");
  api.add_files("serverfile.js", "server");
});
