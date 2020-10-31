// function initMap() {
//     let coordinates = { lat:59.938769, lng:30.323045 },
//     // popupMapContent = '<div class="feedback-wrapper"></div>',
//     map = new google.maps.Map(document.getElementById('map'), {
//     center:coordinates}),

//     marker = new google.maps.Marker({
//         position: coordinates,
//         map: map,
//         // animation: google.maps.Animatoin.BOUNCE
//     });
// } 

// image = '../img/main/map-icecream.png'
// marker = new google.maps.Marker ({
//     position: coordinates,
//     map: map,
//     icon: image
// });


// let map = new google.maps.Map(document.getElementById('map'),
// {

// });



function initMap() {
    let pos = {lat:59.938769, lng:30.323045 };
    let opt = {
        center:pos,
        zoom:16,
    };
    let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
     myMap = new google.maps.Map(document.getElementById('map'), opt);

    let marker = new google.maps.Marker({
        position: pos,
        map:myMap, 
        title:"You hover me",
        // icon:image,
        icon:'map-icecream.png',
        // icon: '../img/main/map-icecream.png', NOT WORK
      });
    
}
