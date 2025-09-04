import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey: string;

    /**
     * Initializing the Secret Key
     */
    constructor() {
        // this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY: "";

        if(process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error("Please provide the Secret Key while starting execution.");
        }
    }

    /**
     * This method provides encrypted data from the string
     * @param data 
     * @returns encryptedData
     */
    public encryptData(data: string) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString(); // The second parameter is the secret/secure/salt key is used to encrypt data. This key will be used to decrypt data as well
        console.log(encryptedData);
        return encryptedData;
    }

    /**
     * This method provides decrypted data in String format
     * @param encData 
     * @returns decryptedData
     */
    public decryptData(encData: string) {
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }
}