// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
  
//    $(function (){  
//        $j('#aufgabe_erfasst,#aufgabe_erledigt_am,#aufgabe_termin,#erfasst,#erledigt_am,#termin,#zuletzt_bearbeitet').datepicker({ dateFormat: 'yy-mm-dd'});  
//    });  

var $j = jQuery.noConflict();

//$j(function() {
//  $j(".alert").click(function() {
//    alert(this.getAttribute("data-confirm"));
//    return false;
//  })
//})

$j(function (){  
  $j('.voki_radio_richtig').change(function() {
    $j.post('http://localhost:3000/edit_richtig?id='+this.getAttribute('name'), "_method=edit_richtig", null, "script");
    return false;
  });

  });

$j(function (){  
  $j('.voki_radio_falsch').change(function() {
    $j.post('http://localhost:3000/edit_falsch?id='+this.getAttribute('name'), "_method=edit_falsch", null, "script");
    return false;
  });
  });
//jQuery.fn.submitLinkWithAjax = function() {
//  this.live("click", function() {
//    $j.post(this.href, "_method=delete", null, "script");
//    return false;
//  });
//  return this;
//};

//$j(document).ready(function() {
//  $j("a.delete_post").submitLinkWithAjax();
//});


$j(function (){  
   $('#voki_suche').submit(function () {  
     $.get(this.action, $(this).serialize(), null, 'script');  
     return false;  
   });  
});


        

