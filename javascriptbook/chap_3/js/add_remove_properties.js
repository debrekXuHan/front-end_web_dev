// set up the object
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var el_name = document.getElementById('hotelName');
el_name.textContent = hotel.name;

var el_pool = document.getElementById('pool');
el_pool.className = hotel.pool;
var el_gym = document.getElementById('gym');
el_gym.className = hotel.gym;