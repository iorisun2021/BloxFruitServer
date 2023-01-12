import mongoose from "mongoose";
const { Schema } = mongoose;

const fruitSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    dollar: {
      type: String,
      trim: true,
    },
    robux: {
      type: String,
      trim: true,
    },
    availableLevel: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    generalIformation: {
      Rarity: "",
      Type: "",
      StockChance: "",
      SpawnChance: "",
    },
    moveSet: {
      Name: "",
      Description: "",
      Type: "",
      DamageRanking: "",
      Mastery: "",
    },
    combos: {
      type: String,
      trim: true,
    },
    Trivia: {
      type: String,
      trim: true,
    },
    image: {
      public_id: "",
      url: "",
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Fruit", fruitSchema);
