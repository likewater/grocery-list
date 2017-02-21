$(document).ready(function() {
  debugger;
  $("#groceries").submit(function() {
    var listItems = ["item1", "item2", "item3", "item4", "item5"];
    //var listItems = [ ];
    listItems.append(function(list){
      $("#red").text(list);
      alert(listItems);
    });


    $("#groceries").show();
    event.preventDefault();
  });
});
