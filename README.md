npm install

specify your deployment address in 2_deploy.js

specify amount of seconds in 2_deploy.js when keeper needs to run
30

add seedphrase in truffle config

# Vault
Defi app where user can deposit Ether into our smart contract and get paid periodically.

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [MetaMask](https://metamask.io/) (Ethereum Wallet)

## Requirements
- [NodeJS](https://nodejs.org/en/) version v14.17.0
- [MetaMask](https://metamask.io/) Ethereum browser.

## Setting Up
### 1. Clone/Download the Repository:
`$ git clone linkFromRepo`

### 2. Install Dependencies:
```
$ npm install 
```

### 3. Start Ganache-cli
In a separate CMD prompt/terminal run:
```
$ ganache-cli -f https://mainnet.infura.io/v3/<Your-Project-ID> -m <Your-Mnemonic-Phrase> -u 0x9759A6Ac90977b93B58547b4A71c78317f391A28 -p 7545
```

Replace `Your-Project-ID` with your Infura Project ID located in the settings of your project.
Replace `Your-Mnemonic-Phrase` with your own mnemonic phrase. If you don't have a mnemonic phrase to include you can omit it:
```
$ ganache-cli -f https://mainnet.infura.io/v3/<Your-Project-ID> -u 0x9759A6Ac90977b93B58547b4A71c78317f391A28 -p 7545
```

If you didn't include a mnemonic phrase, after starting the ganache server it will supply you with one, plus 10 accounts you can use,
I recommend saving that mnemonic phrase to use it when you need to start (or restart) ganache, and import the 1st private key listed in MetaMask so you can interact with the frontend.

### 4. Migrate Smart Contracts
`$ truffle migrate --reset`

### 5. Mint DAI
`$ node ./mint-dai/dai.js`

### 6. Run Frontend Application
In a separate CMD prompt/terminal run:
`$ npm start`

### 6. (Optional) Test Smart Contracts
`$ truffle test`
