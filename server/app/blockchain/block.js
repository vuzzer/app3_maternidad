
DIFFICULTY = 3

class Block {
    constructor(parentHash, height, blockchain, nonce = sha256(new Date.getTime().toString()).toString() ){
        this.height = height;
        this.blockchain = blockchain;
        this.parentHash = parentHash;
        this.nonce = nonce;
        this.extrait
        this._setHash()
    }

    isRoot(){
        return this.parentHash === 'root'
    }

    isValid(){
        return ( this.isRoot() || this.hash.substr(-DIFFICULTY) === '0'.DIFFICULTY && this.hash === this._calculedHash())
    }

    createChild(){
        const block = new Block(this.hash, this.height + 1, this.blockchain)

    }

    addExtrait(extrait){
        if(!extrait.isValidTransaction()) return;
        this.extrait[extrait.hash] = extrait;
        this._setHash(); 
    }

    isValidExtrait(extrait){
        return extrait.hasValidSignature();
    }

    setNonce(nonce){
        this.nonce = nonce;
        this._setHash();
    }

    _setHash(){
        this.hash = this._calculedHash()
    }

    _calculedHash(){
        return(
            sha256(this.parentHash + this.nonce + this.extrait).toString()
        )
    }


}