const Bridge = artifacts.require("Bridge");
const TokenEth = artifacts.require("TokenEth");
const TokenBsc = artifacts.require("TokenBsc");

// kovan and bscTest

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(TokenEth);
  const tokenEth = await TokenEth.deployed();

  await deployer.deploy(TokenBsc);
  const tokenBsc = await TokenBsc.deployed();

  await deployer.deploy(Bridge, tokenEth.address, tokenBsc.address);
  const bridge = await Bridge.deployed();

  const tx = await tokenEth.mint(
    "0x6599cA2767Fa78bE271ef85557E755C6687Ee3Ca",
    web3.utils.toWei("10")
  );

  console.log(tx);

  console.log(
    `balance account: ${await tokenEth.balanceOf(
      "0x6599cA2767Fa78bE271ef85557E755C6687Ee3Ca"
    )}`
  );

  await tokenEth.transferirAdmin(bridge.address);
  await tokenBsc.transferirAdmin(bridge.address);
};
