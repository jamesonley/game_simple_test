Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
         "src/components/tiledLevel.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		infc['info'] = new Info();
	});
    
    var map = Crafty.e("TiledLevel"); //Creates an entity with the "TiledLevel" component
    map.tiledLevel("./web/levels/level.json", "Canvas"); //Draw the level
    
});
	