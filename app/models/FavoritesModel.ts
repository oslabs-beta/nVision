import { Schema, model, models } from "mongoose";

interface Favorite {
    name: string;
}

const FavoriteSchema = new Schema<Favorite>({
    name: String
});

const Favorite = models.Favorite || model<Favorite>('Favorite', FavoriteSchema);

export default Favorite;
