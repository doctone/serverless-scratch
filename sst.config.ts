/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input: { stage?: string }) {
    return {
      name: "serverless-scratch",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});
