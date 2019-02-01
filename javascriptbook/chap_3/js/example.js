var hotel = {
    name: 'Park',
    room_rate: 240,
    discount: 15,
    offer_rate: function() {
        var special_rate = this.room_rate * ((100 - this.discount) / 100);
        return special_rate;
    }
};

week_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satauday'];
months_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function expire_msg(today) {
    var week_from_today = new Date(today.getTime() + 7 *24 * 60 *60 * 1000);

    var day = week_name[week_from_today.getDay()];
    var date = week_from_today.getDate();
    var month = months_name[week_from_today.getMonth()];
    var year = week_from_today.getFullYear();

    var msg = '';
    msg = 'Offer expires next ' + day + '<br>';
    msg += '(' + date + ' ' + month + ' ' + year + ')';
    return msg;
}

// show the hotel name
var el_name = document.getElementById('hotelName');
el_name.textContent = hotel.name.toUpperCase();

// show the original room rate
var el_room_rate = document.getElementById('roomRate');
el_room_rate.textContent = '$' + hotel.room_rate.toFixed(2);

// show the discount rate
var el_special_rate = document.getElementById('specialRate');
el_special_rate.textContent = '$' + hotel.offer_rate();

// show the expiration date
var today = new Date();
var el_offer_ends = document.getElementById('offerEnds');
el_offer_ends.innerHTML = expire_msg(today);