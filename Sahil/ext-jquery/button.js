$(document).ready(function () {
  /*  $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });*/

  /*$('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });*/
  /*$(document).on('mCustomScrollbar', "#sidebar", function(e) {
				alert();
				theme: "minimal"
			});*/
  $(document).on("click", "#sidebarCollapse", function (e) {
    $("#sidebar, #content").toggleClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
    // $('.m-r-custom').toggleClass('m-r-custom');
  });
});

/* $(document).ready(function(){
        $('.pep').pep();
      });*/
