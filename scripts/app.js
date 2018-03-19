console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP

  $('.first_name').text(data.first_name);

  $('.occupation').text(data.occupation);

  $('.location').text(data.location);


// var rand = [];
// for(var i = 0; i<=data.length; i++){
// if (i === data.qualities){
// 	rand.push(data.qualties[i]);
// }
// }

// $('qualities').text(data.qualities[i]);

//var rand = data[Math.floor(Math.random() * data.length)];



// $('.firstSib').text(data.siblings[0].first_name).text(data.siblings[0].age);
// $('.secondSib').text(data.siblings[1].first_name);
// $('.thirdSib').text(data.siblings[2].first_name, data.siblings[2].age);
// $('.fourthSib').text(data.siblings[2].first_name, data.siblings[2].age);
//probably want us to use .child[1]to select sibling.

$('img').attr("src", "data.profile_image");

})
