$(document).ready(function() {
debugger;
  $("#groceries").submit(function() {
    var listItems = ["item1", "item2", "item3", "item4", "item5"];

    listItems.forEach(function(list){
      alert($("input#" + list).val());
    
    });

    $("#groceries").hide();
    event.preventDefault();
  });
});
