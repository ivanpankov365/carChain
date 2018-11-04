function deployContract(){
    let wallet = '0x6985B24eBe039aB7d28db3ac04C400aEf73EccbF';
    let about = 'ascdcsdsd';
    let _price = document.getElementsByClassName('input3')[0].value;
    let contractInstance = contractFace.new(wallet, _price, about, {from: web3.eth.accounts[0], data: byteCode, gas: 1000000}, function(err, contract) {
        if(!err) {
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                contractAddress = contract.address;
                document.getElementById('carCard-none').id = 'carCard';
                document.getElementsByClassName('addCar')[0].className = 'addCar-none';
                document.getElementsByClassName('addCar-none')[1].className = 'addCar';
                document.getElementById('refresh-none').id = 'refresh';
                let urlJSON = 'http://10.90.23.72:8080/postCar';
                let params = '{\n' +
                    '"priceAllDays": 4520.99,\n' +
                    '"manual": true,\n' +
                    '"websiteId": "reni",\n' +
                    '"vehicle": "Fiat Punto or similar",\n' +
                    '"location": {\n' +
                    '"pickUp": {\n' +
                    '"address": null,\n' +
                    '"distanceToSearchLocationInKm": 0,\n' +
                    '"geoInfo": [\n' +
                    '  55.9497,\n' +
                    '  -3.3635\n' +
                    '],\n' +
                    '}\n' +
                    '},\n' +
                    '"chained": true\n' +
                    '}';
                console.log(params)
                fetch(urlJSON,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        body: params
                    })
                    .then((res1) => {
                        console.log('res1.token', res1);
                        res1.text().then((res2) => {
                            resolve(res2);
                            console.log('res2.token', res2);
                        });
                    });
            }
        }
    });
}

function onOff(){
    if(on){
        console.log('onOff', on);
        document.getElementById('onOff').innerText = 'ON';
        on = false;
    }else{
        console.log('onOff', on);
        document.getElementById('onOff').innerText = 'OFF';
        on = true;
    }
    let contractInstance = contractFace.at(contractAddress);
    contractInstance.change_status({from: web3.eth.accounts[0]}, function(error, result){
        console.log(result);
    });
}
