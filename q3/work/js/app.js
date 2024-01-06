$(document).ready(function () {
	// クラスが "drawer_button" である要素がクリックされたときの処理
	$(".drawer_button").click(function () {
		// クリックされた要素に "active" クラスをトグル（追加または削除）する
		$(this).toggleClass("active");
		// クラスが "drawer_nav_wrapper" である要素に "open" クラスをトグルする
		$(".drawer_nav_wrapper").toggleClass("open");
		// クラスが "drawer_bg" である要素をフェードトグルする
		$(".drawer_bg").fadeToggle();
		// body要素に "modal-open" クラスをトグルする
		$("body").toggleClass("modal-open");
	});

	// クラスが "drawer_bg" である要素がクリックされたときの処理
	$(".drawer_bg").click(function () {
		// クラスが "drawer_button" である要素から "active" クラスを削除
		$(".drawer_button").removeClass("active");
		// クラスが "drawer_nav_wrapper" である要素から "open" クラスを削除
		$(".drawer_nav_wrapper").removeClass("open");
		// クラスが "drawer_bg" である要素をフェードアウト
		$(this).fadeOut();
		// body要素から "modal-open" クラスを削除
		$("body").removeClass("modal-open");
	});
});