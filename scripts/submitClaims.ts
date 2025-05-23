import axios from "axios";
import { faker } from "@faker-js/faker";
import FormData from "form-data";
import fs from "fs";
import path from "path";

// Get a list of files in the assets folder
const assetsDir = path.resolve(__dirname, "assets");
const assetFiles = fs.readdirSync(assetsDir);

const urls = [
  "https://www.youtube.com/watch?v=laYQFi5LrZA",
  "https://www.youtube.com/watch?v=qVlY-8VLU_o",
  "https://www.youtube.com/watch?v=bZK-MmJp4qo",
  "https://www.spiegel.de/kultur/kino/a-quiet-place-tag-eins-eine-katze-als-star-im-horrorfilm-a-019c591f-ba27-48f9-9172-8ffd2822a00b",
  "https://www.spiegel.de/ausland/wahl-in-frankreich-joann-sfar-ueber-franzoesische-juden-zwischen-links-und-rechtsextremisten-a-70f8b087-8f3e-4e8d-a1cc-8d988ec93b68",
  "https://www.bild.de/unterhaltung/stars-und-leute/anne-will-nach-ihrem-therapiegestaendnis-ist-sie-frisch-verliebt-668680f0db78b242a127aa7d",
  "https://www.zeit.de/politik/ausland/2024-07/nahostkonflikt-israel-hamas-waffenruhe-usa",
  "https://www.zeit.de/politik/deutschland/2024-07/sabine-doering-staatssekretaerin-foerdergeld-affaere-bildungsministerium-klage",
  "https://www.golem.de/news/kien-mutmasslich-meistverspaetetes-videospiel-erscheint-endlich-2407-186758.html",
  "https://tanstack.com/query/v4/docs/framework/vue/guides/optimistic-updates",
  "https://www.instagram.com/reel/C9CsLJHiALR/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/C9CpoFmMwAj/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/CwlGkjypltC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.bild.de/politik/inland/ueber-2000-neue-vorschriften-regierung-loest-buerokratie-beben-aus-668656415a44e9705a01bebe",
  "https://www.bild.de/unterhaltung/stars-und-leute/amira-poche-nach-paerchen-premiere-ich-kann-und-will-es-nicht-allen-recht-machen-66878fcd039b8f0a7cd70260",
  "https://www.tiktok.com/@widerstand50/photo/7386178512782150944",
  "https://www.tiktok.com/@mrmahlangu70/video/7380192870373870865?_r=1&_t=8ngDzmtWSQr",
  "https://mobile.x.com/PoppinCoco/status/1800586246793941210",
  "https://www.facebook.com/reel/430593113271563",
  "https://www.facebook.com/story.php?story_fbid=pfbid0BEW6Z6R3AJMMxSgj3w1NkaL97tHYzEgRioytuawQ6nVQJrK1s86hWV9t5N36ts7Bl&id=100067104563692&paipv=0&eav=AfZhwf2UB9HalClE9ODVvvg5KhNRuZzjY8gAlD1OfPyIEswhsd6g-nNvaBW4uZlE_rY&_rdr",
  "https://twitter.com/wideawake_media/status/1797229405611122702",
  "https://www.facebook.com/hansgeorg.giese.5/videos/1453070538650605",
  "https://www.facebook.com/hansgeorg.giese.5/videos/1453070538650605",
  "https://t.me/rabbitresearch/14902",
  "https://www.facebook.com/hansgeorg.giese.5/videos/1453070538650605",
  "https://x.com/AdameMedia/status/1803719819587469353",
  "https://www.facebook.com/AfDHochsauerlandkreis/posts/pfbid0CnbW9UPtzXamrVcfJ5xKhkACdWy8Jzxjsvg2m7kq6MKAgukamTwHKD1Hj87YkGEal?__cft__[0]=AZU3mw0BFFX7X4merOOPvE9-pcZ5SrTOld61hGKkNn0dA8TInCJ8syMG6PbQ-pY8fiDJZsraOmwHB3zkXGiuTN33OEZHTx2pBhvpfPBtBJrfnFcCUZKzcqNXGf_xPZW_fkXPICO-QSxEIK7LszVAlJJJ68bIBwvMSJ6dFBlpJ7pfxaRR81aosrlBaHYswsf272QZM4F4EWi6NHjZK_EyyeNOZ486cW7zTzLwbPy-sl3GUdcvIenQ1k4dpKNx19-7xWI&__tn__=%2CO%2CP-R",
  "https://www.tiktok.com/@markusbrunetto/video/7379489537568804129",
  "https://www.facebook.com/permalink.php?story_fbid=pfbid04qqGsbVY8GtZwQ5rJrVssLEHruKwZKscKuGn8mAG6e4daz6y7JtCnmedzB6tm5Tkl&id=100013597696023"
];

// Generate dummy data for the fields
const generateDummyData = () => {
  const files: string[] = [];

  const genDummyFile = () => {
    const randomFile = faker.helpers.arrayElement(assetFiles);
    files.push(randomFile);
    return files.length - 1;
  };

  const generateDummyOrigin = () => {
    const origin = { url: undefined, fileIndex: undefined };
    if (faker.datatype.boolean()) {
      origin.url = faker.helpers.arrayElement(urls) as never;
      if (faker.datatype.boolean()) {
        origin.fileIndex = genDummyFile() as never;
      }
    } else {
      origin.fileIndex = genDummyFile() as never;
    }
    return origin;
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
const uploadDummyData = async (environment: string, numberOfClaims: number) => {
  let url;
  if (environment === "local") {
    url = "http://app.fafo.localhost:8000/api/v1/submission";
  } else if (environment === "staging") {
    url = "http://dev-app.faktenforum.org/api/v1/submission";
  } else {
    console.error("Invalid environment. Use 'local' or 'staging'.");
    return;
  }

  for (let i = 0; i < numberOfClaims; i++) {
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

// Command line argument processing
const environment = process.argv[2];
const numberOfClaims = parseInt(process.argv[3], 10) || 50; // Default to 50 if not provided

uploadDummyData(environment, numberOfClaims);
