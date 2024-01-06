$(document).ready(function () {
	// クラスが "dropdwn" である要素の子要素のliに対して、hoverイベントを設定
	$(".dropdwn > li").hover(
		function () {
			// Hover in（マウスが要素に入ったときの処理）
			// thisは、現在のli要素を指す
			// find()メソッドでこのli要素内から ".dropdwn_menu" クラスを持つ要素を検索し、その下にあるメニューを取得
			// stop()メソッドはアニメーションを停止し、slideDown()メソッドでメニューをスライドダウン表示
			$(this).find(".dropdwn_menu").stop().slideDown();
		},
		function () {
			// Hover out（マウスが要素から出たときの処理）
			// thisは、現在のli要素を指す
			// find()メソッドでこのli要素内から ".dropdwn_menu" クラスを持つ要素を検索し、その下にあるメニューを取得
			// stop()メソッドはアニメーションを停止し、slideUp()メソッドでメニューをスライドアップ非表示
			$(this).find(".dropdwn_menu").stop().slideUp();
		}
	);
});