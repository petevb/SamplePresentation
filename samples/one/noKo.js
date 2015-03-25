// "vm"
var reservation = { name: "Bob", room: 229 };

// get the html div by ID and populate from the VM
$("#name").text(reservation.name);

// observe changes and bind to VM
$("#nameEdit").val(reservation.name).change(function() {
    reservation.name = this.value;
    $("#name").text(reservation.name);
});
