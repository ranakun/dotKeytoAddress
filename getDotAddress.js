const {Keyring} = require("@polkadot/keyring");

async function getDotAddressFromGroupKey(groupKey) {
    try {
        const keyring = new Keyring({type: 'ed25519'});
        const address = keyring.encodeAddress("0x" + groupKey,0)
        console.log(`Public Key: 0x${groupKey}`);
        console.log(`Address: ${address.toString()}`);
    } catch (err) {
        console.log(err);
    }
  }

  getDotAddressFromGroupKey("46ebddef8cd9bb167dc30878d7113b7e168e6f0646beffd77d69d39bad76b47a")
