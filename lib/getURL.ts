import { storage } from "@/appwrite";

export const getURL = async (image: Image) => {
    const url = storage.getFilePreview(image.bucketId, image.fileId);
    return url;
}
