$(document).ready(function () {

  actualColumn = 0;

  var prev_link = $('.prev_link') ,
      next_link = $('.next_link') ;

  function showColumn( c ){

    actualColumn = c;
    actual = ".c" + (c+1);

    if( actualColumn == 3){
      next = ".c1";
    } else {
      next = ".c" + (c+2);
    }

    if( actualColumn == 0){
      previous = ".c4";
    } else {
      previous = ".c" + (c);
    }


    previousTitle = $( (previous) + " h2").text().replace(/\./g, "");
    nextTitle = $( (next) + " h2").text().replace(/\./g, "");

    $('.plan-arrow--prev').text(previousTitle);
    $('.plan-arrow--next').text(nextTitle);


    $('.c1').hide();
    $('.c2').hide();
    $('.c3').hide();
    $('.c4').hide();
    $(actual).show();
  }

  function resetColumn(){
    $('.c1').show();
    $('.c2').show();
    $('.c3').show();
    $('.c4').show();

    $('#CompareTable > thead > tr > th:nth-child(1)').css("display", "table-cell");
  }

  function switchPlanTabsText() {
    $('.plan-tabs__tab').removeClass("js-is-active");
    $('.plan-tabs__tab').eq(actualColumn).addClass("js-is-active");
  }

  $(prev_link).text( $( '.plan-tabs__tab' ).eq(3).text() ).attr("id", 3);
  $(next_link).text( $( '.plan-tabs__tab' ).eq(1).text() ).attr("id", 1);

  $( '.plan-tabs__tab' ).each(function( index ) {

    $( this ).click(function(evt) {
      evt.preventDefault();

      showColumn( index );
      $(actual).attr("colspan",2);

      $( '.plan-tabs__tab' ).removeClass("js-is-active");
      $( this ).addClass("js-is-active");



      switch(index) {
        case 0:
          $(prev_link).text( $( '.plan-tabs__tab' ).eq(3).text() ).attr("id", 3);
          $(next_link).text( $( '.plan-tabs__tab' ).eq(1).text() ).attr("id", 1);
        break;

        case 1:
          $(prev_link).text( $( '.plan-tabs__tab' ).eq(0).text() ).attr("id", 0);
          $(next_link).text( $( '.plan-tabs__tab' ).eq(2).text() ).attr("id", 2);
        break;

        case 2:
          $(prev_link).text( $( '.plan-tabs__tab' ).eq(1).text() ).attr("id", 1);
          $(next_link).text( $( '.plan-tabs__tab' ).eq(3).text() ).attr("id", 3);
        break;

        case 3:
          $(prev_link).text( $( '.plan-tabs__tab' ).eq(2).text() ).attr("id", 2);
          $(next_link).text( $( '.plan-tabs__tab' ).eq(0).text() ).attr("id", 0);
        break;

        default:
          console.log("default case");
      }
    });
  });

  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.innerWidth();
    if (windowsize >= 689) {
      resetColumn();
    }else {
      showColumn(actualColumn);
      $(actual).attr("colspan",2);
      $('#CompareTable > thead > tr > th:nth-child(1)').css("display", "none");
    }
  }

  checkWidth();
  $( window ).resize(function() {
    checkWidth();
  });


  $( '.plan-arrow--prev' ).click(function(evt) {
    evt.preventDefault();

    $('html, body').animate({scrollTop: $('.compare-table').offset().top -56 }, 500);

    if( actualColumn == 0 ){
      showColumn( 3 );
      switchPlanTabsText();
    } else {
      showColumn( actualColumn - 1 );
      switchPlanTabsText();
    }

    $(actual).attr("colspan",2);
  });

  $( '.plan-arrow--next' ).click(function(evt) {
    evt.preventDefault();

    $('html, body').animate({scrollTop: $('.compare-table').offset().top -56 }, 500);

    if( actualColumn == 3 ){
      showColumn( 0 );
      switchPlanTabsText();
    } else {
      showColumn( actualColumn + 1 );
      switchPlanTabsText();
    }

    $(actual).attr("colspan",2);
  });
});

