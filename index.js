            $(function(){
                var $grid =  $(".grid").isotope({
                });
                //filter icon
                $('.music-category').on('click', '.option',function(){
                    $('.music-category .option').removeClass('active');
                    $(this).addClass('active');
                    var filterValue = $(this).attr('data-filter');
                    console.log(filterValue)
                    $grid.isotope({
                    filter:filterValue,
                    // layoutMode: 'fitRows'
                })
                });
            
            });
