define([
    "app"
  ],

  function(VirtualDojo) {
    VirtualDojo.module("Utilities", function(Utilities, VirtualDojo, Backbone, Marionette, $, _){
      Utilities.entryCallback = function() {
        console.log("AuthCheck: In entry callback", VirtualDojo.authed)
        // initialize history on start of the app 
        if(Backbone.history){
          Backbone.history.start(); 
          console.log("history started");
          VirtualDojo.trigger("show:dashboard");
          VirtualDojo.trigger("show:sidenav");
    
          if(VirtualDojo.getCurrentRoute() === ""){
            console.log("navigating to dashboard")
            VirtualDojo.trigger("show:dashboard");
            VirtualDojo.trigger("show:sidenav")
          }
        }
	    }
    });	
    return VirtualDojo.Utilities;
  }
);
