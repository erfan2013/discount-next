import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async ({ data, image }) => {
  if (!image) {
    throw new Error("image is required");
  }
  if (!data.name) {
    throw new Error("name is required");
  }
  if (!data.slug) {
    throw new Error("slug is required");
  }
  const newID = doc(collection(db, `ids`)).id;
  const imageRef = ref(storage, `categories/${newID}`);
  await uploadBytes(imageRef, image);
  const imageURL = await getDownloadURL(imageRef);

  await setDoc(doc(db, `categories/${newID}`), {
    ...data,
    id: newID,
    image: imageURL,
    timestampCreate: Timestamp.now(),
  });
};
