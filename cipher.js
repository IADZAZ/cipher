// Write class below
class ShiftCipher {
    constructor(shiftNum) {
        this._shiftNum = shiftNum;
        this._alpha = "abcdefghijklmnopqrstuvwxyz";
    }

    // ** Note all non-[A-z] characters are not encrypted or decrypted **//

    // encrypt method
    // shift letters forward by shiftNum
    // returns all cap encoded string
    encrypt(str) {
        // sanitize input
        if (typeof str !== 'string') {
            throw Error('This is not a string, please enter a string.');
        }

        // set string to uppercase
        let encoded = '';

        // iterate over string
        for (let char of str.toLowerCase()) {

            // charI = index of matched alpha letter
            let charI = this._alpha.indexOf(char);

            if (charI > -1) {
                if ((charI + this._shiftNum) > 25) {
                    // loop alphabet by offset
                    charI = (charI + this._shiftNum) - 26;
                    encoded += this._alpha[charI];
                } else {
                    // assign alphabet char by offset
                    encoded += this._alpha[charI + this._shiftNum];
                }
            } else {
                // not a letter
                encoded += char;
            }
        }
        // return all uppercase
        return encoded.toUpperCase();
    }

    // decrypt method
    // shift letters back by shiftNum
    // returns all lower decoded string
    decrypt(str) {
        // sanitize input
        if (typeof str !== 'string') {
            throw Error('This is not a string, please enter a string.');
        }

        // set string to uppercase
        let decoded = '';

        // iterate over string
        for (let char of str.toLowerCase()) {

            // charI = index of matched alpha letter
            let charI = this._alpha.indexOf(char);

            if (charI > -1) {
                if ((charI - this._shiftNum) < 0) {
                    // loop alphabet by offset
                    charI = 26 - (this._shiftNum - charI);
                    decoded += this._alpha[charI];
                } else {
                    // assign alphabet char by offset
                    decoded += this._alpha[charI - this._shiftNum];
                }
            } else {
                // not a letter
                decoded += char;
            }
        }
        // return all uppercase
        return decoded;
    }
}

let x = new ShiftCipher(1);

console.log(x.encrypt('Z'));

//x.encript('aBC d123efGhIjklm nop09!<>qr stuvwxyz'); 


module.exports = ShiftCipher;