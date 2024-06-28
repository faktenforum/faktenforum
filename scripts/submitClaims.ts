import axios from "axios";
import { faker } from "@faker-js/faker";
import FormData from "form-data";
import fs from "fs";
import path from "path";

// Get a list of files in the assets folder
const assetsDir = path.resolve(__dirname, "assets");
const assetFiles = fs.readdirSync(assetsDir);

// Generate dummy data for the fields
const generateDummyData = () => {
  const files: string[] = [];

  const genDummyFile = () => {
    if (faker.datatype.boolean()) return undefined;
    const randomFile = faker.helpers.arrayElement(assetFiles);
    files.push(randomFile);
    return files.length - 1;
  };

  const generateDummyOrigin = () => {
    return {
      url: faker.datatype.boolean() ? faker.internet.url() : undefined,
      fileIndex: genDummyFile()
    };
  };
  return {
    payload: JSON.stringify({
      notes: faker.lorem.sentence({ min: 10, max: 100 }),
      origins: Array.from({ length: faker.number.int({ min: 0, max: 5 }) }).map(() => generateDummyOrigin())
    }),
    files
  };
};

// Upload dummy data
const uploadDummyData = async () => {
  const url = "http://dev-app.faktenforum.org/api/v1/submission"; // Replace with your actual endpoint

  for (let i = 0; i < 10; i++) {
    const dummyData = generateDummyData();
    const form = new FormData();
    form.append("payload", dummyData.payload);

    dummyData.files.forEach((file) => {
      form.append(`files`, fs.createReadStream(`./assets/` + file), path.basename(file));
    });

    try {
      await axios.post(url, form, {
        headers: form.getHeaders()
      });
    } catch (error) {
      console.error("Error uploading dummy data:", error.message);
    }
  }
};

uploadDummyData();
