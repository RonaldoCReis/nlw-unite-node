import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: 'dc9dc9ec-2eb5-4c7b-9756-60f49dc056f4',
      title: 'Unite Summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
      slug: 'unite-summit',
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});
