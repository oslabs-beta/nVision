import { Schema, model, models } from "mongoose";

interface Favorite {
    name: object
}

const FavoriteSchema = new Schema<Favorite>({
    name: {
    type: String,
    unique: [true, 'You can only favorite a pokemon once']
    }
});

const Favorite = models.Favorite || model<Favorite>('Favorite', FavoriteSchema);

export default Favorite;
