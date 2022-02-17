// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

contract Valut is KeeperCompatibleInterface {

    address public owner;

    function balanceOfContract() external view returns(uint256) {
        return address(this).balance;
    }

    function deposit() external payable {}

    uint public counter;

    uint public immutable interval;
    uint public lastTimeStamp;

    constructor(uint updateInterval) payable {
      interval = updateInterval;
      owner = msg.sender;
      lastTimeStamp = block.timestamp;

      counter = 0;
    }

    function checkUpkeep(bytes calldata /* checkData */) external override returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        if ((block.timestamp - lastTimeStamp) > interval ) {
            lastTimeStamp = block.timestamp;
            counter = counter + 1;
            payable(address(owner)).transfer(0.1 ether);
        }
        // We don't use the performData in this example. The performData is generated by the Keeper's call to your checkUpkeep function
    }
}

// import "@chainlink/contracts/src/v0.7/KeeperCompatible.sol";

// contract Counter is KeeperCompatibleInterface {
//     /**
//     * Public counter variable
//     */
//     uint public counter;

//     /**
//     * Use an interval in seconds and a timestamp to slow execution of Upkeep
//     */
//     uint public immutable interval;
//     uint public lastTimeStamp;

//     constructor(uint updateInterval) {
//       interval = updateInterval;
//       lastTimeStamp = block.timestamp;

//       counter = 0;
//     }

//     function checkUpkeep(bytes calldata /* checkData */) external override returns (bool upkeepNeeded, bytes memory /* performData */) {
//         upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
//         // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
//     }

//     function performUpkeep(bytes calldata /* performData */) external override {
//         //We highly recommend revalidating the upkeep in the performUpkeep function
//         if ((block.timestamp - lastTimeStamp) > interval ) {
//             lastTimeStamp = block.timestamp;
//             counter = counter + 1;
//         }
//         // We don't use the performData in this example. The performData is generated by the Keeper's call to your checkUpkeep function
//     }
// }