/* ============================================================
   FrNourish — Smart Nutrition & Healthy Eating
   Application Logic & State Management
   ============================================================ */

// ===== Food Database (100+ items) =====
const FOOD_DATABASE = [
    // Fruits
    { name: "Apple", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4, category: "fruit", score: 88, emoji: "🍎" },
    { name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3.1, category: "fruit", score: 82, emoji: "🍌" },
    { name: "Orange", calories: 62, protein: 1.2, carbs: 15, fat: 0.2, fiber: 3.1, category: "fruit", score: 90, emoji: "🍊" },
    { name: "Strawberries (1 cup)", calories: 49, protein: 1, carbs: 12, fat: 0.5, fiber: 3, category: "fruit", score: 94, emoji: "🍓" },
    { name: "Blueberries (1 cup)", calories: 84, protein: 1.1, carbs: 21, fat: 0.5, fiber: 3.6, category: "fruit", score: 95, emoji: "🫐" },
    { name: "Grapes (1 cup)", calories: 104, protein: 1.1, carbs: 27, fat: 0.2, fiber: 1.4, category: "fruit", score: 72, emoji: "🍇" },
    { name: "Watermelon (1 cup)", calories: 46, protein: 0.9, carbs: 12, fat: 0.2, fiber: 0.6, category: "fruit", score: 78, emoji: "🍉" },
    { name: "Mango", calories: 201, protein: 2.8, carbs: 50, fat: 1.3, fiber: 5.4, category: "fruit", score: 76, emoji: "🥭" },
    { name: "Pineapple (1 cup)", calories: 82, protein: 0.9, carbs: 22, fat: 0.2, fiber: 2.3, category: "fruit", score: 80, emoji: "🍍" },
    { name: "Avocado", calories: 240, protein: 3, carbs: 13, fat: 22, fiber: 10, category: "fruit", score: 92, emoji: "🥑" },
    { name: "Kiwi", calories: 42, protein: 0.8, carbs: 10, fat: 0.4, fiber: 2.1, category: "fruit", score: 91, emoji: "🥝" },
    { name: "Pomegranate", calories: 234, protein: 4.7, carbs: 53, fat: 3.3, fiber: 11.3, category: "fruit", score: 89, emoji: "🍎" },

    // Vegetables
    { name: "Broccoli (1 cup)", calories: 55, protein: 3.7, carbs: 11, fat: 0.6, fiber: 5.1, category: "vegetable", score: 97, emoji: "🥦" },
    { name: "Spinach (1 cup cooked)", calories: 41, protein: 5.3, carbs: 7, fat: 0.5, fiber: 4.3, category: "vegetable", score: 98, emoji: "🥬" },
    { name: "Carrot", calories: 25, protein: 0.6, carbs: 6, fat: 0.1, fiber: 1.7, category: "vegetable", score: 90, emoji: "🥕" },
    { name: "Sweet Potato", calories: 103, protein: 2.3, carbs: 24, fat: 0.1, fiber: 3.8, category: "vegetable", score: 91, emoji: "🍠" },
    { name: "Tomato", calories: 22, protein: 1.1, carbs: 5, fat: 0.2, fiber: 1.5, category: "vegetable", score: 88, emoji: "🍅" },
    { name: "Bell Pepper", calories: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1, category: "vegetable", score: 92, emoji: "🫑" },
    { name: "Cucumber", calories: 16, protein: 0.7, carbs: 4, fat: 0.1, fiber: 0.5, category: "vegetable", score: 85, emoji: "🥒" },
    { name: "Kale (1 cup)", calories: 33, protein: 2.9, carbs: 6, fat: 0.6, fiber: 1.3, category: "vegetable", score: 96, emoji: "🥬" },
    { name: "Cauliflower (1 cup)", calories: 27, protein: 2.1, carbs: 5, fat: 0.3, fiber: 2.1, category: "vegetable", score: 93, emoji: "🥦" },
    { name: "Green Beans (1 cup)", calories: 31, protein: 1.8, carbs: 7, fat: 0.1, fiber: 2.7, category: "vegetable", score: 87, emoji: "🫘" },

    // Proteins
    { name: "Chicken Breast (100g)", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, category: "protein", score: 90, emoji: "🍗" },
    { name: "Salmon (100g)", calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, category: "protein", score: 95, emoji: "🐟" },
    { name: "Eggs (2 large)", calories: 143, protein: 13, carbs: 1, fat: 10, fiber: 0, category: "protein", score: 88, emoji: "🥚" },
    { name: "Turkey Breast (100g)", calories: 135, protein: 30, carbs: 0, fat: 1, fiber: 0, category: "protein", score: 92, emoji: "🦃" },
    { name: "Tuna (100g)", calories: 132, protein: 29, carbs: 0, fat: 1, fiber: 0, category: "protein", score: 91, emoji: "🐟" },
    { name: "Shrimp (100g)", calories: 99, protein: 24, carbs: 0.2, fat: 0.3, fiber: 0, category: "protein", score: 89, emoji: "🦐" },
    { name: "Tofu (100g)", calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3, category: "protein", score: 84, emoji: "🧈" },
    { name: "Greek Yogurt (1 cup)", calories: 100, protein: 17, carbs: 6, fat: 0.7, fiber: 0, category: "protein", score: 90, emoji: "🥛" },
    { name: "Cottage Cheese (1 cup)", calories: 206, protein: 28, carbs: 6, fat: 9, fiber: 0, category: "protein", score: 85, emoji: "🧀" },
    { name: "Lentils (1 cup cooked)", calories: 230, protein: 18, carbs: 40, fat: 0.8, fiber: 15.6, category: "protein", score: 93, emoji: "🫘" },
    { name: "Chickpeas (1 cup cooked)", calories: 269, protein: 14.5, carbs: 45, fat: 4.2, fiber: 12.5, category: "protein", score: 88, emoji: "🫘" },
    { name: "Beef Steak (100g)", calories: 271, protein: 26, carbs: 0, fat: 18, fiber: 0, category: "protein", score: 68, emoji: "🥩" },
    { name: "Pork Chop (100g)", calories: 231, protein: 25, carbs: 0, fat: 14, fiber: 0, category: "protein", score: 65, emoji: "🍖" },

    // Grains & Carbs
    { name: "Brown Rice (1 cup)", calories: 216, protein: 5, carbs: 45, fat: 1.8, fiber: 3.5, category: "grain", score: 80, emoji: "🍚" },
    { name: "White Rice (1 cup)", calories: 206, protein: 4.3, carbs: 45, fat: 0.4, fiber: 0.6, category: "grain", score: 55, emoji: "🍚" },
    { name: "Quinoa (1 cup)", calories: 222, protein: 8, carbs: 39, fat: 3.6, fiber: 5.2, category: "grain", score: 91, emoji: "🌾" },
    { name: "Oatmeal (1 cup)", calories: 154, protein: 5.4, carbs: 27, fat: 2.6, fiber: 4, category: "grain", score: 88, emoji: "🥣" },
    { name: "Whole Wheat Bread (1 slice)", calories: 81, protein: 4, carbs: 14, fat: 1.1, fiber: 1.9, category: "grain", score: 72, emoji: "🍞" },
    { name: "White Bread (1 slice)", calories: 79, protein: 2.7, carbs: 15, fat: 0.9, fiber: 0.6, category: "grain", score: 40, emoji: "🍞" },
    { name: "Pasta (1 cup cooked)", calories: 220, protein: 8, carbs: 43, fat: 1.3, fiber: 2.5, category: "grain", score: 55, emoji: "🍝" },
    { name: "Whole Wheat Pasta (1 cup)", calories: 174, protein: 7.5, carbs: 37, fat: 0.8, fiber: 6.3, category: "grain", score: 75, emoji: "🍝" },

    // Dairy
    { name: "Whole Milk (1 cup)", calories: 149, protein: 8, carbs: 12, fat: 8, fiber: 0, category: "dairy", score: 65, emoji: "🥛" },
    { name: "Skim Milk (1 cup)", calories: 83, protein: 8.3, carbs: 12, fat: 0.2, fiber: 0, category: "dairy", score: 78, emoji: "🥛" },
    { name: "Cheddar Cheese (1 oz)", calories: 113, protein: 7, carbs: 0.4, fat: 9, fiber: 0, category: "dairy", score: 55, emoji: "🧀" },
    { name: "Mozzarella (1 oz)", calories: 85, protein: 6, carbs: 0.7, fat: 6, fiber: 0, category: "dairy", score: 60, emoji: "🧀" },
    { name: "Almond Milk (1 cup)", calories: 39, protein: 1, carbs: 3.4, fat: 2.5, fiber: 0.5, category: "dairy", score: 75, emoji: "🥛" },

    // Nuts & Seeds
    { name: "Almonds (1 oz)", calories: 164, protein: 6, carbs: 6, fat: 14, fiber: 3.5, category: "nuts", score: 90, emoji: "🥜" },
    { name: "Walnuts (1 oz)", calories: 185, protein: 4.3, carbs: 4, fat: 18, fiber: 1.9, category: "nuts", score: 92, emoji: "🥜" },
    { name: "Chia Seeds (1 oz)", calories: 138, protein: 4.7, carbs: 12, fat: 9, fiber: 10, category: "nuts", score: 96, emoji: "🌰" },
    { name: "Peanut Butter (2 tbsp)", calories: 188, protein: 8, carbs: 6, fat: 16, fiber: 2, category: "nuts", score: 72, emoji: "🥜" },
    { name: "Cashews (1 oz)", calories: 157, protein: 5, carbs: 9, fat: 12, fiber: 0.9, category: "nuts", score: 78, emoji: "🥜" },
    { name: "Flaxseeds (1 tbsp)", calories: 37, protein: 1.3, carbs: 2, fat: 3, fiber: 1.9, category: "nuts", score: 94, emoji: "🌰" },
    { name: "Sunflower Seeds (1 oz)", calories: 165, protein: 5.5, carbs: 7, fat: 14, fiber: 3.2, category: "nuts", score: 82, emoji: "🌻" },

    // Snacks & Others
    { name: "Dark Chocolate (1 oz)", calories: 170, protein: 2.2, carbs: 13, fat: 12, fiber: 3.1, category: "snack", score: 68, emoji: "🍫" },
    { name: "Popcorn (3 cups air-popped)", calories: 93, protein: 3, carbs: 19, fat: 1, fiber: 3.6, category: "snack", score: 72, emoji: "🍿" },
    { name: "Granola Bar", calories: 193, protein: 4, carbs: 29, fat: 7, fiber: 2, category: "snack", score: 50, emoji: "🍫" },
    { name: "Mixed Trail Mix (1 oz)", calories: 137, protein: 4, carbs: 13, fat: 9, fiber: 2, category: "snack", score: 65, emoji: "🥜" },
    { name: "Hummus (2 tbsp)", calories: 70, protein: 2, carbs: 6, fat: 5, fiber: 1, category: "snack", score: 82, emoji: "🫔" },
    { name: "Protein Bar", calories: 230, protein: 20, carbs: 25, fat: 8, fiber: 3, category: "snack", score: 70, emoji: "💪" },

    // Beverages
    { name: "Green Tea (1 cup)", calories: 2, protein: 0, carbs: 0, fat: 0, fiber: 0, category: "beverage", score: 95, emoji: "🍵" },
    { name: "Black Coffee", calories: 2, protein: 0.3, carbs: 0, fat: 0, fiber: 0, category: "beverage", score: 90, emoji: "☕" },
    { name: "Orange Juice (1 cup)", calories: 112, protein: 1.7, carbs: 26, fat: 0.5, fiber: 0.5, category: "beverage", score: 58, emoji: "🧃" },
    { name: "Smoothie (fruit blend)", calories: 180, protein: 4, carbs: 38, fat: 1, fiber: 4, category: "beverage", score: 75, emoji: "🥤" },
    { name: "Coconut Water (1 cup)", calories: 46, protein: 1.7, carbs: 9, fat: 0.5, fiber: 2.6, category: "beverage", score: 82, emoji: "🥥" },
    { name: "Soda (12 oz)", calories: 140, protein: 0, carbs: 39, fat: 0, fiber: 0, category: "beverage", score: 8, emoji: "🥤" },

    // Fast Food / Common Meals
    { name: "Pizza Slice (Cheese)", calories: 285, protein: 12, carbs: 36, fat: 10, fiber: 2.5, category: "meal", score: 30, emoji: "🍕" },
    { name: "Burger (Classic)", calories: 354, protein: 20, carbs: 29, fat: 17, fiber: 1.3, category: "meal", score: 25, emoji: "🍔" },
    { name: "French Fries (medium)", calories: 365, protein: 4, carbs: 48, fat: 17, fiber: 4, category: "meal", score: 15, emoji: "🍟" },
    { name: "Caesar Salad", calories: 200, protein: 10, carbs: 12, fat: 12, fiber: 3, category: "meal", score: 72, emoji: "🥗" },
    { name: "Grilled Chicken Salad", calories: 250, protein: 30, carbs: 10, fat: 10, fiber: 4, category: "meal", score: 88, emoji: "🥗" },
    { name: "Sushi Roll (6 pcs)", calories: 250, protein: 9, carbs: 38, fat: 7, fiber: 1, category: "meal", score: 65, emoji: "🍣" },
    { name: "Taco (chicken)", calories: 170, protein: 12, carbs: 13, fat: 8, fiber: 1, category: "meal", score: 60, emoji: "🌮" },
    { name: "Burrito Bowl", calories: 450, protein: 25, carbs: 55, fat: 14, fiber: 8, category: "meal", score: 62, emoji: "🌯" },
    { name: "Fried Rice (1 cup)", calories: 238, protein: 5.5, carbs: 35, fat: 8.5, fiber: 1, category: "meal", score: 42, emoji: "🍚" },
    { name: "Grilled Fish with Veggies", calories: 280, protein: 35, carbs: 10, fat: 12, fiber: 4, category: "meal", score: 92, emoji: "🐟" },
    { name: "Vegetable Stir-Fry", calories: 150, protein: 5, carbs: 20, fat: 6, fiber: 4, category: "meal", score: 85, emoji: "🥘" },
    { name: "Paneer Tikka (100g)", calories: 260, protein: 18, carbs: 8, fat: 18, fiber: 1, category: "meal", score: 70, emoji: "🧀" },
    { name: "Dal (1 cup)", calories: 198, protein: 13, carbs: 33, fat: 2, fiber: 8, category: "meal", score: 88, emoji: "🍲" },
    { name: "Dosa (1 plain)", calories: 118, protein: 3, carbs: 18, fat: 4, fiber: 1, category: "meal", score: 62, emoji: "🫓" },
    { name: "Idli (2 pieces)", calories: 78, protein: 2.1, carbs: 17, fat: 0.2, fiber: 0.4, category: "meal", score: 74, emoji: "🫓" },
    { name: "Chapati (1)", calories: 71, protein: 2.7, carbs: 15, fat: 0.4, fiber: 2, category: "grain", score: 75, emoji: "🫓" },
    { name: "Roti (1)", calories: 68, protein: 2.5, carbs: 14, fat: 0.3, fiber: 1.8, category: "grain", score: 76, emoji: "🫓" },
    { name: "Biryani (1 cup)", calories: 350, protein: 15, carbs: 45, fat: 12, fiber: 2, category: "meal", score: 48, emoji: "🍛" },
    { name: "Chole Bhature (1 plate)", calories: 450, protein: 12, carbs: 60, fat: 18, fiber: 5, category: "meal", score: 35, emoji: "🍛" },
    { name: "Palak Paneer (1 cup)", calories: 230, protein: 14, carbs: 10, fat: 16, fiber: 4, category: "meal", score: 78, emoji: "🍛" },
    { name: "Upma (1 cup)", calories: 188, protein: 4.5, carbs: 28, fat: 7, fiber: 3, category: "meal", score: 68, emoji: "🍚" },
    { name: "Poha (1 cup)", calories: 158, protein: 3.5, carbs: 30, fat: 3, fiber: 2.5, category: "meal", score: 72, emoji: "🍚" },
    { name: "Sandwich (Veggie)", calories: 280, protein: 9, carbs: 35, fat: 12, fiber: 4, category: "meal", score: 62, emoji: "🥪" },
    { name: "Wrap (Chicken)", calories: 320, protein: 22, carbs: 30, fat: 12, fiber: 3, category: "meal", score: 70, emoji: "🌯" },
    { name: "Soup (Vegetable)", calories: 90, protein: 3, carbs: 15, fat: 2, fiber: 3, category: "meal", score: 88, emoji: "🍲" },
    { name: "Ice Cream (1 scoop)", calories: 137, protein: 2.3, carbs: 16, fat: 7, fiber: 0.5, category: "snack", score: 20, emoji: "🍦" },
    { name: "Donut", calories: 253, protein: 3, carbs: 31, fat: 14, fiber: 0.7, category: "snack", score: 12, emoji: "🍩" },
    { name: "Cookie (1 large)", calories: 220, protein: 2.5, carbs: 30, fat: 10, fiber: 1, category: "snack", score: 15, emoji: "🍪" },
];

