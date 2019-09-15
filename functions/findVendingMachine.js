export default function findVendingMachine(data,category,itemCode){
    let output = [];
    for(let key in data){
        const vm = data[key];
        for(let itemCategory in vm['inventories']){
            if(itemCategory === category){
                for(let item in vm['inventories'][itemCategory]){
                    if(item === itemCode){
                        output.push(vm);
                        break;
                    }
                }
            }else{
                continue;
            }
        }
    }
    return(output);
}

