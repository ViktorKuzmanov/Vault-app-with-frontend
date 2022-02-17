import logo from './logo.svg';
import './App.css';
import Vault from './abis/Vault.json'
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {

  const [web3, setWeb3] = useState(null)
  const[vaultContract,  setVaultContract] = useState(null);
  const[balanceInContract,  setBalanceInContract] = useState(null);
  const[amount,  setAmount] = useState(null);

  useEffect( async () => {
    loadBlockchainData()
    console.log("aa")
  }, []);

  async function loadBlockchainData() {

    console.log("use effect is called")
    const web3 = new Web3(window.ethereum);
    setWeb3(web3)

    const networkId = await web3.eth.net.getId()

    const vaultContract = new web3.eth.Contract(Vault.abi, Vault.networks[networkId].address)
    console.log("voa e adresata na contract-ot so go deployname - ", Vault.networks[networkId].address)

    setVaultContract(vaultContract)

    let vaultContractBalance = await vaultContract.methods.balanceOfContract().call()
    setBalanceInContract(vaultContractBalance / 1e18)
  }

  async function deposit () {
    // call deposit funcion
    await vaultContract.methods.deposit().send({ from: "0x06214f2E1e1896739D92F3526Bd496DC028Bd7F9",  value: amount.toString() })

    // check balance
    let vaultContractBalance = await vaultContract.methods.balanceOfContract().call()
    console.log("v1 balance = ", vaultContractBalance.toString())
  }

  function amountChanged(e) {
    setAmount(e.target.value * 1e18)
  }

  return (
    <div>
      <input type="text" placeholder='Amount in ether' onChange={amountChanged}/>
      <button onClick={deposit}>Deposit</button>
      <p>Balance in Contract : {balanceInContract} ether</p>
    </div>
  );
}

export default App;
