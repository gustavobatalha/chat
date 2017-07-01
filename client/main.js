import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';



FlowRouter.route('/', {
    action: function(params, queryParams) {       
        BlazeLayout.render('mainLayout', { main: "listaSalas" });   
    }
});

FlowRouter.route('/sala/:id', {
    action: function(params, queryParams) {       
        BlazeLayout.render('mainLayout', { main: "sala" });   
    },
    triggersEnter:[addUserLogado],
    triggersExit:[removerUserLogado]

});

function addUserLogado(context){
    Meteor.call('addUserLogado', context.params.id);
}
function removerUserLogado(context){
    Meteor.call('removerUserLogado', context.params.id);
}


FlowRouter.route('/cadastrar', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainCadastro', { main: "cadastrar" });
    }
});

Template.mainLayout.events({
  'click #logout'() {
    Meteor.logout();
    
  }
});







