// create an object
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    check_avail: function() {
        return (this.rooms - this.booked);  // "this" means attribute inside the object
    }
};

var el_hotelname = document.getElementById('hotelName');
el_hotelname.textContent = hotel.name;

var el_rooms = document.getElementById('rooms');
el_rooms.textContent = hotel.check_avail();