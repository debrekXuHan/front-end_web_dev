// template for objects
function hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.check_avail = function() {
        return (this.rooms - this.booked);
    };
}

// create two different objects
var quay_hotel = new hotel('Quay', 40, 25);
var park_hotel = new hotel('Park', 120, 77);

var detail1 = quay_hotel.name + ' rooms: ' + quay_hotel.check_avail();
var el_hotel1 = document.getElementById('hotel1');
el_hotel1.textContent = detail1;

var detail2 = park_hotel.name + ' rooms: ' + park_hotel.check_avail();
var el_hotel2 = document.getElementById('hotel2');
el_hotel2.textContent = detail2;