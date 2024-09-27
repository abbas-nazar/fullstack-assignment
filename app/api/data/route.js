import { promises as fs } from "fs";

// app/api/route.js 👈🏽

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const fileContent = await fs.readFile(
    process.cwd() + "/app/data.csv",
    "utf8"
  );

  // Split the file content into lines
  const lines = fileContent.split("\n");

  // Convert the lines to JSON with `createdAt` and `fileName`
  const jsonResult = lines.map((line) => {
    const [createdAt, fileName] = line.split(";");
    return { createdAt, fileName };
  });

  return NextResponse.json({ files: jsonResult }, { status: 200 });
}
