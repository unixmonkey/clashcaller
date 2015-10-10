Wars = new Mongo.Collection('wars');

if (Meteor.isClient) {

  Template.body.helpers({
    wars: function () {
      return Wars.find({}, {sort:{createdAt: -1}});
    }
  });


  Template.body.events({
    'click button': function () {
      // alert('war started')
      document.getElementById('startwar_form').className = ''
    },

    'click a.close': function () {
      document.getElementById('startwar_form').className = 'hidden'
    },

    'submit #startwar_form': function (event) {
      event.preventDefault();
      var clan_name = event.target.clan_name.value;
      var enemy_name = event.target.enemy_name.value;
      Wars.insert({
        clan_name: clan_name,
        enemy_name: enemy_name,
        createdAt: new Date()
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
