export const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cakefactory");
    formData.append("folder", "products");

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzdzhuebl/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    if (!res.ok) {
        const error = await res.text();
        console.error("Cloudinary error:", error);
        throw new Error("Error subiendo imagen a Cloudinary");
    }

    const data = await res.json();

    return data.secure_url as string;
};
