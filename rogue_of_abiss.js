enchant();

window.onload = function () {
	const game = new Game(800, 600); //頑張って乙女ゲームをつくるぞ！

        //必要な画像（400×500）

        /////背景画像/////

        //タイトル画面
        const titlehaikeiImgUrl = "titlehaikei.png";						//game.htmlからの相対パス
        game.preload([titlehaikeiImgUrl]);

        //キャラ集合

        //キャラ選択


        /////シーン画像/////






        /////キャラ画像/////


        ///エディ///
        //通常


        ///アイン///
        //通常

        ///オリバー///
        //通常

        ///ローレンス///
        //通常

        ///ハウンド///
        //通常

        ///シャルク///
        //通常


        /////ボタン画像インストール//////

        //「▶スタート」

        //「▶続きから」

        //「▶終わる」

        //「▶キャラを選ぶ」

        //「▶詳しく見る」

        //「▶戻る」

        game.onload = function () {	


        /////タイトル画面作成/////



        //背景色を一番後ろに持ってくる
        const titleScene = new Scene();					
        game.pushScene(titleScene);  
        titleScene.backgroundColor = "black"        			


        //背景画像を持ってくる
        const titlehaikeiImg = new Sprite(800, 600);				
        titlehaikeiImg.moveTo(0, 0);						
        titlehaikeiImg.image = game.assets[titlehaikeiImgUrl];			
		titleScene.addChild(titlehaikeiImg);	


        //キャラたちの画像をもってくる
        //タイトル画像を持ってくる


        //終わるボタン画像を持ってくる

        //スタートボタンの位置を押すと処理実行
        //タイトル画面が外れる


        //キャラ選択シーン作成
        //背景画像を持ってくる
        //エディの画像を持ってくる
        //エディ名前画像を持ってくる
        //▶このキャラを選ぶボタンを持ってくる
        //▶詳しく見るボタンを持ってくる
        //▶戻るボタンを持ってくる

        //▶詳しく見るボタンを押すと処理実行
        //エディの詳細な説明画像を持ってくる
        //▶戻るボタンを持ってくる

        //エディを選択するとプロローグが始まる。
        //プロローグの文字が浮かび上がってくるようにテキストを設定する。


    };

};
