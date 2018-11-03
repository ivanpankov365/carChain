function deployContract(_price){
    let contractInstance = contractFace.new(_price,{data: byteCode, gas: 1000000}, function(err, contract) {
        if(!err) {
            if(!contract.address) {
                console.log(contract.transactionId);
                contractAddress = contract.address;
            } else {
                console.log(contract.address);
            }
        }
    });
}

function on(){

}

function on(){

}