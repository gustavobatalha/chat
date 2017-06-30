import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


//import './login.html';


Template.login.onCreated(()=>{
    if(Meteor.userId()){
        FlowRouter.go('/');
    }
});

Template.login.events({
    'submit #login'(ev){
        ev.preventDefault()
        
        let target = ev.target;
        Meteor.loginWithPassword(target.username.value, target.password.value);
        target.reset();
        FlowRouter.reload();
    },
    
})