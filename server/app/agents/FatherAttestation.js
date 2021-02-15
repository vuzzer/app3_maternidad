import elliptic from 'elliptic';
const ec = elliptic.ec('secp256k1');

/*
    data structure
    - firstname
    - lastname
    - cni
    - typeCni
    - birthday
    - nationality
 */


class FatherAttestation{
    constructor(){
        this.firstName
        this.lastName
        this.cni
        this.typeCni
        this.birthday
        this.nationality
        this.locality
        this._setGeneratorKey()
    }

    setAttestation(firstName, lastName, nationality, locality){
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationality = nationality;
        this.locality = locality;
    }

    _setGeneratorKey(){
        const keypair = ec.genKeyPair();
        this.privateKey = keypair.getPrivate();
        this.publicKey = keypair.getPublic();
    }


}