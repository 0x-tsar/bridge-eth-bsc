// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TokenBsc is ERC20{
  address public admin;

  constructor() ERC20('TOKEN BSC', 'TBSC')  {
    admin = msg.sender; 
  }

function mint(address _to, uint _amount) external {
    require(msg.sender == admin, 'NOT ADMIN');
    _mint(_to, _amount);
  }
  
  function burn(address _to, uint _amount) external {
    require(msg.sender == admin, 'NOT ADMIN');
    _burn(_to, _amount);
  }
  
  function transferirAdmin(address _newAdmin) external{
    require(msg.sender == admin, 'NOT ADMIN');
    admin = _newAdmin;
  }

}


