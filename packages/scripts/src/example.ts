import { Resource } from "sst";
import { Example } from "@serverless-scratch/core/example";

console.log(`${Example.hello()} Linked to ${Resource.Uploads.name}.`);
