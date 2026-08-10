//ek config krke folder mei file bnayenge conf.js krke.
//this is a productionlevel practice followed everywhere.
const conf = { 
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
    //fayda yeh hoga ki isme string milne ki surity rhegi, aur thoda sa systematic milega.



}

export default conf

//kya hota hai ki har baar:  console.log(import.meta.env.VITE_APPWRITE_URL); aise krke use krne is not good practice.
//kabhi load nhi hua yaa error aa gya toh bahut difficult hota hai.
//toh hum saare variables ko ek jagah laake export krr denge.
//actually .env file ke andar values must be in string, but kabhi kabhi humein agar "" ke andar nhi likhe hai toh wo uso numbers treat krega and problems aayengi.
