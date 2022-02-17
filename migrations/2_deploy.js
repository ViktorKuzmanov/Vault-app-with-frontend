const Valut = artifacts.require("Valut");

module.exports = function (deployer, accounts) {
  deployer.deploy(Valut, 30, { from: "0x06214f2E1e1896739D92F3526Bd496DC028Bd7F9", value: "1000000000000000000" });
};
