var RecipeApp = function() {

    var recipes = [{
        name: 'Best Chicken Soup!',
        image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
        id: 0,
        ingredients: [
            { name: 'whole chicken' },
            { name: 'medium carrots' },
            { name: 'onions' },
        ]

    }];



    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 1;

    //id's for ingredients
    var ingId = 1;

    var createRecipe = function(name, image) {
        var recipe = {
            name: name,
            image: image,
            id: recId,
            ingredients: [],

        };

        //keeps recipe ids unique 
        recId++;

        recipes.push(recipe);
    };

    var createIngredients = function(ingredientN, currentBtn) {
        //add code
        // debugger
        console.log(currentBtn)

        var $clickedPost = $(currentBtn).closest('.recipe');
        var id = $clickedPost.data().id;
 /// Id and index are not the same thing!

        let ingredient = { name: ingredientN };

        recipes[id].ingredients.push(ingredient);

        ingId++; //#################

    };


    var _getIngredients = function(recipe) {
        //add code
        return "";
    };

    var renderRecipes = function() {
        //empty recipes div
        $recipes.empty();

        for (var i = 0; i < recipes.length; i++) {
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(); //add code
            // debugger
            // The loop should have been a part of the getIngredients function 
            for (let z = 0; z < recipes[i].length; z++) {
                ingredients = recipes[i].ingredients[z]
            }




            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' +
                '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                '<img class="recipe-img" src="' + recipe.image + '"/>' +
                '<hr>' +
                '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                '<span class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
                '</div>' +
                '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +

                '</div>' +
                '<ul class="ingredients">' + ingredients + '</ul>' +
                '</div>'
            );
        }
    };

    return {
        recipes: recipes,
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    }
};

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function() {
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});
$('.recipes').on('click', '.add-ingredients ', function() {


    //###########################
    //collect input text
    console.log('add clicked')

    var ingredientName = $(this).closest('.form-control').val();

    //add recipe to array and render
    console.log(this)
    app.createIngredients(ingredientName, this);

})

// stoped placing the right ingredientName in the right recipe .
