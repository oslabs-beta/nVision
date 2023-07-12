import { Schema, model } from "mongoose";

interface Favorite {
    name: string;
}

const FavoriteSchema = new Schema<Favorite>({
    name: String
});

const Favorite = model<Favorite>('Favorite', FavoriteSchema);

export default Favorite;
