$(function() {
    $('#yes').click(function(event) {
        modal('烟花表演即将开始！(#^.^#)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('嘘~你即将进入一个烟花的梦境世界！', A);
    });
});

function A() {
    modal('提示：闭上眼睛许个愿，烟花会帮你实现哦~', B);
}

function B() {
    modal('许完愿了嘛(#^.^#)', C);
}

function C() {
    modal('点击按钮，解锁这场童话般的烟花秀！', function() {
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
