$(document).ready(function () {
	// アカウント作成ボタンがクリックされたときに実行される処理
	$(".btn__submit").click(function () {
		// 個人情報
		const familyName = $("#family__name").val();
		const givenName = $("#given__name").val();
		const year = $(".year").val();
		const month = $(".month").val();
		const day = $(".day").val();
		const gender = $("input[name='gender']:checked").val();
		const occupation = $(".occupation").val();

		// アカウント情報
		const accountName = $("#account__name").val();
		const email = $("#email").val();
		const password = $("#password").val();
		const duplicationPassword = $("#duplication__password").val();

		// 連絡先
		const address = $("#address").val();
		const tel = $("#tel").val();

		// 購読情報
		const emailMagazine = $("#email__magazine").is(":checked");
		const coupon = $("#coupon").is(":checked");

		// 誕生日を結合
		const birthday = year + "年" + month + "月" + day + "日";

		// コンソールに出力
		console.log("個人情報");
		console.log("名字: " + familyName);
		console.log("名前: " + givenName);
		console.log("生年月日: " + birthday);
		console.log("性別: " + gender);
		console.log("職業: " + occupation);

		console.log("\nアカウント情報");
		console.log("アカウント名: " + accountName);
		console.log("メールアドレス: " + email);
		console.log("パスワード: " + password);
		console.log("確認用パスワード: " + duplicationPassword);

		console.log("\n連絡先");
		console.log("住所: " + address);
		console.log("電話番号: " + tel);

		console.log("\n購読情報");
		console.log("メールマガジン: " + emailMagazine);
		console.log("クーポン: " + coupon);
	});
});