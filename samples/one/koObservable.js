var reservation = { 
    name: ko.observable("Bob"), 
    room: 229 
};

reservation.display = ko.computed(function() {
    return reservation.name() + " (" + reservation.room + ")";
});
ko.applyBindings(reservation);