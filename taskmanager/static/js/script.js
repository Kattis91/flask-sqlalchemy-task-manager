document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // modal initialization
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  
    // datepicker initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialization
    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});