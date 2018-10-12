import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Runebase } from "./Runebase"
import { Contract } from "./Contract"

describe("Runebase", () => {
  const runebase = new Runebase(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = runebase.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      runebase.contract("test/contracts/Unknown.sol")
    })
  })
})
