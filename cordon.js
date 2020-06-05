const Client = require('kubernetes-client').Client

async function main(){
    try{
        const client = new Client({ version: '1.13' });
        const nodes = await client.api.v1.nodes.get();
        nodes.body.items.forEach(async (node) => {
            nodeName = node.metadata.name;
            if(node.metadata.labels['cloud.google.com/gke-nodepool'] != 'default-pool'){
                console.log(node.metadata.name);
            }
        });
    }
    catch(err){
        console.log('Inside Catch !');
        console.log(err);
    }
}
main()