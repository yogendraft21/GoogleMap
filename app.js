 /*Map Initialization*/
 var map = new MapmyIndia.Map('map', {center: [28.09, 78.3], zoom: 5, search: false});
          
 /*direction plugin initialization*/
   var direction_option={
       map:map,
       end:{label:'India Gate, Delhi',geoposition:"1T182A"},
       callback:function(data){console.log(data);}
   }
//    var Lmarker = L.marker([25.61, 74.23]).addTo(map);
   var direction_plugin=MapmyIndia.direction(direction_option);  
   // direction_plugin.remove(); 