pragma solidity ^0.4.18;

// Related to: LogOfDependantContract.sol
// https://github.com/runebaseproject/runebasejs/issues/4

contract LogOfDependantContractChild {
  event LogOfDependantContractChildEvent(string data);

  function emitFoo() public {
    LogOfDependantContractChildEvent("Foo!");
  }
}
