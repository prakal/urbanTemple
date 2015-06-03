// collection view
define([
    "app",
    "tpl!apps/Dashboard/progress/templates/progress_view.tpl"
  ],
  function(VirtualDojo, progressViewTpl) {
    VirtualDojo.module("DashApp.View", function(View, VirtualDojo, Backbone, Marionette, $, _){

      // single class item view
      View.Progress = Marionette.ItemView.extend({
        template: progressViewTpl,
        events: {
          "click div": "clickVideo"
        },

        clickVideo: function(e){
          e.preventDefault();
          var model = this.model;
          console.log(model.attributes)  
          var disciplineId = model.get('discipline').attributes.disciplineId;
          var classId = model.get('currentClassId');
          var levelId = model.get('currentLevelNum');



          VirtualDojo.trigger("show:video", {
            'disciplineId': disciplineId,
            'classId': classId,
            'levelId': levelId
          })
          console.log('show:video triggered');
        },


        serializeData: function() {
          var model = this.model;

          // discipline
          var discipline = model.get("discipline");
          var disciplineTitle = discipline.get("title");

          // class
          var currentClassId = model.getCurrentClassId();
          var classes = discipline.get("classes");
          var currentClass = classes.findById(currentClassId);
          var currentClassTitle = currentClass.get("title");

          // level
          var currentLevel = model.getCurrentLevel();
          var currentLevelTitle = currentLevel.get("title");

          var percentage = model.get("percentage");
          
          return {
            disciplineTitle: disciplineTitle,
            currentClassTitle: currentClassTitle,
            currentLevelTitle: currentLevelTitle,
            percentage: percentage
          };
        }
      });

      // my classes collection view
      View.Progresses = Marionette.CollectionView.extend({
        className: "progresses-container",
        childView: View.Progress
      });
    });

    return VirtualDojo.DashApp.View;
  }
);



 