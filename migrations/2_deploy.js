const Valut = artifacts.require("Valut");

module.exports = function (deployer, accounts) {
  deployer.deploy(Valut, 30);
};
