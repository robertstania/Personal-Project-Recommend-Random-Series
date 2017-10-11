$(document).ready(function() {
  //Refactored solution includes functionality to enter an id and retrieve an Anime image with a specific id(number)
  $('.taco').on('click', function() {
    var specificNum = $("#custom_id").val();
    if (!specificNum) {
      specificNum = randomNumber();
    }
    $.get("https://kitsu.io/api/edge/anime/" + specificNum, function(data) {
      console.log(data);
      if (data.data.attributes.nsfw === false) {
        $("#content").empty();
        var img = $('<img/>')
        let title = $("<h1></h1>");
        let rated = $("<p></p>");
        let episode = $("<p></p>");
        let synopsis = $("<p class='synop'></p>");

        img.addClass("size");
        img.attr("src", data.data.attributes.posterImage.original);
        title.text(data.data.attributes.canonicalTitle);
        rated.text("Rated: " + data.data.attributes.ageRating);
        episode.text("Episodes: " + data.data.attributes.episodeLength);
        synopsis.text(data.data.attributes.synopsis);

        $("#content").append(img);
        $("#content").append(title);
        $("#content").append(rated);
        $("#content").append(episode);
        $("#content").append(synopsis);

      }
    })
  });

  function randomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
  }
})

//Original solution using raw javascript
//     request.open('GET', 'https://kitsu.io/api/edge/anime/10000');
//
//     request.onreadystatechange = function() {
//       if (this.readyState === 4) {
//         console.log('Status:', this.status);
//         console.log('Headers:', this.getAllResponseHeaders());
//         console.log(JSON.parse(this.responseText));
//         var data = JSON.parse(this.responseText);
//         console.log(data.data.attributes.nsfw);
//         if(data.data.attributes.}nsfw === false) {
//             // var img = $("https://media.kitsu.io/anime/poster_images/10000/medium.jpg?1414991120");
//             img.attr("src", data.data.attributes.posterImage.medium);
//             img.addClass("img");
//           $("body").append(img);
//         }
//       }
//     };
//     request.send();
//   })
//   });
// });
// var request = new XMLHttpRequest();
