import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.roles.create({
    data: {
      name: 'Admin',
      code: 'ADMIN',
      created_by: 0,
      updated_by: 0,
    },
  });
  const client = await prisma.roles.create({
    data: {
      name: 'Client',
      code: 'CLIENT',
      created_by: 0,
      updated_by: 0,
    },
  });

  const superadmin = await prisma.users.create({
    data: {
        email: 'superadmin@terralogic.com',
        username: 'superadmin',
        password: '$2b$10$RoVA8UmqiEFxuXdqF2H7i.oF3ZDrxO.O110FGoMX6U8tS0gbWAYAq',
        description:'This is Super Admin',
        created_by: 0,
        updated_by: 0,
        roles: {
          create: [
            {
              role_id: admin.id,
              created_by: 0,
              updated_by: 0
            }
          ]
        }
    }

  });
  console.info(admin);
  console.info(client);
  console.info(superadmin);
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

// "user:seed":"ts-node --compiler-options {\"module\":\"CommonJS\"} src/prisma/user/seed.ts",

