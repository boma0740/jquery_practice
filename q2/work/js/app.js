$(document).ready(function () {
	// OPENを謳歌時モーダルウィンドウがフェードインする
	$(".modal_open_button").click(function () {
		$(".modal_win").fadeIn();
	});
	// モーダルウィンドウがフェードアウトする
	$(".modal_close_button").click(function () {
		$(".modal_win").fadeOut();
	});
});