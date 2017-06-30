import { Meteor } from 'meteor/meteor';

import { Sala } from '/collections/sala.js';

Meteor.startup(() => {
  Meteor.publish('salas', function () {
      return Sala.find({});
  });

  Meteor.publish('sala', function (id) {
      return Sala.findOne({
          _id: id
      });
  });

  Meteor.methods({
      'createSala': function(sala) {
          Sala.insert(sala);
      },
      'removeSala': function (id) {
          Sala.remove({
              _id: id
          });
      },
      'addUserLogado': function (id) {
          let sala = Sala.findOne({
              _id: id
          });
          let logados = sala.logados;
          if(logados.indexOf(Meteor.user().username) === -1){
            logados.push(Meteor.user().username);    
            Sala.update({
                _id: id
              }, {
                  $set: {
                      logados: logados
                  }
              });
          }
      },
      'removerUserLogado': function (id) {
          let sala = Sala.findOne({
              _id: id
          });
          let logados = sala.logados;
          let indexUser = logados.indexOf(Meteor.user().username);
          if(indexUser !== -1){
            logados.splice(indexUser, 1);
            Sala.update({
                _id: id
              }, {
                  $set: {
                      logados: logados
                  }
              });
          }
      }
  });
});