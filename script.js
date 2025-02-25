$(document).ready(function(){
  
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 1200
  });

    // ボタンアニメーション
    $('a').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5 // 透明度を50%に
      }, 100); // 0.1秒で変化
    });
  
    $('a').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0 // 元の透明度に戻す
      }, 100); // 0.1秒で変化
    });  

    // スクロールイベント
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) { // 100px以上スクロールしたら
            $('#top-button').removeClass('fade-out').addClass('fade-in'); //フェードイン
        } else {
            $('#top-button').removeClass('fade-in').addClass('fade-out'); //フェードアウト
        }
    });

    // ページ内リンクのスムーズスクロール
    $('a[href^="#"]').click(function () {
      event.preventDefault(); // デフォルトのリンク動作を無効化

      let href = $(this).attr('href'); // ① attr()メソッドで href の値を取得
      let $target;

      if (href === '#') {
          $target = $('html'); // ② href="#" ならスクロール先を html にしてページのトップへ
      } else {
          $target = $(href); // ③ それ以外は href の値（id名）をスクロール先に
      }

      if ($target.length) { // ターゲット要素が存在するかチェック
          let position = $target.offset().top; // ④ offset()メソッドでスクロール先の位置を取得
          $('html, body').animate({ scrollTop: position }, 800, 'swing'); // ⑤ スムーズスクロール
      }
      
      return false; // デフォルトの動作をキャンセル
  });

  // スクロールイベント
  $(window).on('scroll', function() {
    let scrollTop = $(window).scrollTop();  // ブラウザのスクロール量
    let windowHeight = $(window).height();  // ブラウザの表示領域の高さ

    $('section').each(function(){
      let sectionTop = $(this).offset().top; // セクションの位置（上からの距離）
      
      // セクションが画面に入ったら .fade-in を追加
      if (scrollTop + windowHeight > sectionTop + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたらモーダルを表示
  $(document).on('click', '.works-img', function(){
    console.log("画像がクリックされました！"); // クリック確認用
    let imgSrc = $(this).attr('src');  // クリックされた画像の src を取得
    $('.modal-image').attr('src',imgSrc);// モーダルの画像にセット
    $('.modal-bgr').fadeIn(); // モーダルをフェードインで表示
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  $(document).on('click', '#close-modal', function(){
    console.log("×ボタンがクリックされました！"); // デバッグ用
    $('.modal-bgr').fadeOut(function(){
      $('.modal-image').attr('src', ""); // モーダルを閉じた後、src を空に戻す
    });
  });

});