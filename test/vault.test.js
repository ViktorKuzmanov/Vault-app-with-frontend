const Vault = artifacts.require("Vault.sol")

contract('Vault', ([deployer]) => {

    let vaultContract

    beforeEach(async () => {
        const secondsForUpkeepToRun = 30;
        vaultContract = await Vault.new(secondsForUpkeepToRun)
    })

    describe('deposit 10 ether from account 0', () => {
        // deposit
        beforeEach(async () => {
            await vaultContract.deposit({ from: deployer , value: "10000000000000000000"})
        })

        it('should have balance of 10 ether', async () => {
            const balanceOfContract = await vaultContract.balanceOfContract()
            console.log("balance of contract after deposit in ether = ", parseInt(balanceOfContract.toString()) / 1e18 )
        })

        it('should have interval of 30 seconds', async () => {
            const interval = await vaultContract.interval()
            console.log("seconds to run upkeep = ", interval.toString())
        })
    })
})