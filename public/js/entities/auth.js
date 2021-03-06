define(
  [
    "app",
    "entities/ajax"
  ], function(VirtualDojo, Ajax) {
    VirtualDojo.module("Entities.Auth", function(Auth, ExaApp, Backbone, Marionette, $, _) {
      var API = {
        checkAuth: function () {
          var ajax = Ajax.perform({
            type: "GET",
            url: "/auth/checkauth",
            callback: function (data) {
              return data;
            }
          });

          return ajax.promise();
        }
      };

      VirtualDojo.reqres.setHandler("entities:auth:checkAuth", function () {
        return API.checkAuth();
      });
    });
  }
);
