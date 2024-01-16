import { NextResponse } from "next/server";
const { sequelize, connectDB } = require("../../../models/db.js");
const { Line, syncDB } = require("../../../models/model.js");

export async function POST(req) {
  try {
    await connectDB();
    await syncDB();

    req = await req.json();

    const data = req.data
      ? await Line.findAll(req.data)
      : await Line.findAll();

    return NextResponse.json({
      count: data.length,
      result: data,
    });
  } catch (err) {
    NextResponse.json({
      error: toString(err),
    });
  }
}