// ===== Recipes =====
const RECIPES = [
    {
        id: 1, name: "Overnight Oats Power Bowl", category: "breakfast", time: 10, difficulty: "Easy",
        tags: ["vegan"], emoji: "🥣",
        calories: 380, protein: 14, carbs: 52, fat: 12,
        ingredients: ["1 cup rolled oats", "1 cup almond milk", "1 tbsp chia seeds", "1/2 banana, sliced", "1 tbsp honey", "Handful blueberries", "1 tbsp almond butter"],
        steps: ["Combine oats, almond milk, and chia seeds in a jar.", "Stir well and refrigerate overnight.", "Top with banana, blueberries, almond butter, and honey.", "Enjoy cold or warm it up!"]
    },
    {
        id: 2, name: "Grilled Chicken & Quinoa Bowl", category: "lunch", time: 25, difficulty: "Medium",
        tags: ["high-protein"], emoji: "🍗",
        calories: 520, protein: 42, carbs: 45, fat: 16,
        ingredients: ["150g chicken breast", "1 cup cooked quinoa", "1/2 avocado", "Cherry tomatoes", "Cucumber", "Lemon dressing", "Fresh herbs"],
        steps: ["Season chicken with herbs, salt, pepper.", "Grill chicken for 6-8 minutes per side.", "Arrange quinoa in bowl, top with sliced chicken.", "Add avocado, tomatoes, cucumber, and drizzle with dressing."]
    },
    {
        id: 3, name: "Salmon with Roasted Vegetables", category: "dinner", time: 30, difficulty: "Medium",
        tags: ["high-protein"], emoji: "🐟",
        calories: 450, protein: 38, carbs: 22, fat: 24,
        ingredients: ["150g salmon fillet", "1 cup broccoli florets", "1 sweet potato, cubed", "Bell peppers", "Olive oil", "Garlic", "Lemon"],
        steps: ["Preheat oven to 200°C (400°F).", "Toss vegetables with olive oil, garlic, salt, pepper.", "Place salmon and veggies on baking sheet.", "Roast 20-25 minutes. Squeeze lemon before serving."]
    },
    {
        id: 4, name: "Green Goddess Smoothie", category: "breakfast", time: 5, difficulty: "Easy",
        tags: ["vegan"], emoji: "🥤",
        calories: 220, protein: 6, carbs: 38, fat: 5,
        ingredients: ["1 cup spinach", "1 banana", "1/2 cup mango", "1 cup almond milk", "1 tbsp flaxseeds", "Ice cubes"],
        steps: ["Add all ingredients to blender.", "Blend on high for 60 seconds.", "Pour into glass and serve immediately."]
    },
    {
        id: 5, name: "Mediterranean Chickpea Salad", category: "lunch", time: 15, difficulty: "Easy",
        tags: ["vegan"], emoji: "🥗",
        calories: 350, protein: 15, carbs: 42, fat: 14,
        ingredients: ["1 can chickpeas", "Cherry tomatoes", "Cucumber", "Red onion", "Feta cheese", "Kalamata olives", "Olive oil & lemon dressing"],
        steps: ["Drain and rinse chickpeas.", "Chop all vegetables.", "Combine in bowl with olives and feta.", "Drizzle with olive oil and lemon, toss well."]
    },
    {
        id: 6, name: "Protein-Packed Egg Muffins", category: "snack", time: 25, difficulty: "Easy",
        tags: ["high-protein", "low-cal"], emoji: "🥚",
        calories: 180, protein: 16, carbs: 4, fat: 11,
        ingredients: ["6 eggs", "Spinach", "Bell pepper, diced", "Onion, diced", "Cheddar cheese", "Salt & pepper"],
        steps: ["Preheat oven to 180°C (350°F).", "Whisk eggs with salt and pepper.", "Divide veggies into greased muffin tin.", "Pour egg mixture over veggies, top with cheese.", "Bake 20 minutes until set."]
    },
    {
        id: 7, name: "Thai Basil Stir-Fry", category: "dinner", time: 20, difficulty: "Medium",
        tags: ["high-protein"], emoji: "🥘",
        calories: 380, protein: 32, carbs: 18, fat: 20,
        ingredients: ["200g chicken or tofu", "Thai basil", "Garlic", "Chili", "Soy sauce", "Bell peppers", "Green beans"],
        steps: ["Heat oil in wok over high heat.", "Stir-fry garlic and chili for 30 seconds.", "Add protein, cook until done.", "Add vegetables, soy sauce, and basil.", "Stir-fry 3-4 minutes, serve with rice."]
    },
    {
        id: 8, name: "Avocado Toast Deluxe", category: "breakfast", time: 10, difficulty: "Easy",
        tags: ["vegan"], emoji: "🥑",
        calories: 320, protein: 10, carbs: 28, fat: 20,
        ingredients: ["2 slices whole wheat bread", "1 ripe avocado", "Cherry tomatoes", "Red pepper flakes", "Lemon juice", "Everything bagel seasoning", "Microgreens"],
        steps: ["Toast bread until golden.", "Mash avocado with lemon juice and salt.", "Spread on toast, top with tomatoes.", "Sprinkle with seasonings and microgreens."]
    },
    {
        id: 9, name: "Lentil Soup", category: "dinner", time: 35, difficulty: "Easy",
        tags: ["vegan", "high-protein"], emoji: "🍲",
        calories: 280, protein: 18, carbs: 42, fat: 4,
        ingredients: ["1 cup red lentils", "Onion", "Carrots", "Celery", "Garlic", "Cumin", "Vegetable broth", "Lemon"],
        steps: ["Sauté onion, carrots, celery in pot.", "Add garlic and cumin, cook 1 minute.", "Add lentils and broth, bring to boil.", "Simmer 25-30 minutes until lentils are soft.", "Season with lemon juice and salt."]
    },
    {
        id: 10, name: "Greek Yogurt Parfait", category: "snack", time: 5, difficulty: "Easy",
        tags: ["high-protein"], emoji: "🥛",
        calories: 250, protein: 20, carbs: 32, fat: 6,
        ingredients: ["1 cup Greek yogurt", "Granola", "Mixed berries", "Honey", "Chia seeds"],
        steps: ["Layer yogurt in a glass.", "Add granola and berries.", "Drizzle with honey and sprinkle chia seeds.", "Repeat layers and enjoy!"]
    },
    {
        id: 11, name: "Paneer Tikka Wrap", category: "lunch", time: 20, difficulty: "Medium",
        tags: ["high-protein"], emoji: "🌯",
        calories: 420, protein: 24, carbs: 35, fat: 22,
        ingredients: ["200g paneer, cubed", "Yogurt marinade", "Bell peppers", "Onion", "Whole wheat wrap", "Mint chutney", "Lettuce"],
        steps: ["Marinate paneer in spiced yogurt for 30 min.", "Grill or pan-fry paneer with peppers and onion.", "Warm the wrap, spread mint chutney.", "Fill with paneer, veggies, and lettuce. Roll tight."]
    },
    {
        id: 12, name: "Banana Oat Energy Bites", category: "snack", time: 15, difficulty: "Easy",
        tags: ["vegan"], emoji: "🍌",
        calories: 120, protein: 4, carbs: 18, fat: 4,
        ingredients: ["1 ripe banana", "1 cup oats", "2 tbsp peanut butter", "1 tbsp honey", "Dark chocolate chips", "Chia seeds"],
        steps: ["Mash banana in bowl.", "Mix in oats, peanut butter, honey.", "Fold in chocolate chips and chia seeds.", "Roll into small balls, refrigerate 1 hour."]
    },
];

