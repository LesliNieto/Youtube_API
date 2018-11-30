function search(){
  var searchInput = $("#query").val();
  $.getJSON ('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchInput
    +'&maxResults=10&key=AIzaSyDXPy1WWSZ1Sk55U3w3nr8-D64cF8otsag',
    function(response){
    var results = response.items
    $.each(results, function(key, element){
      if(element.id.kind == "youtube#video"){
        $("#video").append(
          '<iframe id="player"  src=https://www.youtube.com/embed/'
          +element.id.videoId
          +'></iframe><br>'
          +'<h4 >'+element.snippet.title+'</h4>'
          +'<pre> Channel: '+element.snippet.channelTitle+'</pre>'
        )
      };
    });
  });
 $("#video").html("");
};




