export interface PizzaData {
    id: number;
    name: string;
    price: number;
    ingredientIds: number[];
}

export interface IngredientData {
    id: number;
    name: string;
}

export const pizzas: PizzaData[] = [
    { id: 1, name: "Godfather", price: 12.12, ingredientIds: [1,2,3] },
    { id: 2, name: "Americana", price: 9.99, ingredientIds: [4,2,3] },
];

export const ingredients: IngredientData[] = [
    { id: 1, name: "Cheese"},
    { id: 2, name: "Pepperoni"},
    { id: 3, name: "Rucola"},
    { id: 4, name: "Blue cheese"},
];
