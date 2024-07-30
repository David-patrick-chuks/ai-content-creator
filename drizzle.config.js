/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://aicontentdb_owner:CTilaFU74IWN@ep-solitary-sea-a5d0lsma.us-east-2.aws.neon.tech/AI-Content_Generator?sslmode=require',
    }
  };