// ===== Achievements =====
const ACHIEVEMENTS = [
    { id: "first_meal", name: "First Bite", desc: "Log your first meal", icon: "fa-utensils", condition: (s) => s.totalMeals >= 1 },
    { id: "ten_meals", name: "Meal Master", desc: "Log 10 meals", icon: "fa-award", condition: (s) => s.totalMeals >= 10 },
    { id: "fifty_meals", name: "Nutrition Pro", desc: "Log 50 meals", icon: "fa-crown", condition: (s) => s.totalMeals >= 50 },
    { id: "hydration_hero", name: "Hydration Hero", desc: "Drink 8 glasses of water", icon: "fa-tint", condition: (s) => s.waterToday >= 8 },
    { id: "streak_3", name: "On Fire", desc: "3-day logging streak", icon: "fa-fire", condition: (s) => s.streak >= 3 },
    { id: "streak_7", name: "Week Warrior", desc: "7-day logging streak", icon: "fa-fire-flame-curved", condition: (s) => s.streak >= 7 },
    { id: "streak_30", name: "Monthly Legend", desc: "30-day logging streak", icon: "fa-meteor", condition: (s) => s.streak >= 30 },
    { id: "healthy_day", name: "Clean Eater", desc: "All meals scored 70+", icon: "fa-leaf", condition: (s) => s.allMealsHealthy },
    { id: "first_mood", name: "Mood Tracker", desc: "Log your first mood", icon: "fa-smile", condition: (s) => s.totalMoods >= 1 },
    { id: "bmi_check", name: "Self-Aware", desc: "Check your BMI", icon: "fa-calculator", condition: (s) => s.bmiChecked },
    { id: "recipe_viewer", name: "Chef Explorer", desc: "View 5 recipes", icon: "fa-book-open", condition: (s) => s.recipesViewed >= 5 },
    { id: "compare_foods", name: "Smart Chooser", desc: "Compare foods for the first time", icon: "fa-exchange-alt", condition: (s) => s.foodsCompared >= 1 },
];

// ===== Tips =====
const TIPS = [
    "Start your day with a glass of warm water and lemon for better digestion! 🍋",
    "Eating slowly helps you feel fuller with less food. Try putting your fork down between bites! 🍴",
    "Colorful plates = nutritious plates. Aim for at least 3 colors in every meal! 🌈",
    "Greek yogurt is a great high-protein snack that keeps you satisfied! 🥛",
    "Prep your meals on Sunday to save time and eat healthier all week! 📦",
    "Drinking water before meals can help reduce overeating by up to 22%! 💧",
    "Nuts are an excellent source of healthy fats — but watch portion sizes! 🥜",
    "Swap white rice for brown rice or quinoa for more fiber and nutrients! 🍚",
    "Aim for 25-30g of fiber daily for optimal digestive health! 🥦",
    "Dark leafy greens like spinach and kale are nutrient powerhouses! 🥬",
    "Protein at every meal helps maintain muscle and keeps you full longer! 💪",
    "Try to eat the rainbow — different colored foods provide different vitamins! 🌈",
    "Home-cooked meals are typically much healthier than restaurant food! 🏠",
    "Green tea contains antioxidants that boost metabolism naturally! 🍵",
    "Getting enough sleep improves food choices — aim for 7-9 hours! 😴",
    "Berries are some of the most antioxidant-rich foods you can eat! 🫐",
    "Avocados provide healthy fats that help absorb fat-soluble vitamins! 🥑",
    "Fermented foods like yogurt support gut health and immunity! 🧫",
    "Staying hydrated helps your body distinguish hunger from thirst! 💧",
    "Omega-3 fatty acids from fish reduce inflammation and support brain health! 🐟",
];

// ===== App State =====
let state = {
    user: null,
    meals: [],
    waterLog: [],
    moodLog: [],
    achievements: [],
    streak: 0,
    lastLogDate: null,
    selectedFood: null,
    selectedMealType: "breakfast",
    recipesViewed: 0,
    foodsCompared: 0,
    bmiChecked: false,
    weeklyCalories: [0, 0, 0, 0, 0, 0, 0],
    calorieGoal: 2000,
    proteinGoal: 120,
    waterGoal: 8,
    favoriteFoods: [],
    recentFoods: [],
    plannerSeed: 0,
    plannerData: null,
    lastVisitedPage: "dashboard",
    preferences: {
        reducedMotion: false,
        largeText: false,
        showTips: true,
        particles: true,
    },
};

// ===== Chart Instances =====
let calorieDonutChart, macroChart, weeklyChart, compareChart;

// ===== State Guards =====
function ensureStateIntegrity() {
    state.meals = Array.isArray(state.meals) ? state.meals : [];
    state.waterLog = Array.isArray(state.waterLog) ? state.waterLog : [];
    state.moodLog = Array.isArray(state.moodLog) ? state.moodLog : [];
    state.achievements = Array.isArray(state.achievements) ? state.achievements : [];
    state.favoriteFoods = Array.isArray(state.favoriteFoods) ? state.favoriteFoods : [];
    state.recentFoods = Array.isArray(state.recentFoods) ? state.recentFoods : [];
    state.weeklyCalories = Array.isArray(state.weeklyCalories) && state.weeklyCalories.length === 7
        ? state.weeklyCalories
        : [0, 0, 0, 0, 0, 0, 0];
    state.preferences = {
        reducedMotion: false,
        largeText: false,
        showTips: true,
        particles: true,
        ...(state.preferences || {})
    };
    if (!state.lastVisitedPage) state.lastVisitedPage = "dashboard";
    if (typeof state.plannerSeed !== "number") state.plannerSeed = 0;
    if (!state.plannerData) state.plannerData = null;
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    initParticles();

    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
        if (!state.user) {
            document.getElementById("onboarding-modal").style.display = "flex";
        } else {
            initApp();
        }
    }, 2200);
});

// ===== Particles =====
function initParticles() {
    const container = document.getElementById("particles-bg");
    const colors = ["#10B981", "#3B82F6", "#8B5CF6", "#14B8A6", "#F59E0B"];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 4 + 2;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (Math.random() * 15 + 10) + "s";
        p.style.animationDelay = (Math.random() * 10) + "s";
        container.appendChild(p);
    }
}

// ===== Onboarding =====
function nextOnboardStep(step) {
    document.querySelectorAll(".onboarding-step").forEach(s => s.classList.remove("active"));
    document.querySelector(`.onboarding-step[data-step="${step}"]`).classList.add("active");
    document.querySelectorAll(".progress-dot").forEach(d => {
        d.classList.toggle("active", parseInt(d.dataset.dot) <= step);
    });
}

function completeOnboarding() {
    const name = document.getElementById("onboard-name").value.trim() || "Friend";
    const age = parseInt(document.getElementById("onboard-age").value) || 25;
    const gender = document.getElementById("onboard-gender").value;
    const height = parseInt(document.getElementById("onboard-height").value) || 170;
    const weight = parseInt(document.getElementById("onboard-weight").value) || 70;
    const goal = document.querySelector('input[name="goal"]:checked').value;
    const activity = document.getElementById("onboard-activity").value;

    // Calculate calorie goal
    let bmr;
    if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }

    const activityMultipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, extreme: 1.9 };
    let tdee = Math.round(bmr * (activityMultipliers[activity] || 1.55));

    if (goal === "lose") tdee -= 400;
    else if (goal === "gain") tdee += 300;

    state.user = { name, age, gender, height, weight, goal, activity };
    state.calorieGoal = tdee;
    state.proteinGoal = Math.round(weight * 1.6);

    saveState();
    document.getElementById("onboarding-modal").style.display = "none";
    initApp();
    showToast("Welcome to FrNourish, " + name + "! 🎉", "success");
}

// ===== Init App =====
function initApp() {
    applyPreferences();
    updateGreeting();
    updateUserUI();
    initNavigation();
    initSidebar();
    initThemeToggle();
    initMealTracker();
    initFoodCompare();
    initMoodTracker();
    initDataImport();
    initFAB();
    updateDashboard();
    renderMealPlanner();
    renderRecipes();
    renderAchievements();
    renderWaterLog();
    loadSettings();
    if (state.preferences.showTips) showRandomTip();
    else document.getElementById("tip-banner").classList.add("hidden");
    updateStreak();
    navigateTo(state.lastVisitedPage || "dashboard");
}

// ===== State Management =====
function loadState() {
    try {
        const saved = localStorage.getItem("frnourish_state");
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
        ensureStateIntegrity();
    } catch (e) {
        console.warn("Failed to load state:", e);
        ensureStateIntegrity();
    }
}

function saveState() {
    try {
        localStorage.setItem("frnourish_state", JSON.stringify(state));
    } catch (e) {
        console.warn("Failed to save state:", e);
    }
}

// ===== Greeting =====
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";

    const name = state.user ? state.user.name : "Friend";
    document.getElementById("greeting-text").textContent = `${greeting}, ${name}! 👋`;

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("greeting-date").textContent = new Date().toLocaleDateString("en-US", options);
}

function updateUserUI() {
    if (state.user) {
        document.getElementById("user-initials").textContent = state.user.name.charAt(0).toUpperCase();
    }
}

