import mongoose from "mongoose";
import Favorite from "@/app/models/FavoritesModel";
import { connectToDB } from "@/utils/dbConnect";

export async function GET(request: Request) {
    try {
        await connectToDB();
        const favorites = await Favorite.find();

        return new Response(JSON.stringify(favorites), { status: 200 })
    } catch(err) {
        return new Response("Failed to get favorites", { status: 500 });
    }
}
