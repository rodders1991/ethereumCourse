const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'order perfect midnight innocent before chunk math law symbol latin mansion entry',
  'https://rinkeby.infura.io/v3/1caa3a61602542268f3479bba068b216'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attemping to deploy from accounts ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: ('0x'+ bytecode), arguments: ['Hi there!']})
    .send({ gas: '1000000', gasPrice:"2000001", from: accounts[0] });


  console.log('Contract deployed to ', result.options.address);

};

deploy();
