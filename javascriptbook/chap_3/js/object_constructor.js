// set up a new object
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.check_avail = function() {
    return (this.rooms - this.booked);
};

var el_hotelname = document.getElementById('hotelName');
el_hotelname.textContent = hotel.name;

var el_rooms = document.getElementById('rooms');
el_rooms.textContent = hotel.check_avail();