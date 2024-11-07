/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "notes",
      providers: {
        aws: {
          profile: input.stage === "production" ? "HullenHaus-Prod" : "HullenHaus-Dev"
        }
      },      
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});
