import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';


//import './cadastrar.html';

var cadastrar = false;

Template.cadastrar.events({
    'submit #cadastrar'(ev){
        ev.preventDefault()   
        let target = ev.target;

        let user = {
            password: target.password.value,
            username: target.username.value
        }
        Accounts.createUser(user);
        target.reset();
        FlowRouter.go('/');
    }
})