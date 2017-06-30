import { Meteor } from 'meteor/meteor';

import { Mensagem } from '/collections/mensagem.js';

Meteor.startup(() => {
  Meteor.publish('mensagens', function () {
      return Mensagem.find({
      });
  });

  Meteor.methods({
      'createMensagem': function(mensagem) {
          Mensagem.insert(mensagem);
      },
      'removeMensagem': function (id) {
          Mensagem.remove({
              _id: id
          });
      },
      
  });
});