$(document).ready(function () {
	// アカウント作成ボタンがクリックされたときに実行される処理
	$(".btn__submit").click(function () {
		// 個人情報
		let familyName = $("#family__name").val();
		let givenName = $("#given__name").val();
		let year = $(".year").val();
		let month = $(".month").val();
		let day = $(".day").val();
		let gender = $("input[name='gender']:checked").val();
		let occupation = $(".occupation").val();

		// アカウント情報
		let accountName = $("#account__name").val();
		let email = $("#email").val();
		let password = $("#password").val();
		let duplicationPassword = $("#duplication__password").val();

		// 連絡先
		let address = $("#address").val();
		let tel = $("#tel").val();

		// 購読情報
		let emailMagazine = $("#email__magazine").is(":checked");
		let coupon = $("#coupon").is(":checked");

		// 誕生日を結合
		let birthday = year + "年" + month + "月" + day + "日";

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