const { SHA256 } = require('crypto-js');
const elliptic = require('elliptic');
const ec = elliptic.ec('secp256k1');

module.exports = {
    generatePair : ()=>{
        const keypair = ec.genKeyPair();
        return {
            publicKey: keypair.getPublic('hex'),
            private: keypair.getPrivate('hex')
        }
    },
    hashExtrait: (fatherPublickey, motherPublicKey, hospitalPublicKey)=>{
        return SHA256(
            fatherPublickey+
            motherPublicKey+
            hospitalPublicKey
        ).toString()
    }
}

