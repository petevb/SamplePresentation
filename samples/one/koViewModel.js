var reservationData = { 
    name: "Bob", 
    room: 229 
};

var ReservationViewModel = function(data) {
    this.name = ko.observable(data.name);
    this.room = ko.observable(data.room);
    this.display = ko.computed(function() {
        return this.name() + " (" + this.room()  + ")";
    }, this);
};


ko.applyBindings(new ReservationViewModel(reservationData));