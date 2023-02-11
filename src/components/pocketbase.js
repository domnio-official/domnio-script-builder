import PocketBase from 'pocketbase';
import config from '../config'

const pb = new PocketBase(config.getconfig("pocketbase-endpoint"));

function addScriptproject(user, password, xml) {
    const data = {
        "scriptBuild_projects": "test"
    };
    console.log("user: " + String(user) + " password: " + String(password)) 
    pb.collection('users').update('gnvmow7211w9n7y', data);
}

export default { addScriptproject }