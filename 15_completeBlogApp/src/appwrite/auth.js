//hum ek folder hi use krr lenge appwrite ka, and usme saare services jo appwrite ke use krenge wo sab rhega.
import conf from '../conf.js'

import {Client, Account, ID} from "appwrite"

export class AuthService {
    client =  new Client();
    account;

    //object bna hai AuthServices ka toh by default ek constructor bhi call hoyega.
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }
    //hum ek method bnayenge jisme appwrite ki services ko use krenge.
    //this will be like a wrapper, jo under the hood appwrite firebase jo bhi use krwayega, and yeh async hoga as per the documentation.

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name) //documentations say ki first parameter should be a unique id.

            if (userAccount) {
                //call another method.
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }



    async login({email, password}){
        try{
            return await this.createEmailSession(email, password);

        } catch (error){
            throw error;
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error);
            
        }
        return null; //if trycatch method mei problem aaya toh null return toh hoga hi, if account not found waali cheezon pe.
    }

    //delete session is actually logout.
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error);
            
        }
    }
}

const authService = new AuthService()

//export default AuthService //class bna ke export krr diye.
//ab iss class ko jo use krega usko object bnana padega, toh kyo na mai hi object bna ke export krr du.

export default authService;

//ab object se saari services ki access hai, like .logout()

//hence this is a generic authentication code which can be used in any projects we need to build, we can use the same code.