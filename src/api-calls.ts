import axios from "axios";

export const generateCountryRecipe = async () => {
    const recipe = await axios.get('http://localhost:8080/openai?recipe_country_of_origin=France&is_lactose_intolerant=false&is_vegan=false&dietary_requirements=');
    console.log(recipe);
}