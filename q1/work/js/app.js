
// Q1-1　読み込み時に文字色の色変化
// ボタンの文字色を変更するスクリプト
$(document).ready(function () {
	// ブラウザ読み込み時に実行されるコード
	// ボタンの文字色を赤色に変更
	$("#q1").css("color", "green");

// Q1-2　クリックしてボタンの色変更
	// ボタンがクリックされたときに実行されるコード
	$("#q2").click(function () {
		// ボタンの文字色をピンクに変更
		$(this).css("background", "pink");
	});

// Q1-3　クリックしてフェードアウト
	// ボタンがクリックされたときに実行されるコード
	$("#q3").click(function () {
		// 3秒かけてフェードアウト
		$(this).fadeOut(3000);
	});

// Q1-4　クリックしてサイズ変更
	// ボタンがクリックされたときに実行されるコード
	$("#q4").click(function () {
		// ボタンに .large クラスを追加
		$(this).toggleClass("large");
	});

// Q1-5  クリックしてDOMの挿入
	// ボタンがクリックされたときに実行されるコード
	$("#q5").on("click", function () {
    // 対象のDOMを取得
    const target = $(this);
    // ボタンの内部の最初の小要素に"DOMの中の前"を挿入
    target.prepend("DOMの中の前")
    // ボタンの内部の最後の小要素に"DOMの中の後"を挿入
    .append("DOMの中の後")
    // ボタンの前に"DOMの前"を挿入
   	.before("DOMの前")
    // ボタンの後ろに"DOMの後"を挿入
    .after("DOMの後");
	});

// Q1-6 クリックして移動
	// ボタンがクリックされたときに実行されるコード
	$("#q6").on("click", function () {
		// アニメーションで移動
		$(this).animate({ marginTop: 100, marginLeft: 100 }, 2000);
	});

// Q1-7 クリックしてidのノードをコンソールで表示
	$("#q7").on("click", function () {
		// クリックされた要素自体をコンソールに表示
		console.log(this);
	});

// Q1-8 ホバー時にサイズ変更
	// ボタンがホバーされたときに実行されるコード
	$("#q8").hover(
		function () {
			// ホバー時のクラスを追加
			$(this).addClass("large");
		},
		function () {
			// ホバーが外れたときのクラスを削除
			$(this).removeClass("large");
		}
	);

// Q1-9 クリックして配列のアラート表示
	$("#q9 li").on("click", function () {
		// クリックされたli要素のindex番号を取得してアラート表示
		const index = $(this).index();
		alert(index);
	});

// Q1-10 Q10をクリックしてQ11を操作
	$("#q10 li").on("click", function () {
		// 対応するQ11のli要素に.large-textクラスを追加
		const index = $(this).index();
		$("#q11 li").eq(index).addClass("large-text");
	});
});