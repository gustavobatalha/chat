import { Template } from 'meteor/templating';
import { Sala } from '/collections/sala.js';
import { Mensagem } from '/collections/mensagem.js';
import { FlowRouter } from 'meteor/kadira:flow-router';



Template.sala.onCreated(() => {
    Meteor.subscribe('mensagens');
    Meteor.subscribe('salas');
    Meteor.subscribe('sala');
    
});

Template.sala.helpers({
    sala() {
        
        let id = FlowRouter.getParam('id');
        let sala = Sala.findOne({
            _id: id
        });
        return sala;
    },

    mensagens() {
        
        let id = FlowRouter.getParam('id');
        let mensagens = Mensagem.find({
            salaId: id
        });
        return mensagens;
    },
    formataData(date){
        return date.getHours()+":"+date.getMinutes();
    },
    isCurrentUser(usuario){
        return Meteor.user().username == usuario;
    }
});

Template.sala.events({
    'submit #inserirMsg'(ev) {
        ev.preventDefault();

        let target = ev.target;
        let id = FlowRouter.getParam('id');
        
            if(target.mensagem.value !== ""){
                let msg = {
                mensagem: target.mensagem.value,
                usuario: Meteor.user().username,
                salaId:id,
                data: new Date()
            };

            Meteor.call('createMensagem', msg);

            target.mensagem.value = "";
        }

        
        
    }
});