$(function() {
    $('#yes').click(function(event) {
        modal('快来欣赏一场梦幻烟花秀(#^.^#)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('这是一个有魔力的菜单', A);
    });
});

function A() {
    modal('据说点了这个就会变成lbx小哥哥的女朋友', B);
}

function B() {
    modal('愿得一人心 白首不分离', C);
}

function C() {
    modal('我现在，正式申请进入姐姐的生活~', function() {
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
