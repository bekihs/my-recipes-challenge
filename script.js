var RecipeApp = function () {

    var recipes = [
        // { 
        //     name: 'Best Chicken Soup!', 
        //     image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
        //     ingredients: [
        //         { name: 'whole chicken' },
        //         { name: 'medium carrots'},
        //         { name: 'onions' },
        //     ] 
        // }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 0;

    //id's for ingredients
    var ingId = 0;

    var createRecipe = function (name, image) {
        var recipe = {
            name: name,
            image: image,
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId++;

        recipes.push(recipe);
    };

    var createIngredients = function (ingr, recipId) {
        //add code
        var recipe = _getIngredients(recipId)

        var ingrObj = {
            name: ingr,
            id: ingId
        }
        recipe.ingredients.push(ingrObj);
        console.log(recipes);
        ingId += 1;


    };
// The getIngredients function should return a string with the Ingredients HTML. 
    var _getIngredients = function (recipe) { // You made a function to get recipe by ID. The function is great but the name should change.
        
        //add code
        for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].id === recipe) {
                return recipes[i];
            }
        }

    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for (var i = 0; i < recipes.length; i++) {
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(recipe); //add code
            var ingredientsRend = '<li>' + ingredients + '</li>';
            //**************** STUCK HERE***********  trying to render the ingredients, it renders an LI of "undefined"
            //- The problem is that the get ingredients does the worng thing. 
            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' +
                '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                '<img class="recipe-img" src="' + recipe.image + '"/>' +
                '<hr>' +
                '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                '<span class="add-ingredients input-group-text" id="basic-addon3"><button class="btn btn-primary add-ingredient">Add Ingredients</button></span>' +
                '</div>' +
                '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +

                '</div>' +
                '<ul class="ingredients">'+ ingredientsRend + '</ul>' +
                '</div>'
            );
        }
    };



    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    }
};

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function () {
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();


    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});

//add ingredients
$('.recipes').on('click', '.add-ingredient', function () {
    var ingredientToAdd = $('#basic-url').val();
    var recipId = $(this).closest('.recipe').data().id;
    app.createIngredients(ingredientToAdd, recipId);
   // console.log(ingredientToAdd, recipId);
});
