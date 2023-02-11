import { Deta } from 'deta';
import config from "../../config"

const deta = Deta(config.values['deta-project-key']);

const drive = deta.Drive(config.values['deta-drive_name']);

async function save(name, xml, properties) {
    console.log(xml)
    console.log(properties)
    var data = { "xml": xml, "data": properties }
    console.log(data)
    drive.put(String(name, ".json"), { data: data, contentType: 'application/json'});
}

console.log("AAAAAAAAAAAAAAAAAAAAAA")

export default { save }