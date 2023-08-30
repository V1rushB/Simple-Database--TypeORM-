import { DataSource } from "typeorm";
import { User } from "./entity/User.js";

const dataSource = new DataSource({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'home-training',
    entities:[User],
    //synchronize: true,
    logging: true,

})

dataSource.initialize().then(()=> {
    console.log("Connected to DB dude.");
}).catch(err=> {
    console.error(`Failed to connect due to: ${err}`);
});

export default dataSource;