// ===== Navigation =====
function initNavigation() {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add("active");

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page-${page}`).classList.add("active");

    state.lastVisitedPage = page;
    saveState();

    // Close mobile menu
    document.getElementById("sidebar").classList.remove("mobile-open");

    // Update on page load
    if (page === "dashboard") updateDashboard();
    if (page === "achievements") renderAchievements();
    if (page === "meal-planner") renderMealPlanner();
    if (page === "meal-tracker") renderQuickFoodPanels();
    if (page === "water-tracker") renderHydrationPanels();
    if (page === "mood-tracker") renderMoodSummary();
}

// ===== Sidebar =====
function initSidebar() {
    document.getElementById("sidebar-toggle").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });

    document.getElementById("mobile-menu-btn").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("mobile-open");
    });
}

// ===== Theme =====
function initThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    const saved = localStorage.getItem("frnourish_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcon(saved);

    btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("frnourish_theme", next);
        updateThemeIcon(next);
        reinitCharts();
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector("#theme-toggle i");
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// ===== Tips =====
function showRandomTip() {
    if (state.preferences && !state.preferences.showTips) {
        document.getElementById("tip-banner").classList.add("hidden");
        return;
    }

    const hour = new Date().getHours();
    let filteredTips = TIPS;
    if (hour < 10) filteredTips = TIPS.filter(t => t.includes("morning") || t.includes("Start") || t.includes("water"));
    else if (hour > 20) filteredTips = TIPS.filter(t => t.includes("sleep") || t.includes("dinner"));
    if (filteredTips.length === 0) filteredTips = TIPS;

    const tip = filteredTips[Math.floor(Math.random() * filteredTips.length)];
    document.getElementById("tip-text").textContent = tip;
    document.getElementById("tip-banner").classList.remove("hidden");
}

function closeTip() {
    document.getElementById("tip-banner").classList.add("hidden");
}

// ===== Dashboard =====
function updateDashboard() {
    const today = getDateKey();
    const todayMeals = state.meals.filter(m => m.date === today);

    let totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
    todayMeals.forEach(m => {
        totalCal += m.calories;
        totalProtein += m.protein;
        totalCarbs += m.carbs;
        totalFat += m.fat;
    });

    // Stats
    animateValue("stat-calories", totalCal);
    document.getElementById("stat-protein").textContent = Math.round(totalProtein) + "g";
    document.getElementById("stat-water").textContent = getWaterToday();
    document.getElementById("stat-streak").textContent = state.streak;
    document.getElementById("sidebar-streak").textContent = state.streak;

    // Bars
    const calPct = Math.min((totalCal / state.calorieGoal) * 100, 100);
    const protPct = Math.min((totalProtein / state.proteinGoal) * 100, 100);
    const waterPct = Math.min((getWaterToday() / state.waterGoal) * 100, 100);

    document.getElementById("cal-bar").style.width = calPct + "%";
    document.getElementById("protein-bar").style.width = protPct + "%";
    document.getElementById("water-bar").style.width = waterPct + "%";
    document.getElementById("cal-goal-text").textContent = `of ${state.calorieGoal} kcal`;
    document.getElementById("protein-goal-text").textContent = `of ${state.proteinGoal}g`;

    // Daily Score
    const score = calculateDailyScore(totalCal, totalProtein, getWaterToday(), todayMeals);
    document.getElementById("daily-score-value").textContent = score;
    document.getElementById("cal-percent").textContent = Math.round(calPct) + "%";

    // Charts
    initCharts(totalCal, totalProtein, totalCarbs, totalFat);

    // Today's meals list
    renderTodayMeals(todayMeals);

    // Streak flames
    renderStreakFlames();

    // Heatmap
    renderNutrientHeatmap();
}

function animateValue(elementId, endVal) {
    const el = document.getElementById(elementId);
    const start = parseInt(el.textContent) || 0;
    const duration = 800;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(start + (endVal - start) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function calculateDailyScore(cal, protein, water, meals) {
    let score = 50;
    // Calorie adherence
    const calRatio = cal / state.calorieGoal;
    if (calRatio >= 0.8 && calRatio <= 1.1) score += 20;
    else if (calRatio >= 0.5 && calRatio <= 1.3) score += 10;

    // Protein
    if (protein >= state.proteinGoal * 0.8) score += 10;

    // Water
    score += Math.min((water / state.waterGoal) * 10, 10);

    // Food quality
    if (meals.length > 0) {
        const avgScore = meals.reduce((sum, m) => sum + (m.foodScore || 50), 0) / meals.length;
        score += Math.min(avgScore / 10, 10);
    }

    return Math.min(Math.round(score), 100);
}

function renderTodayMeals(meals) {
    const container = document.getElementById("today-meals-list");
    if (meals.length === 0) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-bowl-food"></i><p>No meals logged yet today. Start tracking!</p></div>`;
        return;
    }

    container.innerHTML = meals.map((m, i) => `
        <div class="meal-timeline-item">
            <span class="meal-time-badge ${m.mealType}">${m.mealType}</span>
            <div class="meal-item-info">
                <h4>${m.emoji || "🍽️"} ${m.name}</h4>
                <p>${m.protein}g protein · ${m.carbs}g carbs · ${m.fat}g fat</p>
            </div>
            <span class="meal-item-cal">${m.calories} kcal</span>
            <button class="meal-item-delete" onclick="deleteMeal(${i})" title="Remove"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join("");
}

function deleteMeal(index) {
    const today = getDateKey();
    const todayMeals = state.meals.filter(m => m.date === today);
    const mealToRemove = todayMeals[index];
    state.meals = state.meals.filter(m => m !== mealToRemove);
    saveState();
    updateDashboard();
    updateMealLogUI();
    showToast("Meal removed", "info");
}

function renderStreakFlames() {
    const container = document.getElementById("streak-flames");
    const count = Math.min(state.streak, 14);
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const flame = document.createElement("span");
        flame.textContent = "🔥";
        flame.style.fontSize = "0.9rem";
        flame.style.animation = `pulse ${1 + Math.random()}s ease-in-out infinite`;
        flame.style.animationDelay = (i * 0.1) + "s";
        container.appendChild(flame);
    }
}

function renderNutrientHeatmap() {
    const container = document.getElementById("nutrient-heatmap");
    const nutrients = ["Calories", "Protein", "Carbs", "Fat", "Fiber"];
    const days = getLast7Days();

    let html = '<div class="heatmap-label"></div>';
    days.forEach(d => {
        html += `<div class="heatmap-day-label">${d.label}</div>`;
    });

    nutrients.forEach(nutrient => {
        html += `<div class="heatmap-label">${nutrient}</div>`;
        days.forEach(d => {
            const dayMeals = state.meals.filter(m => m.date === d.key);
            let total = 0;
            dayMeals.forEach(m => {
                if (nutrient === "Calories") total += m.calories;
                else if (nutrient === "Protein") total += m.protein;
                else if (nutrient === "Carbs") total += m.carbs;
                else if (nutrient === "Fat") total += m.fat;
                else if (nutrient === "Fiber") total += (m.fiber || 0);
            });
            const level = getHeatmapLevel(nutrient, total);
            html += `<div class="heatmap-cell" data-level="${level}" title="${nutrient}: ${Math.round(total)}"></div>`;
        });
    });

    container.innerHTML = html;
}

function getHeatmapLevel(nutrient, value) {
    const thresholds = {
        Calories: [0, 400, 800, 1400, 1800, 2000],
        Protein: [0, 20, 40, 70, 100, 120],
        Carbs: [0, 50, 100, 150, 200, 250],
        Fat: [0, 15, 30, 45, 60, 70],
        Fiber: [0, 5, 10, 15, 20, 25],
    };
    const t = thresholds[nutrient] || [0, 10, 20, 30, 40, 50];
    for (let i = t.length - 1; i >= 0; i--) {
        if (value >= t[i]) return i;
    }
    return 0;
}

function getLast7Days() {
    const days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        days.push({
            key: d.toISOString().split("T")[0],
            label: dayNames[d.getDay()]
        });
    }
    return days;
}

// ===== Charts =====
function initCharts(totalCal, totalProtein, totalCarbs, totalFat) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#94A3B8" : "#64748B";
    const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    const tooltipBg = isDark ? "#1E293B" : "#F8FAFC";
    const tooltipBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    // Calorie Donut
    const calRemaining = Math.max(state.calorieGoal - totalCal, 0);
    document.getElementById("donut-cal-value").textContent = calRemaining;

    if (calorieDonutChart) calorieDonutChart.destroy();
    calorieDonutChart = new Chart(document.getElementById("calorieDonut"), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [totalCal, calRemaining],
                backgroundColor: ["#10B981", isDark ? "rgba(255,255,255,0.08)" : "#E2E8F0"],
                borderWidth: 4,
                borderColor: isDark ? "#0D1324" : "#FFFFFF",
                borderRadius: 10,
            }]
        },
        options: {
            cutout: "72%",
            responsive: true,
            maintainAspectRatio: true,
            plugins: { 
                legend: { display: false }, 
                tooltip: { 
                    enabled: true,
                    backgroundColor: tooltipBg,
                    titleColor: isDark ? "#F1F5F9" : "#0F172A",
                    bodyColor: isDark ? "#94A3B8" : "#475569",
                    borderColor: tooltipBorder,
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 6,
                    titleFont: { size: 12, weight: 'bold' },
                } 
            },
            animation: { animateRotate: true, duration: 1200 }
        }
    });

    // Macro Chart
    if (macroChart) macroChart.destroy();
    const macroTotal = totalProtein + totalCarbs + totalFat;
    macroChart = new Chart(document.getElementById("macroChart"), {
        type: "doughnut",
        data: {
            labels: ["Protein", "Carbs", "Fat"],
            datasets: [{
                data: macroTotal > 0 ? [totalProtein, totalCarbs, totalFat] : [1, 1, 1],
                backgroundColor: ["#8B5CF6", "#F59E0B", "#F43F5E"],
                borderWidth: 4,
                borderColor: isDark ? "#0D1324" : "#FFFFFF",
                borderRadius: 8,
            }]
        },
        options: {
            cutout: "58%",
            responsive: true,
            maintainAspectRatio: true,
            plugins: { 
                legend: { display: false }, 
                tooltip: { 
                    enabled: macroTotal > 0,
                    backgroundColor: tooltipBg,
                    titleColor: isDark ? "#F1F5F9" : "#0F172A",
                    bodyColor: isDark ? "#94A3B8" : "#475569",
                    borderColor: tooltipBorder,
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 6,
                    titleFont: { size: 12, weight: 'bold' },
                    callbacks: {
                        label: function(context) {
                            return context.label + ": " + context.parsed + "g";
                        }
                    }
                } 
            },
            animation: { animateRotate: true, duration: 1200 }
        }
    });

    // Weekly Chart
    if (weeklyChart) weeklyChart.destroy();
    const days = getLast7Days();
    const weekData = days.map(d => {
        return state.meals.filter(m => m.date === d.key).reduce((s, m) => s + m.calories, 0);
    });

    weeklyChart = new Chart(document.getElementById("weeklyChart"), {
        type: "bar",
        data: {
            labels: days.map(d => d.label),
            datasets: [{
                label: "Calories",
                data: weekData,
                backgroundColor: weekData.map(v => v > state.calorieGoal ? "rgba(244, 63, 94, 0.75)" : "rgba(16, 185, 129, 0.75)"),
                borderColor: weekData.map(v => v > state.calorieGoal ? "#F43F5E" : "#10B981"),
                borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
                hoverBackgroundColor: weekData.map(v => v > state.calorieGoal ? "rgba(244, 63, 94, 0.95)" : "rgba(16, 185, 129, 0.95)"),
                barPercentage: 0.65,
                categoryPercentage: 0.75,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: tooltipBg,
                    titleColor: isDark ? "#F1F5F9" : "#0F172A",
                    bodyColor: isDark ? "#94A3B8" : "#475569",
                    borderColor: tooltipBorder,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { size: 12, weight: 'bold' },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + " kcal";
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: Math.max(state.calorieGoal * 1.2, Math.max(...weekData) * 1.1),
                    ticks: { color: textColor, font: { size: 12, weight: '500' } },
                    grid: { color: gridColor, drawBorder: false }
                },
                x: {
                    ticks: { color: textColor, font: { size: 12, weight: '500' } },
                    grid: { display: false, drawBorder: false }
                }
            }
        }
    });
}

function reinitCharts() {
    const today = getDateKey();
    const todayMeals = state.meals.filter(m => m.date === today);
    let totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
    todayMeals.forEach(m => {
        totalCal += m.calories;
        totalProtein += m.protein;
        totalCarbs += m.carbs;
        totalFat += m.fat;
    });
    initCharts(totalCal, totalProtein, totalCarbs, totalFat);
}

// ===== Meal Tracker =====
function initMealTracker() {
    // Meal type buttons
    document.querySelectorAll(".meal-type-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".meal-type-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.selectedMealType = btn.dataset.type;
            renderQuickFoodPanels();
        });
    });

    // Food search
    const searchInput = document.getElementById("food-search");
    const resultsContainer = document.getElementById("food-search-results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
            resultsContainer.classList.remove("active");
            return;
        }
        const results = FOOD_DATABASE.filter(f => f.name.toLowerCase().includes(query)).slice(0, 8);
        if (results.length === 0) {
            resultsContainer.classList.remove("active");
            return;
        }
        resultsContainer.innerHTML = results.map(f => `
            <div class="search-result-item" data-food="${f.name}">
                <span class="food-name">${f.emoji} ${f.name}</span>
                <span class="food-cal">${f.calories} kcal</span>
            </div>
        `).join("");
        resultsContainer.classList.add("active");

        resultsContainer.querySelectorAll(".search-result-item").forEach(item => {
            item.addEventListener("click", () => selectFood(item.dataset.food));
        });
    });

    // Close search on outside click
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-wrapper")) {
            document.querySelectorAll(".search-dropdown").forEach(d => d.classList.remove("active"));
        }
    });

    updateMealLogUI();
    renderQuickFoodPanels();
}

function selectFood(name) {
    const food = FOOD_DATABASE.find(f => f.name === name);
    if (!food) return;

    state.selectedFood = food;
    document.getElementById("selected-food-info").style.display = "block";
    document.getElementById("selected-food-name").textContent = food.emoji + " " + food.name;

    const scoreBadge = document.getElementById("selected-food-score");
    scoreBadge.textContent = "Score: " + food.score;
    scoreBadge.className = "food-score-badge " + (food.score >= 75 ? "high" : food.score >= 50 ? "medium" : "low");

    document.getElementById("sel-cal").textContent = food.calories;
    document.getElementById("sel-protein").textContent = food.protein + "g";
    document.getElementById("sel-carbs").textContent = food.carbs + "g";
    document.getElementById("sel-fat").textContent = food.fat + "g";

    document.getElementById("food-servings").value = 1;
    document.getElementById("food-search-results").classList.remove("active");
    document.getElementById("food-search").value = food.name;
    updateSelectedFoodFavoriteButton(food.name);
}

function logMeal() {
    if (!state.selectedFood) {
        showToast("Please select a food first!", "error");
        return;
    }

    const servings = parseFloat(document.getElementById("food-servings").value) || 1;
    const food = state.selectedFood;

    const meal = {
        name: food.name,
        emoji: food.emoji,
        mealType: state.selectedMealType,
        calories: Math.round(food.calories * servings),
        protein: Math.round(food.protein * servings * 10) / 10,
        carbs: Math.round(food.carbs * servings * 10) / 10,
        fat: Math.round(food.fat * servings * 10) / 10,
        fiber: Math.round((food.fiber || 0) * servings * 10) / 10,
        foodScore: food.score,
        servings,
        date: getDateKey(),
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    state.meals.push(meal);
    state.recentFoods = [food.name, ...state.recentFoods.filter(item => item !== food.name)].slice(0, 8);
    updateStreak();
    saveState();

    // Reset
    state.selectedFood = null;
    document.getElementById("selected-food-info").style.display = "none";
    document.getElementById("food-search").value = "";

    updateDashboard();
    updateMealLogUI();
    renderQuickFoodPanels();
    checkAchievements();
    showToast(`${food.emoji} ${food.name} logged! (+${meal.calories} kcal)`, "success");
}

function updateMealLogUI() {
    const today = getDateKey();
    const todayMeals = state.meals.filter(m => m.date === today);
    const container = document.getElementById("meal-log-list");

    if (todayMeals.length === 0) {
        container.innerHTML = `<div class="empty-state small"><i class="fas fa-clipboard-list"></i><p>Nothing logged yet</p></div>`;
        document.getElementById("meal-log-totals").style.display = "none";
        return;
    }

    container.innerHTML = todayMeals.map((m, i) => `
        <div class="meal-timeline-item">
            <span class="meal-time-badge ${m.mealType}">${m.mealType}</span>
            <div class="meal-item-info">
                <h4>${m.emoji || "🍽️"} ${m.name}</h4>
                <p>${m.servings} serving${m.servings !== 1 ? "s" : ""} · ${m.time}</p>
            </div>
            <span class="meal-item-cal">${m.calories} kcal</span>
        </div>
    `).join("");

    // Totals
    let tCal = 0, tPro = 0, tCarb = 0, tFat = 0;
    todayMeals.forEach(m => { tCal += m.calories; tPro += m.protein; tCarb += m.carbs; tFat += m.fat; });

    document.getElementById("total-cal").textContent = tCal;
    document.getElementById("total-protein").textContent = Math.round(tPro) + "g";
    document.getElementById("total-carbs").textContent = Math.round(tCarb) + "g";
    document.getElementById("total-fat").textContent = Math.round(tFat) + "g";
    document.getElementById("meal-log-totals").style.display = "block";
}

// ===== Meal Planner =====
function renderMealPlanner() {
    const container = document.getElementById("planner-grid");
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const todayIndex = (new Date().getDay() + 6) % 7; // Monday=0
    const plan = getPlannerData();

    container.innerHTML = plan.map((day, i) => `
        <div class="planner-day ${i === todayIndex ? 'today' : ''}">
            <div class="planner-day-header">
                <h4>${day.day.substring(0, 3)}</h4>
                <small>${i === todayIndex ? 'Today' : day.focus}</small>
            </div>
            <div class="planner-meals">
                <div class="planner-meal-slot">
                    <span class="slot-type">🌅 Breakfast</span>
                    <span class="slot-food">${day.breakfast}</span>
                </div>
                <div class="planner-meal-slot">
                    <span class="slot-type">☀️ Lunch</span>
                    <span class="slot-food">${day.lunch}</span>
                </div>
                <div class="planner-meal-slot">
                    <span class="slot-type">🌙 Dinner</span>
                    <span class="slot-food">${day.dinner}</span>
                </div>
                <div class="planner-meal-slot">
                    <span class="slot-type">🍎 Snack</span>
                    <span class="slot-food">${day.snack}</span>
                </div>
            </div>
        </div>
    `).join("");

    const goalText = state.user?.goal === "lose"
        ? "Lighter, filling meals for your current goal."
        : state.user?.goal === "gain"
            ? "Higher-protein picks to support muscle gain."
            : "Balanced meals to help you stay consistent.";
    const plannerNote = document.getElementById("planner-note");
    if (plannerNote) plannerNote.textContent = goalText;

    renderShoppingList(plan);
}

function getPlannerData() {
    if (Array.isArray(state.plannerData) && state.plannerData.length === 7) return state.plannerData;

    const goal = state.user?.goal || "maintain";
    const seed = state.plannerSeed || 0;

    const options = {
        lose: {
            breakfast: ["Greek Yogurt Parfait", "Overnight Oats Power Bowl", "Fruit & yogurt bowl", "Oatmeal with berries", "Poha", "Idli", "Smoothie bowl"],
            lunch: ["Grilled Chicken Salad", "Lentil Soup", "Quinoa bowl", "Vegetable Stir-Fry", "Soup (Vegetable)", "Dal (1 cup)", "Veggie wrap"],
            dinner: ["Grilled Fish with Veggies", "Vegetable Stir-Fry", "Palak Paneer (1 cup)", "Soup (Vegetable)", "Chicken tikka plate", "Tofu bowl", "Light khichdi"],
            snack: ["Apple", "Mixed nuts", "Greek Yogurt (1 cup)", "Orange", "Hummus (2 tbsp)", "Coconut Water (1 cup)", "Carrot sticks"],
        },
        gain: {
            breakfast: ["Paneer sandwich", "Eggs (2 large) + toast", "Overnight Oats Power Bowl", "Banana smoothie", "Greek Yogurt Parfait", "Peanut butter toast", "Dosa with paneer filling"],
            lunch: ["Paneer Tikka Wrap", "Burrito Bowl", "Chicken wrap", "Brown Rice (1 cup) + Dal (1 cup)", "Quinoa bowl", "Chicken Breast (100g) with rice", "Chickpea bowl"],
            dinner: ["Salmon (100g) with rice", "Chicken Breast (100g) + veggies", "Palak Paneer (1 cup)", "Grilled Fish with Veggies", "Pasta primavera", "Turkey bowl", "Paneer rice bowl"],
            snack: ["Protein Bar", "Banana", "Peanut Butter (2 tbsp)", "Greek Yogurt (1 cup)", "Almonds (1 oz)", "Smoothie (fruit blend)", "Trail mix"],
        },
        maintain: {
            breakfast: ["Overnight Oats Power Bowl", "Greek Yogurt Parfait", "Avocado toast", "Oatmeal (1 cup)", "Poha", "Idli (2 pieces)", "Eggs (2 large)"],
            lunch: ["Grilled Chicken Salad", "Quinoa bowl", "Vegetable Stir-Fry", "Dal (1 cup) + roti", "Paneer Tikka Wrap", "Soup & sandwich", "Brown rice bowl"],
            dinner: ["Grilled Fish with Veggies", "Palak Paneer (1 cup)", "Vegetable Stir-Fry", "Lentil Soup", "Wrap (Chicken)", "Burrito Bowl", "Soup (Vegetable)"],
            snack: ["Apple", "Orange", "Hummus (2 tbsp)", "Mixed nuts", "Greek Yogurt (1 cup)", "Dark Chocolate (1 oz)", "Coconut Water (1 cup)"],
        }
    };

    const selected = options[goal] || options.maintain;
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const focusNames = ["Fresh start", "Protein focus", "Hydration day", "Colorful plate", "Balanced portions", "Easy prep", "Reset day"];

    const plan = dayNames.map((day, i) => ({
        day,
        focus: focusNames[(i + seed) % focusNames.length],
        breakfast: selected.breakfast[(i + seed) % selected.breakfast.length],
        lunch: selected.lunch[(i + seed + 1) % selected.lunch.length],
        dinner: selected.dinner[(i + seed + 2) % selected.dinner.length],
        snack: selected.snack[(i + seed + 3) % selected.snack.length],
    }));

    state.plannerData = plan;
    saveState();
    return plan;
}

function generatePlanner() {
    state.plannerSeed = (state.plannerSeed || 0) + 1;
    state.plannerData = null;
    renderMealPlanner();
    showToast("New weekly meal plan generated! 🗓️", "success");
}

function renderShoppingList(plan) {
    const list = {};
    plan.forEach(day => {
        [day.breakfast, day.lunch, day.dinner, day.snack].forEach(item => {
            list[item] = (list[item] || 0) + 1;
        });
    });

    const container = document.getElementById("shopping-list");
    const entries = Object.entries(list).sort((a, b) => b[1] - a[1]).slice(0, 10);
    container.innerHTML = entries.map(([item, count]) => `
        <div class="shopping-item">
            <div>
                <strong>${item}</strong>
                <p>Add this to your weekly prep list.</p>
            </div>
            <span class="shopping-badge">${count}x</span>
        </div>
    `).join("");
}

function copyPlannerSummary() {
    const plan = getPlannerData();
    const summary = plan.map(day => `${day.day}: ${day.breakfast}, ${day.lunch}, ${day.dinner}, ${day.snack}`).join("\n");
    copyTextToClipboard(summary, "Meal plan copied to clipboard! 📋");
}

// ===== Recipes =====
function renderRecipes(filter = "all") {
    const container = document.getElementById("recipes-grid");
    let filtered = RECIPES;
    if (filter !== "all") {
        filtered = RECIPES.filter(r => r.category === filter || r.tags.includes(filter));
    }

    container.innerHTML = filtered.map(r => {
        const tagHTML = r.tags.map(t => `<span class="recipe-tag ${t}">${t.replace("-", " ")}</span>`).join("");
        const bgGradients = [
            "linear-gradient(135deg, #1a3a2a, #0d1f1a)",
            "linear-gradient(135deg, #2a1a3a, #1a0d2f)",
            "linear-gradient(135deg, #3a2a1a, #2f1a0d)",
            "linear-gradient(135deg, #1a2a3a, #0d1a2f)",
        ];
        const bg = bgGradients[r.id % bgGradients.length];

        return `
            <div class="recipe-card" onclick="viewRecipe(${r.id})">
                <div class="recipe-image" style="background:${bg}">
                    <span style="position:relative;z-index:1">${r.emoji}</span>
                    <div class="recipe-tags">${tagHTML}</div>
                </div>
                <div class="recipe-content">
                    <h4>${r.name}</h4>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> ${r.time} min</span>
                        <span><i class="fas fa-signal"></i> ${r.difficulty}</span>
                        <span><i class="fas fa-fire"></i> ${r.calories} kcal</span>
                    </div>
                    <div class="recipe-macros-bar">
                        <div class="recipe-macro"><strong>${r.protein}g</strong> Protein</div>
                        <div class="recipe-macro"><strong>${r.carbs}g</strong> Carbs</div>
                        <div class="recipe-macro"><strong>${r.fat}g</strong> Fat</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.dataset.bound === "true") return;
        btn.dataset.bound = "true";
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderRecipes(btn.dataset.filter);
        });
    });
}

