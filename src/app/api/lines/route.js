import { NextResponse } from "next/server";
const { sequelize, connectDB } = require("../../../models/db.js");
const { Line, syncDB } = require("../../../models/model.js");

export async function POST(req) {
  return NextResponse.json({
    count: process.env.PROD_DATABASE_NAME,
  });
}
