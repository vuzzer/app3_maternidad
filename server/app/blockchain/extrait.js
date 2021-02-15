const sha256 = require("crypto-js/sha256");

class Extrait{
    constructor(){
        this.firstName
        this.lastName
        this.birthday
        this.numberExtrait
        this.nationality
        this.cityOfbirth

        /**
         *  signature, fatherPublicKey, motherPublicKey and hospitalPublicKey use to verify signature
         *  of an act of birth
         */
        this.signature
        this.fatherPublicKey
        this.motherPublicKey
        this.hospitalPublicKey     
    }

    hasValidSignature(){
        return(
            this.signature === undefined && verifySignature(this.hash, this.signature, this.fatherPublicKey, this.motherPublicKey, this.hospitalPublicKey)
        )
    }

    _setHash(){
        this.hash = this._calculedHash()
    }

    _calculedHash(){
        return sha256( 
            this.firstName+
            this.lastName+
            this.birthday+
            this.nationality+
            this.numberExtrait+
            cityOfbirth+
            this.signature+
            this.fatherPublicKey+
            this.motherPublicKey+
            this.hospitalPublicKey).toString()
    }

}