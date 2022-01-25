require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food charge renew spider clutch grace infant slot gather'; 
let testAccounts = [
"0x88315da71b39ee40fb4f311d87392a198ee201f8a106cdf61996edf190ad511b",
"0xe28271ee7367a7c21a6e4c8cb03a39154402fd1bea88c2c4587092b6945b4da8",
"0x4725663d0e08935fae3c2713a179d923a0873e020ea66b99a188901e87578a49",
"0x0616cb4e2ad6b24c5ea1902331beb3f6081996ac633c9e0be3c79897375d3de6",
"0x54de3985f2ecfe06d775a2d651d7dc6e84e1c7eae710e389057ef98917bf4c93",
"0x5238a37104309c373e28f2c09462fd53a714814839413590345bd650ad123904",
"0x867ae803832cc45bf8450dc0555b7804b843b4c26e691cdd6f9ae973c254bc0b",
"0xd2963f6da268557911f86e0bcb2140e76ad2aed40e4490f9c7b8396ebdf33694",
"0x9292ee456cde4e75e9bd6964c40f3fe167ea1fc704ee1d3a3a191af786b918ab",
"0x57c490d2f27c665f2e51e31bf55ccb48c22cd9ed17b3cbbe22c84a644ddb0699"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

