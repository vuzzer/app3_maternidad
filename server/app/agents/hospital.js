import elliptic from 'elliptic';
const ec = elliptic.ec('secp256k1');

/**
    data structure
    - name : name of hos^pital
    - code : code of hospital 
 */

class Hospital{
    constructor(){
        this.name
        this.code
        this._setGeneratorKey();
    }

    _setGeneratorKey(){
        const keypair = ec.genKeyPair();
        this.privateKey = keypair.getPrivate('hex');
        this.publicKey = keypair.getPublic('hex');
    }

}