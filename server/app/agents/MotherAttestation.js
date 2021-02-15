/*
    data structure
    - firstname
    - lastname
    - cni
    - typeCni
    - birthday
    - nationality
 */

class MotherAttestation{
    constructor(firstName, lastName, cni, typeCni, birthday){
        this.firstName= firstName;
        this.lastName = lastName;
        this.cni = cni;
        this.typeCni = typeCni;
        this.birthday = birthday;
        this.nationality = nationality;
        this.locality = this.locality;
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