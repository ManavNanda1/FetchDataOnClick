$(document).ready(function() {
  

  $('#SubmitBtn').on('click',function() {
    var name = $('#name').val();
    var subject = $('#email').val();
    var password = $('#password').val();
    var newname = $('#NewName').val();
    var rembtn = '<button id="edit" class="btn btn-warning ms-3"> Edit </button><button id="remove" class="btn btn-danger ms-4">Remove</button>';
    table.row.add([name, subject, password,newname , rembtn]).draw(false);
  });

  // Add a click event listener to the remove button
  $('#myTable').on('click', '#remove', function() {
    // Get the row containing the clicked remove button
    var row = $(this).closest('tr');
    // Remove the row from the DataTable
    table.row(row).remove().draw(false);
  });

  // Add a click event listener to the edit button
$('#myTable').on('click', '#edit', function() {
  // Get the row containing the clicked edit button
  var row = $(this).closest('tr');
  // Extract the values of the row's cells
  var id = row.find('td:eq(0)').text();
  var name = row.find('td:eq(1)').text();
  var target = row.find('td:eq(2)').text();
  var bodyPart = row.find('td:eq(3)').text();
  var gifUrl = row.find('td:eq(4)').text();
  // Set the input fields of the modal with the extracted values
  $('#id').val(id);
  $('#name').val(name);
  $('#target').val(target);
  $('#bodyPart').val(bodyPart);
  $('#gifUrl').val(gifUrl);
  // Show the modal
  $('#dark-form-modal').modal('show');
});


    $("#GenerateData").on('click',()=>{
      $.ajax({
        url: 'https://manavnanda1.github.io/Task3_Bootstrap_Manav_Nanda/Manav_nanda_Task_3(Bootstrap)/output.json',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          let tabledata = "";
          $.each(response, function (index, values) {
            tabledata +=
              "<tr><td data-label='id'>" +
              values.id +
              "</td><td data-label='name'>" +
              values.name +
              "</td><td data-label='target'>" +
              values.target +
              "</td><td data-label='bodyPart'>" +
              values.bodyPart +
              "</td><td data-label='gifUrl'><img src='"+values.gifUrl+ "' width=100>" +
              
              "</td></tr>";
          });
          $("#myTable tbody").append(tabledata);
          $('#myTable').DataTable();
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
    })
  
});

