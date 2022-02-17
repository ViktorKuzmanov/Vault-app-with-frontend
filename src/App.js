import logo from './logo.svg';
import './App.css';
import Vault from './abis/Valut.json'
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {

  const[vaultContract,  setVaultContract] = useState(null);

  useEffect( async () => {
    loadWeb3()
  });

  async function loadWeb3() {
    console.log("use effect is called")
    const web3 = new Web3(window.ethereum);

    const networkId = await web3.eth.net.getId()

    const vaultContract = new web3.eth.Contract(Vault.abi, Vault.networks[networkId].address)
    console.log("voa e adresata na contract-ot so go deployname - ", Vault.networks[networkId].address)

    setVaultContract(vaultContract)
  }

  async function deposit () {
    // call deposit funcion
    // await vaultContract.methods.deposit().send({ from: "0x06214f2E1e1896739D92F3526Bd496DC028Bd7F9",  value: "20000000000000000" })

    // check balance
    let vaultContractBalance = await vaultContract.methods.balanceOfContract().call()
    console.log("v1 balance = ", vaultContractBalance.toString())
  }

  return (
    <div>
      <input type="text" placeholder='Amount' />
      <button onClick={deposit}>Deposit</button>
    </div>
  );
}

export default App;