function viewRecipe(id) {
    const r = RECIPES.find(rec => rec.id === id);
    if (!r) return;

    state.recipesViewed = (state.recipesViewed || 0) + 1;
    saveState();

    const content = document.getElementById("recipe-detail-content");
    content.innerHTML = `
        <div class="recipe-detail-header">
            <h2>${r.emoji} ${r.name}</h2>
            <div class="recipe-detail-meta">
                <span><i class="fas fa-clock"></i> ${r.time} min</span>
                <span><i class="fas fa-signal"></i> ${r.difficulty}</span>
                <span><i class="fas fa-tag"></i> ${r.category}</span>
            </div>
        </div>
        <div class="recipe-detail-macros">
            <div class="recipe-detail-macro"><span class="val">${r.calories}</span><span class="label">Calories</span></div>
            <div class="recipe-detail-macro"><span class="val">${r.protein}g</span><span class="label">Protein</span></div>
            <div class="recipe-detail-macro"><span class="val">${r.carbs}g</span><span class="label">Carbs</span></div>
            <div class="recipe-detail-macro"><span class="val">${r.fat}g</span><span class="label">Fat</span></div>
        </div>
        <div class="recipe-detail-section">
            <h3><i class="fas fa-list"></i> Ingredients</h3>
            <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        </div>
        <div class="recipe-detail-section">
            <h3><i class="fas fa-shoe-prints"></i> Steps</h3>
            <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
        </div>
    `;

    document.getElementById("recipe-modal").style.display = "flex";
    checkAchievements();
}

