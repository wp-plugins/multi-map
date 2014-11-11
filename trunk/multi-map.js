var muMap = {
    mmTag: "multimap",
    mmAw: null,
    mmAh: null,
    mmZm: null,
    mmAA: new Array(),
    mmLt: null,
    mmLn: null,
    mmMT: null,
    mmID: "googleMultiMaps",
    mmCn: 0,
    map: null,
    geocoder: null,
    infoWindow: null,
    initMMVars: function () {
        this.mmAh ? true : this.mmAh = "300px";
        this.mmAw ? true : this.mmAw = "100%";
        this.mmZm ? this.mmZm = parseInt(this.mmZm) : this.mmZm = 13;
        this.mmLt ? this.mmLt = parseFloat(this.mmLt) : this.mmLt = 48; //42.682462;
        this.mmLn ? this.mmLn = parseFloat(this.mmLn) : this.mmLn = 15; //8.332983;
        this.mmMT ? true : this.mmMT = "ROADMAP";
    },
    trimNoAddressData: function () {
        var k = 0;
        while (this.mmAA[k]) {
            this.mmAA[k] = this.mmAA[k].replace(/^[\r\n]+|\.|[\r\n]+$/g, "");
            k++;
        }
    }, 
    decodeMMAddresses: function () {
        var i = 0;
        while (this.mmAA[i]) {
            this.geocoder.geocode({'address': this.mmAA[i]}, function(results, status) {
                //internal function appears to be out of scope 
                if (status == google.maps.GeocoderStatus.OK) {
                  muMap.map.setCenter(results[0].geometry.location);
                  var marker = new google.maps.Marker({
                      map: muMap.map,
                      position: results[0].geometry.location
                  });
                  google.maps.event.addListener(marker, 'click', function() {
                      muMap.infoWindow.setContent("<p style=\"width:160px;\">"+results[0].formatted_address+"</p>");
                      muMap.infoWindow.open(muMap.map,marker);
                  });
                } else {
                  console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
            i++;
        }
    }
}
    
jQuery(document).ready(function(jQuery){
    
        var idMap = null;
        
        jQuery(muMap.mmTag).each(function(){
            
            idMap = muMap.mmID+muMap.mmCn;
            var aembed ="<div id=\""+muMap.mmID+"\" style=\"";
            muMap.mmAw = jQuery(this).attr("data_width");
            muMap.mmAh = jQuery(this).attr("data_height");
            muMap.mmZm = jQuery(this).attr("data_zoom");
            muMap.mmLt = jQuery(this).attr("data_latitude");
            muMap.mmLn = jQuery(this).attr("data_longitude");
            muMap.mmMT = jQuery(this).attr("data_maptype");
            muMap.initMMVars();
            
            var addressString = jQuery(this).text().trim(); 
            muMap.mmAA = addressString.split(";");
            muMap.trimNoAddressData();
            aembed += "width:"+muMap.mmAw+";";
            aembed += " height:"+muMap.mmAh+";";
            aembed += "\"></div>";
            
            jQuery(this).html(aembed);
            var gMapsOptions = {
                zoom: muMap.mmZm,
                center: new google.maps.LatLng(muMap.mmLt, muMap.mmLn),
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false,
                overviewMapControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            muMap.map = new google.maps.Map(document.getElementById(muMap.mmID), gMapsOptions);
            muMap.geocoder = new google.maps.Geocoder();
            muMap.infoWindow = new google.maps.InfoWindow();
            muMap.decodeMMAddresses();
            muMap.mmCn++;
    });
});

