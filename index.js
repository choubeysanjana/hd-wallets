const bip39 = require('bip39');
const hdkey = require('hdkey');
const bitcoin = require('bitcoinjs-lib');

// Generate the master mnemonic key
const mnemonic = bip39.generateMnemonic();

// Derive the master seed from the mnemonic key
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create a HD wallet instance
const hdWallet = hdkey.fromMasterSeed(seed);

// Specify the derivation path and number of wallets
const derivationPath = "m/44'/0'/0'/0"; 
const numWallets = 5; 

for (let i = 0; i < numWallets; i++) {
  // Derive the child key
  const childKey = hdWallet.derive(derivationPath + '/' + i);

  // Generate the address and private key
  const address = bitcoin.payments.p2pkh({ pubkey: childKey.publicKey }).address;
  const privateKey = childKey.privateKey.toString('hex');

  // Output the address and private key
  console.log('Wallet', i + 1);
  console.log('Address:', address);
  console.log('Private Key:', privateKey);
  console.log('-----------------------');
}

