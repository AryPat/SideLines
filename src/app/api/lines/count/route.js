import { NextResponse } from "next/server";
const { sequelize, connectDB } = require("../../../../models/db.js");
const { Line, syncDB } = require("../../../../models/model.js");

export async function POST(req) {
  req = await req.json();

  const data = req.data ? await Line.count(req.data) : await Line.count();

  return NextResponse.json({
    count: data,
  });
}
