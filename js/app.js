/**
 * Created by isaac on 12/8/14.
 */

// GLOBALS
var vehicleCount = 0;
var vehicles = [];

$(function start () {
    // ready set go

    // add button action
    $("#new-vehicle-add").click(addVehicle);
    $("#process-vehicle-list").click(doMagic);

});


function addVehicle () {
    var vehicle = {};

    vehicle.make = $("#new-vehicle-make").val();
    vehicle.year = $("#new-vehicle-year").val();
    vehicle.gvwr = $("#new-vehicle-gvwr").val();

    // create the table row
    var newRow = $("<tr></tr>");
    var makeCell = $("<td></td>");
    var yearCell = $("<td></td>");
    var gvwrCell = $("<td></td>");

    makeCell.text(vehicle.make);
    yearCell.text(vehicle.year);
    gvwrCell.text(vehicle.gvwr);

    newRow.append(makeCell);
    newRow.append(yearCell);
    newRow.append(gvwrCell);

    // add the new row to the table
    $("#vehicles-table tbody").append(newRow);

    // store the new vehicle in the list of vehicles
    vehicles.push(vehicle);
    vehicleCount++;

    // clear the form
    $("#new-vehicle-form input").val("");
}


function doMagic () {
    // show the table of modifications
    $("#vehicle-rules-table-container").removeClass("hidden");

    $.each(vehicles, function (index, vehicle) {
        vehicle.rules = findTheRules(vehicle);

        var newRow = $("<tr></tr>");
        var makeCell = $("<td></td>");
        var yearCell = $("<td></td>");
        var gvwrCell = $("<td></td>");
        var rulesCell = $("<td></td>");

        makeCell.text(vehicle.make);
        yearCell.text(vehicle.year);
        gvwrCell.text(vehicle.gvwr);
        rulesCell.text(vehicle.rules);

        newRow.append(makeCell);
        newRow.append(yearCell);
        newRow.append(gvwrCell);
        newRow.append(rulesCell);

        $("#vehicle-rules-table tbody").append(newRow);
    });
}


function findTheRules (vehicle) {
    return "scrap it and buy another one";
}
