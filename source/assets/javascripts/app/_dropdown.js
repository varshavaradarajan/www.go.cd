/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

jQuery(document).ready(function() {


    $( ".download-nav li" ).on( "click", function() {
    
    $('.select-dropdown').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        var id_of_div = $this.attr('id');
        $this.after('<div class="select-styled" id="'+id_of_div+'"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            // var go_version = $styledSelect.attr('id');
            var previous_text = $styledSelect.text();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            var s = "table ." + previous_text;
            var b = "table ." + $styledSelect.text();

            $styledSelect.closest('.table-c').find(s).hide();
            $styledSelect.closest('.table-c').find(b).show();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });


    $(".ap-northeast-1").each(function () {
        var $this = $(this);
        $this.removeClass('hidden');
    });

    });

});