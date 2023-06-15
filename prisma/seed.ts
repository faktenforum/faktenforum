import { FileType, PrismaClient, ResourceType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const schulkinder_check = await prisma.claim.create({
    data: {
      tags: ["Ukraine"]
    }
  });

  const schulkinder_resource = await prisma.checkableResource.create({
    data: {
      originalUrl: "https://www.zeit.de/gesellschaft/schule/2023-05/schule-gefluechtete-kinder-fehlende-plaetze-ukraine",
      description: "Angeblich warten 4000 geflüchtete Kinder in Deutschland auf einen Schulplatz",
      claim: {
        connect: {
          id: schulkinder_check.id
        }
      },
      type: ResourceType.OTHER
    }
  });

  const schulkinder_screenshot_zeit = await prisma.file.create({
    data: {
      path: "5292bb15-c531-4e8f-9a5e-81e6b9cbc592.png",
      type: FileType.IMAGE,
      md5: "a971eec6561fb54e5a084ed35f5af116",
      transcription:
        "4.000 geflüchtete Kinder warten in Deutschland auf Schulplatz \nWeil es nicht genug Schulplätze gibt, werden 4.000 geflüchtete Kinder derzeit nicht unterrichtet. In Berlin und Nordrhein-Westfalen sind die Wartelisten besonders lang. ",
      CheckableResource: {
        connect: {
          id: schulkinder_resource.id
        }
      }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
