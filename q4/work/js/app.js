$(document).ready(function () {
	// クラスが "nav-item" である要素がクリックされたときの処理
	$(".nav-item").click(function () {
		// クリックされた要素のインデックスを取得
		const index = $(this).index();
		// クラスが "description" である要素の直下にあるli要素全てに "is-hidden" クラスを追加し、
		// クリックされた要素のインデックスに対応するli要素から "is-hidden" クラスを削除
		$(".description li").addClass("is-hidden").eq(index).removeClass("is-hidden");
	});
});