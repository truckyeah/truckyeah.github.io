/**
 * Created by isaac on 12/8/14.
 */

// GLOBALS
var vehicleTableIndex = 1;


$(function start () {
    // ready set go

    // add button action
    $("#new-vehicle-add").click(addVehicle);

});


function addVehicle () {
    var make = $("#new-vehicle-make").val();
    var year = $("#new-vehicle-year").val();
    var gvwr = $("#new-vehicle-gvwr").val();

    console.log("make:", make);
    console.log("year:", year);
    console.log("gvwr:", gvwr);
    console.log("");

    // create the table row
    var newRow = $("<tr></tr>");
    var indexCell = $("<td></td>");
    var makeCell = $("<td></td>");
    var yearCell = $("<td></td>");
    var gvwrCell = $("<td></td>");

    indexCell.text(vehicleTableIndex++);
    makeCell.text(make);
    yearCell.text(year);
    gvwrCell.text(gvwr);

    newRow.append(indexCell);
    newRow.append(makeCell);
    newRow.append(yearCell);
    newRow.append(gvwrCell);

    // add the new row to the table
    $("#vehicles-table tbody").append(newRow);

    // clear the form
    $("#new-vehicle-form input").val("");
}
