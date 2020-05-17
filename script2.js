$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".chosen_select_L").chosen({
    disable_search_threshold: 10,
    no_results_text: "Oops, nothing found!"
  });
  $(".chosen_select_M").chosen({
    disable_search_threshold: 10,
    no_results_text: "Oops, nothing found!"
  });
  
  $(document).ready(function() {
    $('#selectall').click(function(event) {
      if (this.checked) {
        $('.check').each(function() {
          this.checked = true;
        });
      } else {
        $('.check').each(function() {
          this.checked = false;
        });
      }
    });
  });
  
  function addRow(dataTable) {
    var table = document.getElementById(dataTable);
    var rowCount = table.rows.length;
    if (rowCount < 11) {
      $(".chosen_select_L").chosen('destroy');
      $(".chosen_select_M").chosen('destroy');
      var row = table.insertRow(rowCount);
      var colCount = table.rows[1].cells.length;
      for (var i = 0; i < colCount; i++) {
        var newcell = row.insertCell(i);
  
        newcell.innerHTML = table.rows[1].cells[i].innerHTML;
      }
    } else {
      document.getElementById('addRow').disabled = true;
  
    }
    $(".chosen_select_L").chosen();
    $(".chosen_select_M").chosen();
    document.getElementById('submitIngredient').disabled = true;
    var forms = document.getElementsByClassName('needs-validation');
    document.getElementById('submitIngredient').disabled = true;
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.classList.remove('was-validated');
    });
    document.getElementById('deleteRow').disabled = false;


  }
  
  function deleteRow(dataTable) {
    var table = document.getElementById(dataTable);
    var rowCount = table.rows.length;
    for (var i = 2; i < rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
      if (null != chkbox && true == chkbox.checked) {
        if (rowCount <= 1) {
          alert("Cannot Remove all fields.");
          break;
        }
        table.deleteRow(i);
        rowCount--;
        i--;
        
      }
      if(table.rows.length == 2){
        document.getElementById('deleteRow').disabled = true;
      }
      document.getElementById('addRow').disabled = false;
    }
  }
