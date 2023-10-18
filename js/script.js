document.addEventListener('DOMContentLoaded', function () {
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow');
    });

    $(document).ready(function () {

        window.addEventListener('scroll', function () {
            if (this.scrollY > 300) {
                $('header .top-nav').addClass('fixed-top')
            } else {
                $('header .top-nav').removeClass('fixed-top')
            }
        })

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
        $('header .category.has-child .cat-name button').on('touchstart', function (e) {
            e.preventDefault();
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

        if ($(window).width() >= 1200) {
            $('header .category').hover(function () {
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
            }, function () {
                $('header .category').removeClass('active');
                $('header .category .subcategories').addClass('d-none');
            })
        }


        // product card button
        $('.general-icons .basket .badge').html($('.basket-button.active').length)
        $('.general-icons .compare .badge').html($('.compare-button.active').length)
        $('.general-icons .wishlist .badge').html($('.favorite-button.active').length)

        $('.basket-button').click(function () {
            $(this).toggleClass('active');
            $('.general-icons .basket .badge').html($('.basket-button.active').length)
        })
        $('.compare-button').click(function () {
            $(this).toggleClass('active')
            $('.general-icons .compare .badge').html($('.compare-button.active').length)
        })
        $('.favorite-button').click(function () {
            $(this).toggleClass('active')
            $('.general-icons .wishlist .badge').html($('.favorite-button.active').length)
        })


        // show filter
        $('.filters-show-btn').click(function () {
            $('.filters-wrapper').toggleClass('d-none')
        })


        // price filter
        let rangeInputs = $('.price-filter input[type="range"]');
        let priceInputs = $('.price-filter input[type="number"]');

        let minVal = parseInt(rangeInputs.eq(0).val());
        let maxVal = parseInt(rangeInputs.eq(1).val());

        priceInputs.eq(0).val(minVal);
        priceInputs.eq(1).val(maxVal);

        rangeInputs.on("input", function () {
            let minVal = parseInt(rangeInputs.eq(0).val());
            let maxVal = parseInt(rangeInputs.eq(1).val());

            priceInputs.eq(0).val(minVal);
            priceInputs.eq(1).val(maxVal);
        });
        priceInputs.on('input', function () {
            let minVal = parseInt(priceInputs.eq(0).val());
            let maxVal = parseInt(priceInputs.eq(1).val());

            rangeInputs.eq(0).val(minVal);
            rangeInputs.eq(1).val(maxVal);
        })

        // sort filter
        $('.sort-filter .title').click(function () {
            $(this).parent('.sort-filter').find('.menu').toggleClass('d-none')
            if ($(this).parent('.sort-filter').find('.menu').hasClass('d-none')) {
                $(this).parent('.sort-filter').find('.menu').addClass('d-none')
            } else {
                $(this).parent('.sort-filter').find('.menu').removeClassx('d-none')
            }
        })
        $('.sort-filter').hover(function () {
            $(this).find('.menu').removeClass('d-none')
        }, function () {
            $(this).find('.menu').addClass('d-none')
        })

        $('.product-main-swiper .image').on('mousemove', function (e) {
            $(this).addClass('zoom');
            let zoomer = $(this);
            let offsetX, offsetY, x, y;

            if (e.offsetX !== undefined) {
                offsetX = e.offsetX;
                offsetY = e.offsetY;
            } else if (e.touches && e.touches[0]) {
                offsetX = e.touches[0].pageX - zoomer.offset().left;
                offsetY = e.touches[0].pageY - zoomer.offset().top;
            }

            x = (offsetX / zoomer.width()) * 100;
            y = (offsetY / zoomer.height()) * 100;

            zoomer.css('background-position', x + '% ' + y + '%');
        })
        $('.product-main-swiper .image').on('mouseleave', function () {
            $(this).removeClass('zoom');
            $(this).css('background-position', 'center');
        })

        //color checkbox in detail page
        $(".product-check.usable").each(function () {
            var checkbox = $(this).find("input[type='checkbox']");

            // Checkbox'un "checked" durumunu kontrol ediyoruz
            if (checkbox.prop("checked")) {
                $(this).addClass("active");
            }
        });

        $('.product-check.usable').click(function () {
            $(this).toggleClass('active');
            var checkbox = $(this).find("input[type='checkbox']");
            checkbox.prop("checked", !checkbox.prop("checked"));
        })

        // category buttons
        let firstCategory = $('.product-category-buttons button:first-child');
        let firstCategoryID = firstCategory.data('id');
        firstCategory.addClass('active');
        $('.products-swiper[data-category-id]').addClass('d-none')
        $(`.products-swiper[data-category-id="${firstCategoryID}"]`).removeClass('d-none')
        $('.product-category-buttons button').click(function () {
            let id = $(this).data('id');
            $('.product-category-buttons button').removeClass('active');
            $(this).addClass('active');
            $('.products-swiper[data-category-id]').addClass('d-none')
            $(`.products-swiper[data-category-id="${id}"]`).removeClass('d-none')
        })









        // product amount decrement button func
        $('.product-amount button.decrement').click(function () {
            let input = $(this).parent('.product-amount').find('input');
            let value = parseInt(input.val());
            if (isNaN(value)) {
                value = 1;
            }
            if (value !== 1) {
                value -= 1;
            }
            input.val(value);
            let productID = $(this).closest('tr').data('product-id');
            if (productID) {
                let productPrice = $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price span`).text();
                let total = Number(productPrice) * value;
                $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price-total span`).text(total.toFixed(2))
            }

            // basket result total calculate
            let generalProductTotalValue = 0;
            let generalBasketTotalValue = 0;
            let basketDeliveryValue = Number($('.basket-result .delivery-price').text());
            let basketDiscountValue = Number($('.basket-result .discount-price').text());
            $('.basket-table-wrapper .product-price-total span').each(function () {
                let value = Number($(this).text());
                if (!isNaN(value)) {
                    generalProductTotalValue += value;
                }
                generalBasketTotalValue = generalProductTotalValue + basketDeliveryValue - basketDiscountValue;
                console.log(value)
                $('.basket-result .product-total').text(generalProductTotalValue.toFixed(2));
                $('.basket-result .general-total-price').text(generalBasketTotalValue.toFixed(2));
            })
        })
        // product amount increment button func
        $('.product-amount button.increment').click(function () {
            let input = $(this).parent('.product-amount').find('input');
            let value = parseInt(input.val());
            if (isNaN(value)) {
                value = 0;
            }
            value += 1;
            input.val(value);
            let productID = $(this).closest('tr').data('product-id');
            if (productID) {
                let productPrice = $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price span`).text();
                let total = Number(productPrice) * value;
                $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price-total span`).text(total.toFixed(2))
            }

            // basket result total calculate
            let generalProductTotalValue = 0;
            let generalBasketTotalValue = 0;
            let basketDeliveryValue = Number($('.basket-result .delivery-price').text());
            let basketDiscountValue = Number($('.basket-result .discount-price').text());
            $('.basket-table-wrapper .product-price-total span').each(function () {
                let value = Number($(this).text());
                if (!isNaN(value)) {
                    generalProductTotalValue += value;
                }
                generalBasketTotalValue = generalProductTotalValue + basketDeliveryValue - basketDiscountValue;
                console.log(value)
                $('.basket-result .product-total').text(generalProductTotalValue.toFixed(2));
                $('.basket-result .general-total-price').text(generalBasketTotalValue.toFixed(2));
            })
        })

        // default set value
        $('.product-amount input').each(function () {
            let value = $(this).val();
            if (!isNaN(value)) {
                let productID = $(this).closest('tr').data('product-id');
                if (productID) {
                    let productPrice = $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price span`).text();
                    let total = Number(productPrice) * value;
                    $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price-total span`).text(total.toFixed(2))
                }
            }
        })

        // product amount oninput func
        $('.product-amount input').on('input', function () {
            let value = $(this).val();
            if (!isNaN(value)) {
                let productID = $(this).closest('tr').data('product-id');
                if (productID) {
                    let productPrice = $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price span`).text();
                    let total = Number(productPrice) * value;
                    $(`.basket-table-wrapper tbody tr[data-product-id="${productID}"] .product-price-total span`).text(total.toFixed(2))
                }
            }

            // basket result total calculate
            let generalProductTotalValue = 0;
            let generalBasketTotalValue = 0;
            let basketDeliveryValue = Number($('.basket-result .delivery-price').text());
            let basketDiscountValue = Number($('.basket-result .discount-price').text());
            $('.basket-table-wrapper .product-price-total span').each(function () {
                let value = Number($(this).text());
                if (!isNaN(value)) {
                    generalProductTotalValue += value;
                }
                generalBasketTotalValue = generalProductTotalValue + basketDeliveryValue - basketDiscountValue;
                console.log(value)
                $('.basket-result .product-total').text(generalProductTotalValue.toFixed(2));
                $('.basket-result .general-total-price').text(generalBasketTotalValue.toFixed(2));
            })
        })

        // basket result total calculate
        let generalProductTotalValue = 0;
        let generalBasketTotalValue = 0;
        let basketDeliveryValue = Number($('.basket-result .delivery-price').text());
        let basketDiscountValue = Number($('.basket-result .discount-price').text());
        $('.basket-table-wrapper .product-price-total span').each(function () {
            let value = Number($(this).text());
            if (!isNaN(value)) {
                generalProductTotalValue += value;
            }
            generalBasketTotalValue = generalProductTotalValue + basketDeliveryValue - basketDiscountValue;
            console.log(value)
            $('.basket-result .product-total').text(generalProductTotalValue.toFixed(2));
            $('.basket-result .general-total-price').text(generalBasketTotalValue.toFixed(2));
        })


    })
})