function closeRecipeModal() {
    document.getElementById("recipe-modal").style.display = "none";
}

// ===== Food Compare =====
let compareA = null, compareB = null;

function initFoodCompare() {
    setupCompareSearch("compare-food-a", "compare-results-a", "a");
    setupCompareSearch("compare-food-b", "compare-results-b", "b");
}

function setupCompareSearch(inputId, resultsId, side) {
    const input = document.getElementById(inputId);
    const results = document.getElementById(resultsId);

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 2) { results.classList.remove("active"); return; }

        const matches = FOOD_DATABASE.filter(f => f.name.toLowerCase().includes(query)).slice(0, 6);
        if (matches.length === 0) { results.classList.remove("active"); return; }

        results.innerHTML = matches.map(f => `
            <div class="search-result-item" data-food="${f.name}" data-side="${side}">
                <span class="food-name">${f.emoji} ${f.name}</span>
                <span class="food-cal">${f.calories} kcal</span>
            </div>
        `).join("");
        results.classList.add("active");

        results.querySelectorAll(".search-result-item").forEach(item => {
            item.addEventListener("click", () => {
                const food = FOOD_DATABASE.find(f => f.name === item.dataset.food);
                if (side === "a") { compareA = food; input.value = food.name; }
                else { compareB = food; input.value = food.name; }
                results.classList.remove("active");
                renderCompareInfo(side, food);
                if (compareA && compareB) renderCompareChart();

                state.foodsCompared = (state.foodsCompared || 0) + 1;
                saveState();
                checkAchievements();
            });
        });
    });
}

function renderCompareInfo(side, food) {
    const container = document.getElementById(`compare-info-${side}`);
    const nutrients = [
        { name: "Calories", val: food.calories + " kcal" },
        { name: "Protein", val: food.protein + "g" },
        { name: "Carbs", val: food.carbs + "g" },
        { name: "Fat", val: food.fat + "g" },
        { name: "Fiber", val: (food.fiber || 0) + "g" },
        { name: "Health Score", val: food.score + "/100" },
    ];

    container.innerHTML = nutrients.map(n => `
        <div class="compare-nutrient-row">
            <span class="nutrient-name">${n.name}</span>
            <span class="nutrient-val">${n.val}</span>
        </div>
    `).join("");
}

function renderCompareChart() {
    if (!compareA || !compareB) return;

    document.getElementById("compare-chart-container").style.display = "block";

    if (compareChart) compareChart.destroy();
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    compareChart = new Chart(document.getElementById("compareChart"), {
        type: "radar",
        data: {
            labels: ["Calories (/10)", "Protein", "Carbs", "Fat", "Fiber", "Score (/10)"],
            datasets: [
                {
                    label: compareA.name,
                    data: [compareA.calories / 10, compareA.protein, compareA.carbs, compareA.fat, compareA.fiber || 0, compareA.score / 10],
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10B981",
                    borderWidth: 2,
                    pointBackgroundColor: "#10B981",
                },
                {
                    label: compareB.name,
                    data: [compareB.calories / 10, compareB.protein, compareB.carbs, compareB.fat, compareB.fiber || 0, compareB.score / 10],
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "#8B5CF6",
                    borderWidth: 2,
                    pointBackgroundColor: "#8B5CF6",
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    ticks: { color: isDark ? "#94A3B8" : "#475569", backdropColor: "transparent" },
                    grid: { color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" },
                    pointLabels: { color: isDark ? "#F1F5F9" : "#0F172A", font: { size: 12 } }
                }
            },
            plugins: {
                legend: { labels: { color: isDark ? "#F1F5F9" : "#0F172A" } }
            }
        }
    });
}

// ===== Water Tracker =====
function getWaterToday() {
    const today = getDateKey();
    const todayLog = state.waterLog.filter(w => w.date === today);
    return todayLog.reduce((sum, w) => sum + w.amount, 0);
}

function adjustWater(amount) {
    const today = getDateKey();
    const current = getWaterToday();

    if (amount < 0 && current <= 0) return;

    state.waterLog.push({ date: today, amount, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) });
    saveState();

    const newCount = getWaterToday();
    updateWaterUI(newCount);
    renderWaterLog();
    renderHydrationPanels();
    updateDashboard();
    checkAchievements();

    if (amount > 0) showToast("💧 +1 glass of water logged!", "success");
}

function updateWaterUI(count) {
    const pct = Math.min((count / state.waterGoal) * 100, 100);
    document.getElementById("water-fill").style.height = pct + "%";
    document.getElementById("water-count-value").textContent = count;
    document.getElementById("stat-water").textContent = count;
    document.getElementById("water-bar").style.width = pct + "%";
}

function renderWaterLog() {
    const today = getDateKey();
    const todayLog = state.waterLog.filter(w => w.date === today && w.amount > 0);
    const container = document.getElementById("water-log");

    if (todayLog.length === 0) {
        container.innerHTML = `<div class="empty-state small"><i class="fas fa-tint"></i><p>No water logged today</p></div>`;
        return;
    }

    container.innerHTML = todayLog.map((w, i) => `
        <div class="water-log-item">
            <i class="fas fa-glass-water"></i>
            <span>Glass #${i + 1}</span>
            <span class="water-time">${w.time}</span>
        </div>
    `).join("");

    updateWaterUI(getWaterToday());
    renderHydrationPanels();
}

