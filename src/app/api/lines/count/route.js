import { NextResponse } from "next/server";
const { sequelize, connectDB } = require("../../../../models/db.js");
const { Line, syncDB } = require("../../../../models/model.js");

export async function POST(req) {
  connectDB();
  syncDB();
}
