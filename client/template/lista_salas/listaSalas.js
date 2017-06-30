import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Sala } from '/collections/sala.js';



Template.listaSalas.onCreated(() => {
    
    Meteor.subscribe('salas');
});

Template.listaSalas.helpers({
    salas() {
        return Sala.find({});
    }
});

Template.listaSalas.events({
    'submit #cadastrarSala'(ev) {
        ev.preventDefault();

        let target = ev.target;

        let sala = {
            titulo: target.titulo.value,
            logados: []
        };

        Meteor.call('createSala', sala);
        
        target.titulo.value = '';
    }
});

