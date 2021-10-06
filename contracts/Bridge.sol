// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import "./TokenEth.sol";
import "./TokenBsc.sol";

contract Bridge {
  TokenEth tokenEth;
  TokenBsc tokenBsc;

  constructor(TokenEth _tokenEth, TokenBsc _tokenBsc) {
    tokenEth = _tokenEth;
    tokenBsc = _tokenBsc;
  }

  event transferencia(address from, address to, uint amount, string method);

  function ethToBsc(address _to, uint _amount) external{
    //aprove this contract first on code  
    tokenBsc.burn(_to, _amount);
    tokenEth.mint(_to, _amount);

    emit transferencia(msg.sender, _to, _amount, "ethToBsc");
  }
  
  function bscToEth(address _to, uint _amount) external{
    //aprove this contract first on code  
    tokenEth.burn(_to, _amount);
    tokenBsc.mint(_to, _amount);

    emit transferencia(msg.sender, _to, _amount, "bscToEth");
  }
  
}
