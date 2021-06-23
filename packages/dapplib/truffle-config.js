require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name regret maze coin hunt cover army genuine'; 
let testAccounts = [
"0x3280d2b5c58b12f471cb6fb50d93704993e3bd5549be752e9fc2af501ba6b0d8",
"0xefd3a9ada6a076b53c121f5bb454481a47883042320d3c6511e08774e5eca5dd",
"0x612223f5ebccbd4826ec5ef99c35263acdc504f32827dce559f49d73dfa2df81",
"0x095cf2d3d26d1d08ea89eefa14af2debbdb731230531945d0fe561dc0aa1c9e2",
"0x6d2273c709d8b5a0350cfc684f75f09c277af0b8b6171213daeef679acd41be1",
"0x210a2c3fc1d95b8f2b9c737789e2182f7e45c4d41d5b76b0e26b254583f9327f",
"0x746f614dcd0446f923736f7a7e38c298bf96a8ef61b1b65593255eb293dba36c",
"0x438ce592d110a8586e07b6dc57fa3ceae8e64c3bfd7bc06faee401cc4ea5b47a",
"0x71ee2cabad8a6a044d51b9c2f2530acfcf2c68db0f7956866c14458083c20271",
"0x6dcf36a06ea7680d38af29ca383caddc8dbd568c3e1021c6586f1c0b2a13e11b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

