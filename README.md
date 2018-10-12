The RUNEBASE JavaScript library for Smart Contract development.

See [documentation](https://runebaseproject.github.io/runebasejs-doc/).

See [中文 API 文档](https://runebaseproject.github.io/runebasejs-doc-cn/).

See [companion tutorial](https://github.com/runebaseproject/runebasebook/blob/master/en/part2/erc20-js.md).

# Install

```
npm install runebasejs
```

This is a sample code snippet that transfer ERC20 tokens:

```js
import {
  RunebaseRPC,
} from "runebasejs"

const repoData = require("./solar.json")
const runebase = new Runebase("http://runebase:test@localhost:3889", repoData)

const myToken = runebase.contract("zeppelin-solidity/contracts/token/CappedToken.sol")

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  await tx.confirm(3)
  console.log("transfer confirmed")
}
```

The [full source code](https://github.com/runebaseproject/runebasebook-mytoken-runebasejs-cli).

> This example uses async/await (supported natively by Node 8+).

# Running Tests

```
docker run -it --rm \
  --name runebasejs \
  -v `pwd`:/dapp \
  -p 5889:3889 \
  hayeah/runebaseportal
```

Enter into container:

```
docker exec -it runebasejs sh
```

Generate initial blocks:

```
qcli generate 600

qcli getbalance

2000000.00000000
```

Deploy test contracts:

```
sh deploy-test-contracts.sh
```

Build and run tests:

```
npm build
npm run test
```