// ===== BMI Calculator =====
function calculateBMI() {
    const height = parseFloat(document.getElementById("bmi-height").value);
    const weight = parseFloat(document.getElementById("bmi-weight").value);

    if (!height || !weight || height < 50 || weight < 20) {
        showToast("Please enter valid height and weight!", "error");
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bmiRounded = Math.round(bmi * 10) / 10;

    let category, color, advice, position;
    if (bmi < 18.5) {
        category = "Underweight";
        color = "#3B82F6";
        advice = "You may need to gain some weight. Focus on nutrient-dense foods and consider consulting a healthcare provider.";
        position = (bmi / 18.5) * 25;
    } else if (bmi < 25) {
        category = "Normal Weight";
        color = "#10B981";
        advice = "Great job! You're in a healthy range. Maintain your balanced diet and active lifestyle.";
        position = 25 + ((bmi - 18.5) / 6.5) * 25;
    } else if (bmi < 30) {
        category = "Overweight";
        color = "#F59E0B";
        advice = "Consider adjusting your diet and increasing physical activity. Small changes can make a big difference!";
        position = 50 + ((bmi - 25) / 5) * 25;
    } else {
        category = "Obese";
        color = "#F43F5E";
        advice = "It's important to focus on your health. Please consult with a healthcare provider for personalized guidance.";
        position = Math.min(75 + ((bmi - 30) / 10) * 25, 98);
    }

    document.getElementById("bmi-result-card").style.display = "block";
    document.getElementById("bmi-number").textContent = bmiRounded;
    document.getElementById("bmi-category").textContent = category;
    document.getElementById("bmi-category").style.color = color;
    document.getElementById("bmi-advice").textContent = advice;
    document.getElementById("bmi-pointer").style.left = position + "%";
    document.getElementById("bmi-pointer").style.borderColor = color;

    state.bmiChecked = true;
    saveState();
    checkAchievements();
    showToast(`Your BMI is ${bmiRounded} — ${category}`, "info");
}

// ===== Achievements =====
function renderAchievements() {
    const container = document.getElementById("achievements-grid");
    const stats = getAchievementStats();

    container.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = a.condition(stats);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                ${!unlocked ? '<span class="achievement-lock"><i class="fas fa-lock"></i></span>' : ''}
                <div class="achievement-icon">
                    <i class="fas ${a.icon}"></i>
                </div>
                <h4>${a.name}</h4>
                <p>${a.desc}</p>
            </div>
        `;
    }).join("");
}

function getAchievementStats() {
    const today = getDateKey();
    const todayMeals = state.meals.filter(m => m.date === today);
    const allMealsHealthy = todayMeals.length > 0 && todayMeals.every(m => (m.foodScore || 0) >= 70);

    return {
        totalMeals: state.meals.length,
        waterToday: getWaterToday(),
        streak: state.streak,
        allMealsHealthy,
        totalMoods: state.moodLog.length,
        bmiChecked: state.bmiChecked,
        recipesViewed: state.recipesViewed || 0,
        foodsCompared: state.foodsCompared || 0,
    };
}

function checkAchievements() {
    const stats = getAchievementStats();
    let newUnlock = false;

    ACHIEVEMENTS.forEach(a => {
        if (a.condition(stats) && !state.achievements.includes(a.id)) {
            state.achievements.push(a.id);
            newUnlock = true;
            showToast(`🏆 Achievement Unlocked: ${a.name}!`, "success");
        }
    });

    if (newUnlock) saveState();
}

// ===== Mood Tracker =====
function initMoodTracker() {
    document.querySelectorAll(".mood-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    document.getElementById("energy-slider").addEventListener("input", (e) => {
        document.getElementById("energy-value").textContent = e.target.value;
    });

    renderMoodHistory();
}

function logMood() {
    const moodBtn = document.querySelector(".mood-btn.active");
    if (!moodBtn) {
        showToast("Please select a mood first!", "error");
        return;
    }

    const mood = moodBtn.dataset.mood;
    const energy = parseInt(document.getElementById("energy-slider").value);
    const notes = document.getElementById("mood-notes").value.trim();

    const moodIcons = { great: "🤩", good: "😊", okay: "😐", bad: "😟", terrible: "😵" };

    state.moodLog.push({
        mood,
        energy,
        notes,
        date: getDateKey(),
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        icon: moodIcons[mood]
    });

    saveState();
    renderMoodHistory();
    checkAchievements();

    // Reset
    document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("mood-notes").value = "";
    document.getElementById("energy-slider").value = 5;
    document.getElementById("energy-value").textContent = "5";

    showToast(`${moodIcons[mood]} Mood logged!`, "success");
}

function renderMoodHistory() {
    const container = document.getElementById("mood-history");
    const recent = [...state.moodLog].reverse().slice(0, 15);

    if (recent.length === 0) {
        container.innerHTML = `<div class="empty-state small"><i class="fas fa-smile"></i><p>No mood entries yet</p></div>`;
        return;
    }

    container.innerHTML = recent.map(m => `
        <div class="mood-entry">
            <div class="mood-entry-header">
                <span class="mood-entry-mood">${m.icon} ${capitalize(m.mood)}</span>
                <span class="mood-entry-date">${m.date} · ${m.time}</span>
            </div>
            <div class="mood-entry-details">
                Energy: <span>${m.energy}/10</span>
                ${m.notes ? ` · ${m.notes}` : ""}
            </div>
        </div>
    `).join("");
    renderMoodSummary();
}

// ===== Streak =====
function updateStreak() {
    const today = getDateKey();
    const yesterday = getDateKey(-1);
    const hasTodayMeal = state.meals.some(m => m.date === today);

    if (hasTodayMeal) {
        if (!state.lastLogDate) {
            state.streak = 1;
            state.lastLogDate = today;
        } else if (state.lastLogDate === today) {
            state.streak = Math.max(1, state.streak || 0);
        } else if (state.lastLogDate === yesterday) {
            state.streak = (state.streak || 0) + 1;
            state.lastLogDate = today;
        } else {
            state.streak = 1;
            state.lastLogDate = today;
        }
    }

    saveState();
    document.getElementById("stat-streak").textContent = state.streak;
    document.getElementById("sidebar-streak").textContent = state.streak;
}

// ===== Settings =====
function loadSettings() {
    if (state.user) {
        document.getElementById("settings-name").value = state.user.name || "";
        document.getElementById("settings-age").value = state.user.age || "";
        document.getElementById("settings-gender").value = state.user.gender || "male";
        document.getElementById("settings-height").value = state.user.height || "";
        document.getElementById("settings-weight").value = state.user.weight || "";
        document.getElementById("bmi-height").value = state.user.height || "";
        document.getElementById("bmi-weight").value = state.user.weight || "";
    }
    document.getElementById("settings-cal-goal").value = state.calorieGoal;
    document.getElementById("settings-protein-goal").value = state.proteinGoal;
    document.getElementById("settings-water-goal").value = state.waterGoal;
    document.getElementById("pref-reduced-motion").checked = !!state.preferences.reducedMotion;
    document.getElementById("pref-large-text").checked = !!state.preferences.largeText;
    document.getElementById("pref-show-tips").checked = !!state.preferences.showTips;
    document.getElementById("pref-particles").checked = !!state.preferences.particles;
}

function saveSettings() {
    state.user.name = document.getElementById("settings-name").value.trim() || "Friend";
    state.user.age = parseInt(document.getElementById("settings-age").value) || 25;
    state.user.gender = document.getElementById("settings-gender").value;
    state.user.height = parseInt(document.getElementById("settings-height").value) || 170;
    state.user.weight = parseInt(document.getElementById("settings-weight").value) || 70;

    saveState();
    updateGreeting();
    updateUserUI();
    updateDashboard();
    showToast("Profile updated! ✅", "success");
}

function saveGoals() {
    state.calorieGoal = parseInt(document.getElementById("settings-cal-goal").value) || 2000;
    state.proteinGoal = parseInt(document.getElementById("settings-protein-goal").value) || 120;
    state.waterGoal = parseInt(document.getElementById("settings-water-goal").value) || 8;

    saveState();
    state.plannerData = null;
    updateDashboard();
    renderMealPlanner();
    showToast("Goals updated! 🎯", "success");
}

function exportData() {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "frnourish_data.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Data exported! 📦", "success");
}

function clearAllData() {
    if (confirm("Are you sure? This will delete all your data, meals, and achievements. This cannot be undone.")) {
        localStorage.removeItem("frnourish_state");
        location.reload();
    }
}

// ===== Enhanced Dashboard & Accessibility =====
function applyPreferences() {
    document.documentElement.classList.toggle("reduce-motion", !!state.preferences.reducedMotion);
    document.documentElement.classList.toggle("large-text", !!state.preferences.largeText);
    document.body.classList.toggle("particles-off", !state.preferences.particles);
}

function savePreferences() {
    state.preferences = {
        reducedMotion: document.getElementById("pref-reduced-motion").checked,
        largeText: document.getElementById("pref-large-text").checked,
        showTips: document.getElementById("pref-show-tips").checked,
        particles: document.getElementById("pref-particles").checked,
    };
    applyPreferences();
    saveState();
    if (state.preferences.showTips) showRandomTip();
    else document.getElementById("tip-banner").classList.add("hidden");
    showToast("Preferences updated! ⚙️", "success");
}

function renderDashboardHero(totalCal, totalProtein, todayMeals) {
    const name = state.user?.name || "Friend";
    const goalText = state.user?.goal === "lose"
        ? "Lose weight"
        : state.user?.goal === "gain"
            ? "Build muscle"
            : "Maintain health";
    const remainingCalories = Math.max(state.calorieGoal - totalCal, 0);
    const remainingProtein = Math.max(state.proteinGoal - totalProtein, 0);

    document.getElementById("hero-title").textContent = `Welcome back, ${name}`;
    document.getElementById("hero-subtitle").textContent = todayMeals.length
        ? `You have logged ${todayMeals.length} meal${todayMeals.length > 1 ? "s" : ""} today. Keep the momentum going.`
        : "Start with one easy action today: a meal, a glass of water, or a quick mood check-in.";
    document.getElementById("hero-goal-chip").textContent = `Goal: ${goalText}`;
    document.getElementById("hero-focus-chip").textContent = `Water target: ${state.waterGoal} glasses`;
    document.getElementById("hero-remaining-cal").textContent = `${remainingCalories} kcal`;
    document.getElementById("hero-protein-left").textContent = `${Math.round(remainingProtein)} g`;
    document.getElementById("hero-next-focus").textContent = getNextFocus(totalCal, totalProtein, todayMeals);
}

function getNextFocus(totalCal, totalProtein, todayMeals) {
    if (!todayMeals.length) return "Log your first meal";
    if (getWaterToday() < Math.ceil(state.waterGoal / 2)) return "Drink more water";
    if (totalProtein < state.proteinGoal * 0.5) return "Add a protein-rich food";
    if (totalCal > state.calorieGoal) return "Choose a lighter next meal";
    return "Keep the balance going";
}

function renderDailyChecklist(todayMeals, totalProtein) {
    const container = document.getElementById("daily-checklist");
    const items = [
        { done: todayMeals.length >= 1, icon: "fa-utensils", title: "Meal logged", desc: "Track at least one meal today." },
        { done: getWaterToday() >= state.waterGoal, icon: "fa-glass-water", title: "Water goal", desc: `${getWaterToday()} / ${state.waterGoal} glasses completed.` },
        { done: totalProtein >= state.proteinGoal, icon: "fa-drumstick-bite", title: "Protein target", desc: `${Math.round(totalProtein)} / ${state.proteinGoal} g reached.` },
        { done: state.moodLog.some(m => m.date === getDateKey()), icon: "fa-face-smile", title: "Mood check-in", desc: "Log how you feel today." },
    ];

    container.innerHTML = items.map(item => `
        <div class="checklist-item ${item.done ? "done" : "pending"}">
            <i class="fas ${item.icon}"></i>
            <div>
                <strong>${item.title}</strong>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join("");
}

function renderSmartInsights(totalCal, totalProtein, totalCarbs, totalFat, todayMeals) {
    const container = document.getElementById("smart-insights");
    const insights = [];

    if (!todayMeals.length) {
        insights.push({ title: "Simple start", desc: "Begin with something easy like fruit, yogurt, or water. Small wins matter." });
    }
    if (totalProtein < state.proteinGoal * 0.5) {
        insights.push({ title: "Protein is low", desc: "Try eggs, yogurt, lentils, chicken, paneer, or tofu in your next meal." });
    }
    if (getWaterToday() < state.waterGoal) {
        insights.push({ title: "Hydration reminder", desc: `You still need ${Math.max(state.waterGoal - getWaterToday(), 0)} more glass${state.waterGoal - getWaterToday() === 1 ? "" : "es"} to reach today's goal.` });
    }
    if (todayMeals.length >= 2 && totalCal < state.calorieGoal * 0.65) {
        insights.push({ title: "Room for one balanced meal", desc: "A simple meal with protein, vegetables, and whole grains would keep the day balanced." });
    }
    if (!insights.length) {
        insights.push({ title: "Looking strong", desc: "Your food, water, and progress are on track today. Stay consistent." });
    }

    container.innerHTML = insights.slice(0, 3).map(item => `
        <div class="insight-item">
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
        </div>
    `).join("");
}

function renderWellnessSnapshot(todayMeals) {
    const container = document.getElementById("wellness-snapshot");
    const bmi = getBMIFromProfile();
    const avgMealScore = todayMeals.length
        ? Math.round(todayMeals.reduce((sum, m) => sum + (m.foodScore || 0), 0) / todayMeals.length)
        : 0;
    const cards = [
        { title: "Health score", desc: `${document.getElementById("daily-score-value").textContent}/100 today.` },
        { title: "Average meal score", desc: todayMeals.length ? `${avgMealScore}/100 across today's meals.` : "Log meals to see quality trends." },
        { title: "BMI snapshot", desc: bmi ? `${bmi.value} • ${bmi.label}` : "Add height and weight for a quick snapshot." },
    ];

    container.innerHTML = cards.map(item => `
        <div class="snapshot-item">
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
        </div>
    `).join("");
}

function getBMIFromProfile() {
    if (!state.user?.height || !state.user?.weight) return null;
    const bmi = state.user.weight / Math.pow(state.user.height / 100, 2);
    const value = (Math.round(bmi * 10) / 10).toFixed(1);
    let label = "Normal";
    if (bmi < 18.5) label = "Underweight";
    else if (bmi >= 25 && bmi < 30) label = "Overweight";
    else if (bmi >= 30) label = "Obese";
    return { value, label };
}

function renderQuickFoodPanels() {
    const picksContainer = document.getElementById("quick-food-picks");
    const favContainer = document.getElementById("favorite-foods-list");
    const recentContainer = document.getElementById("recent-foods-list");
    if (!picksContainer || !favContainer || !recentContainer) return;

    const suggestions = getQuickFoodSuggestions();
    picksContainer.innerHTML = suggestions.map(food => `
        <button class="quick-chip" onclick="selectFood('${escapeSingleQuotes(food.name)}')">${food.emoji} ${food.name}</button>
    `).join("");

    favContainer.innerHTML = state.favoriteFoods.length
        ? state.favoriteFoods.map(name => renderMiniFoodItem(name)).join("")
        : `<div class="empty-state small"><i class="fas fa-star"></i><p>Save foods you use often.</p></div>`;

    recentContainer.innerHTML = state.recentFoods.length
        ? state.recentFoods.map(name => renderMiniFoodItem(name)).join("")
        : `<div class="empty-state small"><i class="fas fa-clock-rotate-left"></i><p>Your recent picks will show here.</p></div>`;
}

function getQuickFoodSuggestions() {
    const mealType = state.selectedMealType || "breakfast";
    const goal = state.user?.goal || "maintain";
    let categories = ["fruit", "protein", "meal"];

    if (mealType === "breakfast") categories = ["fruit", "grain", "dairy", "protein"];
    if (mealType === "lunch" || mealType === "dinner") categories = ["meal", "protein", "vegetable", "grain"];
    if (mealType === "snack") categories = ["fruit", "nuts", "snack", "beverage", "dairy"];

    let pool = FOOD_DATABASE.filter(food => categories.includes(food.category)).sort((a, b) => b.score - a.score);

    if (goal === "gain") {
        pool = pool.sort((a, b) => (b.protein || 0) - (a.protein || 0) || b.score - a.score);
    } else if (goal === "lose") {
        pool = pool.sort((a, b) => b.score - a.score || a.calories - b.calories);
    }

    return pool.slice(0, 8);
}

function renderMiniFoodItem(name) {
    const food = FOOD_DATABASE.find(item => item.name === name);
    if (!food) return "";
    const favorite = state.favoriteFoods.includes(food.name);
    return `
        <div class="mini-list-item">
            <button onclick="selectFood('${escapeSingleQuotes(food.name)}')">${food.emoji} ${food.name}</button>
            <button onclick="toggleFavoriteFoodByName('${escapeSingleQuotes(food.name)}')" title="Toggle Favorite">
                <i class="fas ${favorite ? "fa-star" : "fa-star-half-stroke"}"></i>
            </button>
        </div>
    `;
}

function updateSelectedFoodFavoriteButton(name) {
    const btn = document.getElementById("selected-food-fav-btn");
    if (!btn) return;
    const isFavorite = state.favoriteFoods.includes(name);
    btn.innerHTML = `<i class="fas fa-star"></i> ${isFavorite ? "Remove Favorite" : "Save Favorite"}`;
}

function toggleFavoriteSelectedFood() {
    if (!state.selectedFood) return;
    toggleFavoriteFoodByName(state.selectedFood.name, true);
}

function toggleFavoriteFoodByName(name, keepSelected = false) {
    if (state.favoriteFoods.includes(name)) {
        state.favoriteFoods = state.favoriteFoods.filter(item => item !== name);
        showToast("Removed from favorites.", "info");
    } else {
        state.favoriteFoods = [name, ...state.favoriteFoods.filter(item => item !== name)].slice(0, 8);
        showToast("Saved to favorites! ⭐", "success");
    }
    saveState();
    if (keepSelected) updateSelectedFoodFavoriteButton(name);
    renderQuickFoodPanels();
}

function copyYesterdayMeals() {
    const yesterday = getDateKey(-1);
    const todaysDate = getDateKey();
    const yesterdayMeals = state.meals.filter(meal => meal.date === yesterday);

    if (!yesterdayMeals.length) {
        showToast("No meals found for yesterday.", "info");
        return;
    }

    const clones = yesterdayMeals.map(meal => ({
        ...meal,
        date: todaysDate,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    }));

    state.meals.push(...clones);
    updateStreak();
    saveState();
    updateDashboard();
    updateMealLogUI();
    renderQuickFoodPanels();
    showToast("Yesterday's meals copied to today.", "success");
}

function renderHydrationPanels() {
    const count = getWaterToday();
    const pct = Math.min(Math.round((count / state.waterGoal) * 100), 100);
    const status = document.getElementById("hydration-status");
    const reminders = document.getElementById("hydration-reminders");
    if (!status || !reminders) return;

    const remaining = Math.max(state.waterGoal - count, 0);
    const statusText = count >= state.waterGoal ? "Hydration goal completed. Great job." : `${remaining} more glass${remaining === 1 ? "" : "es"} to go today.`;
    status.innerHTML = `
        <div class="hydration-state">
            <strong>${pct}% complete</strong>
            <p>${statusText}</p>
            <div class="hydration-meter">
                <div class="hydration-meter-fill" style="width:${pct}%"></div>
            </div>
        </div>
        <div class="hydration-state">
            <strong>Best rhythm</strong>
            <p>Try 1 glass in the morning, 2 by lunch, 2 by evening, and the rest before dinner.</p>
        </div>
    `;

    const reminderItems = [
        { title: "After waking up", desc: "Start the day with a glass of water." },
        { title: "Before meals", desc: "A small glass can help you stay mindful of hunger." },
        { title: "During study or work", desc: "Keep a bottle near you for easy sipping." },
    ];
    reminders.innerHTML = reminderItems.map(item => `
        <div class="insight-item">
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
        </div>
    `).join("");
}

function renderMoodSummary() {
    const container = document.getElementById("mood-summary");
    if (!container) return;

    const recent = [...state.moodLog].slice(-7);
    if (!recent.length) {
        container.innerHTML = `
            <div class="snapshot-item">
                <strong>No mood data yet</strong>
                <p>Log your mood to see patterns between energy and food habits.</p>
            </div>
        `;
        return;
    }

    const avgEnergy = (recent.reduce((sum, entry) => sum + entry.energy, 0) / recent.length).toFixed(1);
    const moodCounts = recent.reduce((acc, entry) => {
        acc[entry.mood] = (acc[entry.mood] || 0) + 1;
        return acc;
    }, {});
    const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "okay";

    container.innerHTML = `
        <div class="snapshot-item">
            <strong>Average energy</strong>
            <p>${avgEnergy}/10 over your recent entries.</p>
        </div>
        <div class="snapshot-item">
            <strong>Most common mood</strong>
            <p>${capitalize(topMood)} has appeared the most lately.</p>
        </div>
        <div class="snapshot-item">
            <strong>Simple tip</strong>
            <p>Keep notes short and honest. Over time, it becomes easier to spot food and mood patterns.</p>
        </div>
    `;
}

function initDataImport() {
    const input = document.getElementById("import-data-input");
    if (!input || input.dataset.ready === "true") return;
    input.dataset.ready = "true";
    input.addEventListener("change", handleImportData);
}

function triggerImportData() {
    document.getElementById("import-data-input")?.click();
}

function handleImportData(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            state = { ...state, ...parsed };
            ensureStateIntegrity();
            saveState();
            showToast("Data imported successfully! 📥", "success");
            setTimeout(() => location.reload(), 700);
        } catch (error) {
            showToast("That file could not be imported.", "error");
        } finally {
            event.target.value = "";
        }
    };
    reader.readAsText(file);
}

