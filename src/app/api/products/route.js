import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export const GET = async (req) =>{
  const products = await dbConnect('products').find().sort({createdAt:-1}).toArray();
  return NextResponse.json(products)
  
}