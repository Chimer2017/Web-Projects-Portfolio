$(document).ready(function(){
  $('#searchBtn').click(function() {
    var input = $('#searchInput').val();
    $.ajax({
      url: ('https://api.giphy.com/v1/gifs/search?api_key=MjHzqtSG1uyWT3ACLbm2heFdUcKt61dt&q=' + input + '&limit=25&offset=0&rating=G&lang=en'),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        var gifObject = document.createElement("iframe");
        gifObject.src = response.data[0].embed_url;
        gifObject.frameBorder = 0;
        $('.gif-list')[0].append(gifObject);
      },
      error: function() {
   $('.Errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
