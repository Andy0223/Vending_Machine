function initMap() {
    var markers = [];
    var infoWindows = [];
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        }, {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        }, {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        }, {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }], {
            name: '????????????'
        });
    //???????????????
    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var origin = {
            lat: lat,
            lng: lng
        };


        // ???????????????
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: origin,
            gestureHandling: 'cooperative',
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite',
                    '????????????'
                ]
            }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('????????????', styledMapType);
        map.setMapTypeId('roadmap');


        var marker = new google.maps.Marker({
            position: origin,
            map: map
        });

        //info windows????????????????????????
        var info_config = [
            //?????????1
            '<div>' +
            '<h1 id="first" class="firstHeading">?????????1</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????2
            '<div>' +
            '<h1 id="second" class="secondHeading">?????????2</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter2">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong2"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????3
            '<div>' +
            '<h1 id="third" class="thirdHeading">?????????3</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter3">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong3"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????4
            '<div>' +
            '<h1 id="fourth" class="fourthHeading">?????????4</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????5
            '<div>' +
            '<h1 id="fifth" class="fifthHeading">?????????5</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????6
            '<div>' +
            '<h1 id="sixth" class="sixthHeading">?????????6</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????7
            '<div>' +
            '<h1 id="seven" class="sevenHeading">?????????7</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????8    
            '<div>' +
            '<h1 id="eight" class="eightHeading">?????????8</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????9    
            '<div>' +
            '<h1 id="nine" class="nineHeading">?????????9</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
            //?????????10    
            '<div>' +
            '<h1 id="ten" class="tenHeading">?????????10</h1>' +
            '<div class="bodyContent">' +
            '<p><b>&nbsp;???????????????</b>' +
            '<div><img src="img/unfav.svg"><img src="img/route.svg">' +
            '<img src="img/warning.svg" data-toggle="modal" data-target="#exampleModalCenter">' +
            '<img src="img/list.svg" class="btn-btn-primary" data-toggle="modal" data-target="#exampleModalLong"></div>' +
            '<div><p>????????????</p><p>????????????</p><p>????????????</p><p>????????????</p></div>' +
            '</p>' +
            '</div>' +
            '</div>',
        ];

        //???????????? marker ?????????
        var marker_config = [{
                position: {
                    lat: 25.038000,
                    lng: 121.431927
                },
                map: map,
                icon: 'img/marker.png',
                title: '1'
            }, {
                position: {
                    lat: 25.037342,
                    lng: 121.430894
                },
                map: map,
                icon: 'img/marker.png',
                title: '2'
            }, {
                position: {
                    lat: 25.036023,
                    lng: 121.432333
                },
                map: map,
                icon: 'img/marker.png',
                title: '3'
            }, {
                position: {
                    lat: 25.038759,
                    lng: 121.431430
                },
                map: map,
                icon: 'img/marker.png',
                title: '4'
            }, {
                position: {
                    lat: 25.036061,
                    lng: 121.429154
                },
                map: map,
                icon: 'img/marker.png',
                title: '5'
            }, {
                position: {
                    lat: 25.035939,
                    lng: 121.430465
                },
                map: map,
                icon: 'img/marker.png',
                title: '6'
            }, {
                position: {
                    lat: 25.034948,
                    lng: 121.433882
                },
                map: map,
                icon: 'img/marker.png',
                title: '7'
            }, {
                position: {
                    lat: 25.038934,
                    lng: 121.431146
                },
                map: map,
                icon: 'img/marker.png',
                title: '8'
            }, {
                position: {
                    lat: 25.035079,
                    lng: 121.434370
                },
                map: map,
                icon: 'img/marker.png',
                title: '9'
            },
            {
                position: {
                    lat: 25.036645,
                    lng: 121.430537
                },
                map: map,
                icon: 'img/marker.png',
                title: '10'
            }
        ];

        //?????? Info window ??????

        info_config.forEach(function(e, i) {
            infoWindows[i] = new google.maps.InfoWindow({
                content: e
            });

            //??????????????????????????????????????????????????????????????????????????????
            google.maps.event.addListener(infoWindows[i], 'domready', function() {
                _content(i);
            });
        });




        //?????? marker
        marker_config.forEach(function(e, i) {
            markers[i] = new google.maps.Marker(e);
            markers[i].setMap(map);
            markers[i].addListener('click', function() {
                infoWindows[i].open(map, markers[i]);
            });
        });

        var clickHandler = new ClickEventHandler(map, origin);

        // Add a style-selector control to the map.
        var styleControl = document.getElementById('style-selector-control');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Set the map's style to the initial value of the selector.
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({
            styles: styles[styleSelector.value]
        });

        // Apply new JSON when the user selects a different style.
        styleSelector.addEventListener('change', function() {
            map.setOptions({
                styles: styles[styleSelector.value]
            });
        });


    });

}

var ClickEventHandler = function(map, origin) {
    this.origin = origin;
    this.map = map;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRenderer = new google.maps.DirectionsRenderer;
    this.directionsRenderer.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);

    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
};

ClickEventHandler.prototype.handleClick = function(event) {
    console.log('You clicked on: ' + event.latLng);
    // If the event has a placeId, use it.
    if (event.placeId) {
        console.log('You clicked on place:' + event.placeId);

        // Calling e.stop() on the event prevents the default info window from
        // showing.
        // If you call stop here when there is no placeId you will prevent some
        // other map click event handlers from receiving the event.
        event.stop();
        this.calculateAndDisplayRoute(event.placeId);
    }
};

//????????????
ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
    var me = this;
    this.directionsService.route({
        origin: this.origin,
        destination: {
            placeId: placeId
        },
        travelMode: 'WALKING'
    }, function(response, status) {
        if (status === 'OK') {
            me.directionsRenderer.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};