//yeh file hi meri major configuration rhegi appwrite ki.
import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service {
    client = new Client();
    databases;
    bucket;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    //hum post bnayenge, ek generic method use krke.
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error);
            
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
        }
    }

    async deletePost({slug}){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
            return false;
        }
    }

    //ab mujhe slug use krke ek yaa multiple documents chahiye.
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                confi.appwriteDatabaseId,
                cong.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
            return flase
        }
    }

    //mujhe sirf wo posts chahiye jinki status active hai
    async getPosts(queries = [ Query.equal("status", "active")]){ //queries multiple di jaa sakti hai, ek poora array hota hai.
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries,
                    

                )
            } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
                return false;
            }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
            return false
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error)
            return false;
        }
    }


    //get file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}


const service = new Service()
// export default Service
export default service;