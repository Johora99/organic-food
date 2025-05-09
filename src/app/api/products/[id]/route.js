import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) =>{
  const {id} = await params;
  const query = {_id : new ObjectId(id)}
  const product = await dbConnect('products').findOne(query)
  return NextResponse.json(product)
}