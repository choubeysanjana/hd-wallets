const HDKey = require('hdkey');
const bip39 = require('bip39');

// Define the master mnemonic key
const mnemonic = 'your mnemonic phrase goes here';

// Define the HD path patterns for generating multiple wallets
const hdPaths = [
  "m/44'/0'/0'/0",    // HD Path 1
  "m/44'/0'/1'/0",    // HD Path 2
  "m/44'/0'/2'/0",    // HD Path 3
  "m/44'/0'/3'/0",    // HD Path 4
  "m/44'/0'/4'/0",    // HD Path 5
  "m/44'/0'/5'/0",    // HD Path 6
];

// Function to generate wallets for multiple HD paths
function generateWallets() {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const masterKey = HDKey.fromMasterSeed(seed);

  for (const hdPath of hdPaths) {
    const childKey = masterKey.derive(hdPath);
    const address = childKey.publicKey.toString('hex');
    const privateKey = childKey.privateKey.toString('hex');

    console.log(`HD Path: ${hdPath}`);
    console.log(`Address: ${address}`);
    console.log(`Private Key: ${privateKey}`);
    console.log('------------------------');
  }
}

// Call the function to generate the wallets
generateWallets();

