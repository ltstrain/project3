// Personalized for London Strain
const instructorEmail = "london@example.com";

document.addEventListener("DOMContentLoaded", function(){
  const qBtn = document.getElementById("questions-btn");
  if(qBtn){
    qBtn.addEventListener("click", function(){
      alert("If you have questions, contact me at:\n" + instructorEmail);
    });
  }
});

function initMap(){
  try{
    const center = {lat:41.8781, lng:-87.6298};
    const map = new google.maps.Map(document.getElementById("map"), {
      center:center,
      zoom:12
    });

    const marker = new google.maps.Marker({position:center, map:map, title:"Center Marker"});
    const info = new google.maps.InfoWindow({content:"<strong>Center Marker</strong><br>Example info window."});
    marker.addListener("click", ()=>info.open(map, marker));

    const circle = new google.maps.Circle({
      strokeColor:"#FF0000",
      strokeOpacity:0.6,
      strokeWeight:2,
      fillColor:"#FF0000",
      fillOpacity:0.15,
      map:map,
      center:center,
      radius:3000
    });

    const pointA={lat:41.8858,lng:-87.6229};
    const pointB={lat:41.8719,lng:-87.6476};

    const markerA=new google.maps.Marker({position:pointA,map:map,title:"Point A"});
    const markerB=new google.maps.Marker({position:pointB,map:map,title:"Point B"});

    const routePath=new google.maps.Polyline({
      path:[pointA,pointB],
      geodesic:true,
      strokeOpacity:0.7,
      strokeWeight:4,
      map:map
    });

    const infoA=new google.maps.InfoWindow({content:"Point A"});
    const infoB=new google.maps.InfoWindow({content:"Point B"});
    markerA.addListener("click", ()=>infoA.open(map, markerA));
    markerB.addListener("click", ()=>infoB.open(map, markerB));

  }catch(err){
    console.error("initMap error:", err);
  }
}

window.initMap = initMap;
