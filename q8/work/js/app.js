$(function () {
	// 関数: APIのレスポンスを処理して結果を表示
	function processApiResponse(response) {
		$(".message").remove();
		// レスポンスがあり、かつアイテムが存在する場合
		if (response && response[0] && response[0].items && response[0].items.length > 0) {
			// 各アイテムごとに処理
			$.each(response[0].items, function (index, item) {
				// 書籍情報をHTMLに変換してリストに追加
				var listItem = `
					<li class="lists-item">
						<div class="list-inner">
							<p>タイトル：${item.title ? item.title : "不明"}</p>
							<p>作者：${item["dc:creator"] ? item["dc:creator"] : "不明"}</p>
							<p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "不明"}</p>
							<a href="${item.link["@id"]}" target="_blank">書籍情報</a>
						</div>
					</li>`;
				$(".lists").prepend(listItem);  // リストに追加
			});
		} else {
			$(".lists").before('<div class="message">検索結果がありません。<br>別のキーワードで試してください。</div>');
		}
	}

	// 変数初期化
	var pageCount = 1;         // ページ番号の初期値
	var prevSearchWord = "";   // 前回の検索ワードの初期値

	// 検索ボタンがクリックされたときの処理
	$(".search-btn").on("click", function () {
		var searchWord = $("#search-input").val();

		// 前回の検索ワードと異なる場合は検索条件をリセット
		if (searchWord !== prevSearchWord) {
			pageCount = 1;
			$(".lists").empty();   // リストをクリア
			prevSearchWord = searchWord;
		} else {
			pageCount++;  // 同じ検索ワードの場合、ページ番号を増やす
		}

		// AJAXリクエストを発行
		$.ajax({
			url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
			// サーバーに送るメソッド
			method: "GET"
		//.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
		}).done(function (response) {
			processApiResponse(response["@graph"]);  // レスポンスを処理
		//.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている。
		}).fail(function (error) {
			$(".lists").empty();  // リストをクリア
			$(".message").remove();  // メッセージを削除

			// エラーステータスに応じたメッセージを表示
			if (error.status === 0) {
				$(".lists").before('<div class="message">通信に失敗しました。<br>ネットワーク接続を確認してください。</div>');
			} else if (error.status === 400) {
				$(".lists").before('<div class="message">検索キーワードが無効です。<br>1文字以上で検索してください。</div>');
			} else {
				$(".lists").before('<div class="message">エラーが発生しました。<br>再読み込みしてください。</div>');
			}
		});
	});

	// リセットボタンがクリックされたときの処理
	$(".reset-btn").on("click", function () {
		pageCount = 1;             // ページ番号を初期化
		prevSearchWord = "";       // 前回の検索ワードを初期化
		$(".lists").empty();       // リストをクリア
		$(".message").remove();    // メッセージを削除
		$("#search-input").val("");  // 検索ワード入力欄をクリア
	});
});