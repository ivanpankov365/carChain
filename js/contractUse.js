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
    contractInstance.status_lease({from: web3.eth.accounts[0]}, function(error, result){
        console.log(result);
    });
}