function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast(successMessage, "success"))
            .catch(() => fallbackCopyText(text, successMessage));
    } else {
        fallbackCopyText(text, successMessage);
    }
}

function fallbackCopyText(text, successMessage) {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast(successMessage, "success");
}

function escapeSingleQuotes(text) {
    return String(text).replace(/'/g, "\\'");
}

// ===== FAB =====
function initFAB() {
    document.getElementById("fab-btn").addEventListener("click", () => {
        navigateTo("meal-tracker");
        setTimeout(() => document.getElementById("food-search").focus(), 300);
    });
}

// ===== Toast Notifications =====
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    const icons = { success: "fa-check-circle", error: "fa-exclamation-circle", info: "fa-info-circle" };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("hiding");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ===== Notification Button =====
document.addEventListener("DOMContentLoaded", () => {
    const notifBtn = document.getElementById("notification-btn");
    if (notifBtn) {
        notifBtn.addEventListener("click", () => {
            if (state.preferences && !state.preferences.showTips) {
                showToast("Enable daily tips in Settings to use this feature.", "info");
                return;
            }
            showRandomTip();
            document.getElementById("tip-banner").classList.remove("hidden");
            showToast("💡 New tip loaded!", "info");
        });
    }
});

// ===== Helpers =====
function getDateKey(offsetDays = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split("T")[0];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== Keyboard Shortcuts =====
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("recipe-modal").style.display = "none";
        document.querySelectorAll(".search-dropdown").forEach(d => d.classList.remove("active"));
        document.getElementById("sidebar").classList.remove("mobile-open");
    }

    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        navigateTo("meal-tracker");
        setTimeout(() => document.getElementById("food-search")?.focus(), 120);
    }
});
