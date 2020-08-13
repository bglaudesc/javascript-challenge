// from data.js
var tableData = data;
//document.querySelector("tbody").innerHTML=row.datetime
//d3.select("tbody").html(row.datetime)
var tbody = d3.select("tbody");

function pop_table(arr){
    tbody.html("");
    for (var row of arr) {
        var tr = tbody.append("tr");
        tr.append("td").text(row.datetime);
        tr.append("td").text(row.city);
        tr.append("td").text(row.state);
        tr.append("td").text(row.country);
        tr.append("td").text(row.shape);
        tr.append("td").text(row.durationMinutes);
        tr.append("td").text(row.comments);
    
    };
}

function run_filter(){
    d3.event.preventDefault();
    var userInput = d3.select("#datetime").property("value");
    var filterData = tableData.filter(item => item.datetime === userInput);
    // console.log(d3.event);
    pop_table(filterData);
};


d3.select("#filter-btn").on("click", run_filter); 

pop_table(tableData);
// YOUR CODE HERE!
