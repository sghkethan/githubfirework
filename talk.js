$(function() {
    $('#yes').click(function(event) {
        modal('这里是李炳绪女友的专属区域(#^.^#)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('不承认？', A);
    });
});

function A() {
    modal('晚了晚了 点了这个就会变成李炳绪小哥哥的女朋友', B);
}

function B() {
    modal('愿得一人心 白首不分离', C);
}

function C() {
    modal('我现在，正式申请进入你的生活！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
