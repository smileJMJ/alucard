/*
    LAYOUT 공통 관리
    공통 레이아웃은 다시 지우고 그리지 않고 container와 같이 contents가 바껴야하는 부분만 바꾸도록 관리
    및 HEADER, FOOTER처럼 공통이지만 가끔씩 다른 타입/다른 구조의 HEADER, FOOTER가 생겼을 때는 dom object를 받아 처리하도록 구현해보려 함
*/
var LAYOUT;
(function(){
    var option;
    var makeLayout;

    option = {
      header: '',            // default: HEADER2.js 에 있는 header, object: 새로운 header object로 교체
      footer: '',
      container: ''
    };

    makeLayout = function(){
        var wrap;
        wrap = Alucard.Dom('div').S(
            //'>',
            '<', 'body'
        );
    };

    LAYOUT = {
        init: function(opt){
            option = Object.assign(option, opt);
            console.log(option)
            return makeLayout();
        },
        destroy: function(){

        }
    }
})();