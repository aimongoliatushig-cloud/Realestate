#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.argv = [process.execPath, "next", "build"];

require("next/dist/bin/next");
