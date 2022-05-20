interface Ingredients {
  ingredient: string;
  amount: number;
  unit: string;
}

interface Comments {
  comment: string;
  name: string;
  createdAt: Date;
}

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  timeInMins: number;
  ratings: Array<number>;
  category: Array<string>;
  ingredients: Array<Ingredients>;
  instructions: Array<string>;
  comments: Array<Comments>;
}
