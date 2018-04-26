var RecipeApp = function () {

    //var recipes = [
       //  { 
        //     name: 'Best Chicken Soup!', 
          //   image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
          //   ingredients: [
          //       { name: 'whole chicken' },
         //        { name: 'medium carrots'},
         //        { name: 'onions' },
         //    ] 
        // }
    //];

    var $recipes = $('.recipes');
    //id's for recipes
    var recId = 0;
    //id's for ingredients
    var ingId = 0;

    var createRecipe = function(name, image){
        var recipe = {
            name: name,
            image: image, 
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId ++; 

        recipes.push(recipe);
    };

    var createIngredients = function(ingredientsName,addToRespThatInThisIndex){
        var newIngred = {
            name :ingredientsName,
            id :ingId
        }
        ingId ++;
        recipes.push(recipe);
        addToRespThatInThisIndex.ingredients.push(newIngred);

    };

    var _getIngredients = function(recipe){
        //add code
        return "";
    };


    var _findRespById = function (id){
        for (var i = 0; i < recipes.length; i += 1) {
            if (recipes[i].id === id) {
              return recipes[i];
            }
          }

    }


    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for(var i = 0; i < recipes.length; i ++){
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(); //add code

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
                        '<input type="text" class="ingredientName" id="basic-url" aria-describedby="basic-addon3">' +
                        
                    '</div>' +
                    '<ul class="ingredients">' + ingredients + '</ul>'+
                '</div>'
            );
        }
    };



    $('.recipes row').on('click','add-ingredients input-group-text', function () {
        var ingredientsName=$(this).closest('div').find('.ingredientName').val();
        var addToRespNumber=_findRespById($(this).closest('.add-ingredients input-group-text').data().id);
        app.createIngredients(ingredientsName,addToRespNumber); 
        app.renderPosts();
      });


    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        // createIngredients: createIngredients
    }
};

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function(){
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});


var recipes = [];

/////event add ingredient
//'.add-ingredients' does not exist at this point. instead write it like this
//$('.recipes').on('click', '.add-ingredients', function(){})
// .recipes exists from the beginning 
$('add-ingredients input-group-text').on('click', function(){
    //collect input text
    var name = $('#recipe-name').val(); 
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});

