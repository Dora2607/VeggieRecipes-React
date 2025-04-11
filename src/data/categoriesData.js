import vegetarian from '../assets/images/vegetarian.jpg';
import lactoVegetarian from '../assets/images/Lacto-Vegetarian.jpg';
import ovoVegetarian from '../assets/images/Ovo-Vegetarian.jpg';
import vegan from '../assets/images/vegan.jpg'

const categories = [
    {
      id: 0,
      name: "Vegetarian",
      description:
        "Excludes meat but includes plant-based foods alongside eggs and dairy products. Offers flexibility and variety, making it accessible for many.",
      benefits: [
        "Rich in fiber and antioxidants",
        "Supports heart health",
        "Reduces environmental impact",
      ],
      image: `${vegetarian}`,
    },
    {
      id: 1,
      name: "Lacto-Vegetarian",
      description:
        "Excludes meat and eggs but allows dairy products like milk, cheese, and yogurt. Ideal for those seeking the benefits of vegetarianism with added calcium and protein.",
      benefits: [
        "Provides essential nutrients like calcium",
        "Easy transition from omnivorous diets",
        "Promotes digestive health",
      ],
      image: `${lactoVegetarian}`,
    },
    {
      id: 2,
      name: "Ovo-Vegetarian",
      description:
        "Excludes meat and dairy but includes eggs. Perfect for individuals looking to add protein through eggs while following a vegetarian lifestyle.",
      benefits: [
        "High in protein from eggs",
        "Helps maintain muscle mass",
        "Suitable for various meal styles",
      ],
      image: `${ovoVegetarian}`,
    },
    {
      id: 3,
      name: "Vegan",
      description:
        "Eliminates all animal-derived products, focusing purely on plant-based foods. A choice often driven by ethical, environmental, and health motivations.",
      benefits: [
        "Promotes animal welfare",
        "Significantly reduces greenhouse gas emissions",
        "Improves weight management and overall health",
      ],
      image: `${vegan}`,
    },
  ];

  export default categories;