/*  HEADER DATA 정리
logoData = {
    type: 'img',            // img / text 타입
    img: '../resources/img/inAIR_black.svg',                // img 타입일 때 로고 이미지
    text: 'inAIR',                                       // img 타입일때 - hidden text, text 타입일 때 - text
    url: '/'                                             // a 태그 href(url)
};
gnbData = {
    type: 'fulldown',                                   // GNB타입, fulldown, onedown ....
    mobile: true,                                      // 반응형 여부
    accessibility: false,                               // 웹 접근성 gnb (focus 이벤트)
    menu: [
        {name: 'inAIR 소개', url: 'https://www.midashri.com/intro/ai'},
        {name: '성공스토리', url: 'https://www.midashri.com/story/list'},
        {name: '체험하기', url: 'https://www.midashri.com/experience'},
        {name: '문의하기', url: 'https://www.midashri.com/contact/contact'},
        {name: 'HR 세미나', url: 'https://www.midashri.com/seminar/list'},
        {name: 'HRev 블로그', url: 'https://www.midashri.com/blog'}
    ]
};
etcData = {
    type: "button",                                  // button, text,
    text: "inAIR 문의하기",
    url: "/consultant/contact"
};*/

var HEADER;
(function(){
    var logoData = {},
        gnbData = {},
        etcData= {};

    HEADER = {
        init:function(data){
            console.log(data)
            var self = this;
            logoData = data.logo;
            gnbData = data.gnb;
            etcData = data.etc;

            /*  // dom 추가 코드 주르르륵
                var header = Alucard.Dom('header').S(
                '@id', 'header',
                //'<', wrap,
                '>', Alucard.Dom('div').S(
                    '@className', 'inner',
                    '>', Alucard.Dom('h1').S(
                        '>', Alucard.Dom('a').S('@href', '/')
                    ),
                    '>', GNB.init(),
                    //'>', Alucard.get(function(){return GNB.init();}, 'resources/js/GNB.js'),
                    '>', Alucard.Dom('span').S(
                        '@className', 'question',
                        '>', Alucard.Dom('a').S(
                            '@href', '/consultant/contact',
                            '>', Alucard.Dom('strong').S('html', 'inAIR 문의하기')
                        )
                    )
                )
            );*/

            // 구조별 코드 나눔 + parameter 추가
            var header = Alucard.Dom('header').S(
                '@id', 'header',
                //'<', wrap,
                '>', Alucard.Dom('div').S(
                    '@className', 'inner',
                    '>', self.makeLogo(logoData),
                    '>', GNB.init(gnbData),
                    //'>', Alucard.get(function(){return GNB.init();}, 'resources/js/GNB.js'),
                    '>', self.makeEtc(etcData)
                )
            );

            Alucard.Css('#header').S('position', 'fixed', 'left', 0, 'top', 0, 'z-index', 500, 'width', '100%', 'height', 60, 'background', '#fff');
            Alucard.Css('#header .question').S('position', 'absolute', 'right', 0, 'top', 0, 'width', 165, 'height', 60, 'border-left', '1px solid #dadada', 'border-right', '1px solid #dadada');
            Alucard.Css('#header .question a').S('display', 'block', 'font-family', 'NotoSanskr_Medium', 'font-size', 13, 'color', '#272727', 'text-align', 'center', 'line-height', 60);
            Alucard.Css('#header .question a strong').S('display', 'inline-block', 'position', 'relative', 'padding-left', 21, 'transition', 'all .3s cubic-bezier(.28,.72,.40,.88)');
            Alucard.Css('#header .question a strong::before').S('display', 'inline-block', 'content', '"\\e802"', 'position', 'absolute', 'left', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'top', 'transition', 'all .2s');
            Alucard.Css('#header .question a strong::after').S('display', 'inline-block', 'content', '"\\e87a"', 'opacity', 0, 'position', 'absolute', 'right', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'middle', 'transition', 'all .2s');
            Alucard.Css('#header .question a:hover strong').S('padding-left', 0, 'padding-right', 25);
            Alucard.Css('#header .question a:hover strong::before').S('margin-left', -10, 'opacity', 0);
            Alucard.Css('#header .question a:hover strong::after').S('opacity', 1);

            return header;
        },
        makeLogo: function(data){
            var logo = Alucard.Dom('h1').S(
                '>', (function(){
                    var h1 = Alucard.Dom('div').S('@className', 'logo'),
                        a = Alucard.Dom('a').S('@href', data.url);
                    data.type === 'img' ? a.S('background-image', 'url('+data.img+')', '>', Alucard.Dom('span').S('@className', 'hidden', 'html', data.text)) : a.S('html', data.text);
                    h1.S('>',a);

                    return h1;
                })()
            );

            Alucard.Css('#header h1').S('position', 'absolute', 'left', 0, 'top', 22);
            Alucard.Css('#header h1 a').S('display', 'block', 'width', 47, 'height', 15, 'background-repeat', 'no-repeat', 'background-position', 'left top');

            return logo;
        },
        makeEtc: function(data){
            var etc = Alucard.Dom('span').S(
                '@className', 'question',
                '>', Alucard.Dom('a').S(
                    '@href', data.url,
                    '>', Alucard.Dom('strong').S('html', data.text)
                )
            );

            return etc;
        },
        destroy:function(){

        },
        replaceContents:function(){
            //gnb - gnb타입(풀다운, 1뎁스 하나씩 다운), 메뉴데이터, 웹접근성준수 gnb(포커스), 모바일 분기처리(반응형)
            // 로고 - 링크, 이미지/텍스트, 히든텍스트
            // 우측 버튼 - 링크, 텍스트
        }
    };
})();