$(document).ready(function(){Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ","prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");var e=Parse.User.current();e.fetch({success:function(e){var l=e.get("currentChallenge");$("#nameofchallenge").text(l);var a=Parse.Object.extend("Challenges"),c=new Parse.Query(a);c.equalTo("challengeType",l),c.find({success:function(e){for(var l=0;l<e.length;l++){var a=e[l];"easy"===a.get("difficulty")?$(".easyList").append('<li class="row"><a class="challengesButton col-sm-1" id="'+a.id+'"</" href="#"></a><p class="col-sm-offset-1">'+a.get("challengeName")+"</p></li>"):"medium"===a.get("difficulty")?$(".mediumList").append('<li class="row"><a class="challengesButton col-sm-1" id="'+a.id+'"</" href="#"></a><p class="col-sm-offset-1">'+a.get("challengeName")+"</p></li>"):"hard"===a.get("difficulty")&&$(".hardList").append('<li class="row"><a class="challengesButton col-sm-1" id="'+a.id+'"</" href="#"></a><p class="col-sm-offset-1">'+a.get("challengeName")+"</p></li>")}},error:function(e){alert("Error: "+e.code+" "+e.message)}})},error:function(e,l){}}),$("ul").on("click",".challengesButton",function(){var l=jQuery(this).attr("id"),a=Parse.Object.extend("Challenges"),c=new Parse.Query(a);c.equalTo("objectId",l),c.find({success:function(a){e.set("currentChallengeDifficulty",a[0].get("difficulty")),e.set("currentChallengeType",a[0].get("challengeType")),e.set("currentChallengeActive",l),e.save(null,{success:function(e){location.href="challengeQuestions.html"},error:function(e,l){alert("Failed to create new object, with error code: "+l.message)}})}})})});