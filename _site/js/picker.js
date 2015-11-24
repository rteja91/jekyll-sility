(function ($) {
        //  All Alternate stylesheets Selector
        var $links = $('link[rel*=alternate][title]');
        var picker_style = 'a.color_picker{  border: 1px solid #fff;    display: inline-block; margin: 3px;  padding: 15px 17px;}';
        var container_style = 'div#color_picker_container{background: none repeat scroll 0 0 black;     display: inline-block;   max-width: 200px;  padding: 5px; position: fixed;  top: 30%;  width: auto;  z-index: 10000;}';
        var options = '';

        $('body').prepend('<div id="color_picker_container"></div>');
        $('body').append('<style>' + container_style + ' ' + picker_style+ ' </style>');
            $links.each(function (index, value) {
                options += '<a href="#" style="background-color:'+$(this).attr('data-color')+'; " title="'+ $(this).attr('href') + '" class="color_picker "></a>';
            }); $links.remove(); 
    
            $('#color_picker_container').html(options)
            $('#color_picker_container a').click(function(){
                $('link[rel*=jquery]').remove();
                $('head').append('<link rel="stylesheet jquery" href="' + $(this).attr('title') + '" type="text/css" />');
            });

        })(jQuery);

