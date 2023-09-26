$(window).on('load', function() {
    $('#preloader').fadeOut('slow');
});


document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {

        // menu
        $('.menu-button').click(function () {
            $(this).toggleClass('active');
            $('.bottom-nav').toggleClass('active');
            $('.menu-backdrop').toggleClass('d-none')
        });
        $('.menu-backdrop').click(function () {
            $('.menu-button').toggleClass('active');
            $('.bottom-nav').toggleClass('active');
            $(this).toggleClass('d-none')
        });

        $('.search-button').click(function () {
            $('.search').toggleClass('active')
        })
        $('.search .close-button').click(function () {
            $('.search').toggleClass('active')
        })



        // categories
        $('header .category.has-child .cat-name button').on('click', function () {
            let category = $(this).closest('.category');
            let categoryID = category.data('id');
            let activeSubcategory = $(`header .category .subcategories[data-category-id="${categoryID}"]`);
            if (category.hasClass('active')) {
                category.removeClass('active');
                activeSubcategory.addClass('d-none');
            } else {
                $('header .category').removeClass('active');
                category.addClass('active');
                $('header .category .subcategories').addClass('d-none');
                activeSubcategory.removeClass('d-none');
            }
        })

        $('header .category').hover(function(){
            let categoryID = $(this).data('id');
            let activeSubcategory = $(`header .category .subcategories[data-category-id="${categoryID}"]`);
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                activeSubcategory.addClass('d-none');
            } else {
                $('header .category').removeClass('active');
                $(this).addClass('active');
                $('header .category .subcategories').addClass('d-none');
                activeSubcategory.removeClass('d-none');
            }
        }, function(){
            $('header .category').removeClass('active');
            $('header .category .subcategories').addClass('d-none');
        })
    })
})