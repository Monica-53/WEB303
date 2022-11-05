/* $('.nav-tab').click(function(e) {
    //Toggle tab link
    $(this).addClass('nav-tab-active').siblings().removeClass('nav-tab-active');
  
    //Toggle target tab
    $($(this).attr('href')).addClass('active').siblings().removeClass('active');
  }); */


/*   $("#tabButton ul li a").click(function(e){
    
    // active deactivate tab buttons
    $("#tabButton ul li a").removeClass('active');
    $(this).addClass('active');
    
    // show hide tab content
    var tabName = $(this).attr('data-tabName');
    $("#tabContent .tab").removeClass('active');
    $("#tabContent #"+tabName).addClass('active');
    
    // stop reload
    e.preventDefault();
}) */

$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});