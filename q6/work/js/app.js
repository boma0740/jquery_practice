// ドキュメントが完全に読み込まれたときに実行される処理
$(document).ready(function () {
	// セレクトボックスの値が変更されたときに実行される処理
	$(".select-box").change(function () {
		// 選択されたカテゴリーの値を取得
		let selectedCategory = $(this).val();

		// 選択されたカテゴリーが "all"（全て）の場合
		if (selectedCategory === "all") {
			// すべての食品リストを表示
			$(".food-list > li").show();
		} else {
			// それ以外の場合、すべての食品リストを非表示
			$(".food-list > li").hide();
			// 選択されたカテゴリーに該当する食品リストのみを表示
			$(".food-list > li[data-category-type='" + selectedCategory + "']").show();
		}
	});
});