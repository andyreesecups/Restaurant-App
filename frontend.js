$(document).ready(function(){
  //confirm your js!
  console.log("JS is linked and ready!");
  //on click of get data button, populate our tables with our DB data.
    //AJAX our DB with a GET request to a route we've set up.
    $.ajax({
      url:'/tables',
      method:'GET'
    }).done(function(res){
      //with the received response, do the following.

      //always check your data so you can parse through it.
      console.log(res);

      //delete old data from the table to avoid a long list of duplicates on your webpage.
      $('#clearTable').html('');

      //placeholder value to hold our upcoming table data.
      let dataToInsert = "";

      //loop through returned results of our ajax call and create table rows.
      for(let i=0; i<res.length; i++){
        dataToInsert += '<tr>' + 
          '<th>' + res[i].customerId + '</th>' + 
          '<th>' + res[i].name + '</th>' +
          '<th>' + res[i].phoneNum + '</th>' +
          '<th>' + res[i].email+ '</th>' +
          '</tr>'
        ;
      };//end loop.

      //once loop is finished, shove all that data onto the page.
      $('#showRes').html(dataToInsert);
    });//end .done
});//End document.ready