 import { Kafka } from 'kafkajs';

 const kafka = new Kafka({
    clientId:"my-app",
    broker:['http://172.21.96.1:9092']
 });

 async function init() {
    const admin=kafka.admin();
    console.log('admin connecteing...')
    admin.connect();
    console.log(" adminconnection success...")    
 }