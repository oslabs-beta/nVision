import Favorite from "@/app/models/FavoritesModel";
import { connectToDB } from "@/utils/dbConnect";

export async function POST(request: Request, { params }: { params: { name: string } }) {
    try {
        await connectToDB();
        const newFavorite = new Favorite({name: params.name})
        await newFavorite.save();
        return new Response(JSON.stringify(newFavorite), { status: 201 });
    } catch(err) {
        return new Response("Failed to add to favorites", { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { name: string } }) {
    try {
        await connectToDB();
        const deleted = await Favorite.findOneAndDelete({name: params.name});
        return new Response(JSON.stringify(deleted), { status: 200 });
    } catch(err) {
        return new Response("Failed to remove from favorites", { status: 500 });
    }
}