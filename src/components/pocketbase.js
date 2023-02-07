import PocketBase from 'pocketbase';
import config from '../config'

const pb = new PocketBase(config.getconfig("pocketbase-endpoint"));

function addScriptproject(user, password, xml) {
    const data = {
        "username": String(user),
        "emailVisibility": false,
        "password": String(password),
        "passwordConfirm": String(password),
        "scriptBuild_projects": "test"
    };
    console.log("user: " + String(user) + " password: " + String(password)) 
    pb.collection('users').update('RECORD_ID', data);
}

export default { addScriptproject }