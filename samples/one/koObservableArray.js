// view model from before
var Reservation = function(data) {
    this.name = ko.observable(data.name);
    this.room = ko.observable(data.room);
    this.display = ko.computed(function() {
        return this.name() + " (" + this.room() + ")";
    }.bind(this));
};

// create an observable array of reservations
var ViewModel = function() {
    this.reservations = ko.observableArray([ 
        new Reservation({name: "Bob", room: 229}), 
        new Reservation({name: "John", room: 404}), 
        new Reservation({name: "Alice", room: 128})
    ]);

    this.makeBooking = function() {
        this.reservations.push(new Reservation({ name: "New", room: 0 }));
    };
};

ko.applyBindings(new ViewModel());