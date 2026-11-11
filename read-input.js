import { readFile } from "node:fs/promises";

export async function readMyFile(filePath) {
    try {
        const data = await readFile(filePath, "utf-8");

        console.log("Logging file content...");
        console.log(data);
    } catch (error) {
        console.error("Error reading file: ", error.message);
    }
}



