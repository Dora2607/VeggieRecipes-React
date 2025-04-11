import axios from "axios";
const apiKey = "cd3e851521524b1db8981bdfe1cecee3";
const apiEndpoint = "https://api.spoonacular.com/recipes";


export const fetchRecipes = async (
  diet = "vegetarian",
  type,
  query,
  offset = 0,
  number = 10
) => {
  const validDiets = ["vegetarian", "lacto-vegetarian", "ovo-vegetarian", "vegan"]; 


  if (!validDiets.includes(diet)) {
    console.error(`Dieta non valida: ${diet}`);
    return { results: [], error: `Invalid diet: ${diet}` }; 
  }
  try {
    const response = await axios.get(`${apiEndpoint}/complexSearch`, {
      params: {
        apiKey: apiKey,
        diet: diet,
        type: type|| undefined,
        query: query || undefined,
        number: number,
        offset: offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.response) {
      if (error.response.status === 402) {
        return { results: [], error: "Payment Required: Please check your API key or subscription." };
      }
    }
    return { results: [], error: error.message };
  }
};

export const fetchRecipe = async (id) => {
  try {
    const response = await axios.get(`${apiEndpoint}/${id}/information`, {
      params: {
        apiKey: apiKey,
        includeNutrition: false,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if( error.response.status === 404){
        return { results: [], error: "Recipe not found" };
      }
    }
    throw new Error(error.message || "Something went wrong");
  }
};
