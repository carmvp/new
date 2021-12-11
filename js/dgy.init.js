$(function(){
    initMethods.init();
});

function getCookie(c_name){
    if (document.cookie.length > 0){
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1){
            c_start = c_start + c_name.length + 1;
            c_end   = document.cookie.indexOf(";",c_start);
            if (c_end == -1){
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return null
}

// 校验反馈
var checkFeedback = function(obj){
	if(obj.title.value==""){
		layer.msg("留言主题不能为空！");
		return false;
	}
	if(obj.name.value==""){
		layer.msg("哎呀，你好像忘记写昵称啦！");
		return false;
	}
	if(obj.bookmsg.value==""){
		layer.msg("喔唷，你是不是没写内容呀！");
		return false;
	}
	if(obj.code.value==""){
		layer.msg("额，你好像忘记填写验证码了！");
		return false;
	}		
	return true;
}

// 提交校验
var checkCommit = function(obj){
    var content = obj.content.value;
    var filterVal = $.trim(content);
    if(filterVal == ''){
        layer.msg("哎呀，你不打算说点什么吗？");
        return false;
    }
    return true;
}
// 回复校验
var checkReply = function(obj){
    var content = obj.content.value;
    var filterVal = $.trim(content);
    if(filterVal == ''){
        layer.msg("哎呀，你不打算说点什么吗？");
        return false;
    }
    return true;
}
// 评论回复
var toReply = function(obj){
    if($("#rep_" + obj).css("display") == "none"){
        $("#rep_" + obj + " .yzm-comment-reply-code img").attr('src', $("#rep_" + obj + " .yzm-comment-reply-code img").attr("src") + "?");
        $("#rep_" + obj).css("display", "block");
    }else{
        $("#rep_" + obj).css("display", "none");
    }
}
// 校验搜索
var checkSearch = function () {
    var searchInput = $('#dgySearchPart .searchInput').val();
    var searchVal = $.trim(searchInput);
    if (searchVal == '') {
        layer.msg("哎呀，你好像忘记输入搜索内容了！");
        return false;
    }
    if (searchVal.length < 2) {
        layer.msg("搜索关键字至少需要2个字哟！");
        return false;
    }
    return true;
}

// 初始化方法
var initMethods = function(){

    // 滑动置顶
    var scrollTop = function() {
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 500,
            $back_to_top = $('.backTop');
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('backTopVisible'): $back_to_top.removeClass('backTopVisible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    };
    return{
        init: function(){
            scrollTop();
        }
    }
}();