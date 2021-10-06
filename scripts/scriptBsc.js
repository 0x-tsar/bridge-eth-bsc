const Bridge = artifacts.require('Bridge')
const TokenEth = artifacts.require('TokenEth')
const TokenBsc = artifacts.require('TokenBsc')

module.exports = async () => {
  // const networkId = await web3.eth.net.getId()

  try {
    const tokenEth = await TokenEth.deployed()
    const tokenBsc = await TokenBsc.deployed()
    const bridge = await Bridge.deployed()

    const account = await web3.eth.getAccounts()
    console.log(account)

    let myBalance = await tokenEth.balanceOf(account[0])
    console.log(myBalance)

    bridge.events.transferencia(
      {
        fromBlock: 0, // all the blocks
        // fromBlock: "latest", //from this time on
      },
      function (error, event) {
        const from = event.returnValues.from
        const to = event.returnValues.to
        const amount = event.returnValues.amount
        const method = event.returnValues.method

        console.table(
          ['from', from],
          ['to', to],
          ['amount', amount],
          ['method', method]
        )
      }
    )
  } catch (error) {
    console.log(error)
    console.log('ERRO!')
  }
}
