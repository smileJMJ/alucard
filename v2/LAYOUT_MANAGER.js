/*
    LAYOUT 생성 및 관리
    - wrap, header, container, footer
*/

// 초기에 모듈 스크립트 전부 로딩
var LAYOUT_MANAGER;
(function(){
    var wrap, header, container, footer;            //  레이아웃 dom 은 전역으로 빼서 어떤 모듈에서도 접근할 수 있도록 해봄. 모듈 js 먼저 불러와서 실행시킬 때 dom에 추가안되어 있어서 (LAYOUt_MANAGER에서 wrap에 추가하고 있어서) query 메서드 쓸 수 없음(스크립트 기능 동작을 못함)
    LAYOUT_MANAGER = {
      init: function(){
          wrap = WRAP.init();
          header = HEADER.init();
          container = CONTAINER.init();
          footer = FOOTER.init();

          wrap.S('>', header, '>', container, '>', footer);
      },
      destroy: function(){

      }
    };
})();

/* // 동적으로 모듈 스크립트 로딩
var LAYOUT_MANAGER;
(function(){
    var wrap, header, container, footer;

    LAYOUT_MANAGER = {
        init: function(){
            Alucard.get(function(){
                header = HEADER.init();
                console.log(header)}, 'resources/js/HEADER.js');
            Alucard.get(function(){
                container = CONTAINER.init();
                console.log(container)}, 'resources/js/CONTAINER.js');
            Alucard.get(function(){
                footer = FOOTER.init();
                console.log(footer)}, 'resources/js/FOOTER.js');
            Alucard.get(function(){
                wrap = WRAP.init();
                wrap.S('>', header, '>', container, '>', footer);
                console.log(wrap)}, 'resources/js/WRAP.js');

        },
        destroy: function(){

        }
    };
})();*/
