var HEADER;
(function(){
    var header;
    var makeHeader;

    // HEADER 생성 코드
    makeHeader = function(){
        var inner;
        var dataLogo;
        var dataGnb;
        var dataEtc;

        header = Alucard.Dom('header').S(
            '@id', 'header',
            '>', (function(){
                inner = Alucard.Dom('div').S('@className', 'inner');

                Alucard.ajaxGet(function(d){
                    dataLogo = JSON.parse(d)['logo'];
                    dataGnb = JSON.parse(d)['gnb'];
                    dataEtc = JSON.parse(d)['etc'];

                    inner.S(
                        // logo
                        '>', (function(){
                            return Alucard.Dom('h1').S(
                                '@className', 'logo',
                                '>', (function(){
                                    var a;
                                    a = Alucard.Dom('a').S(
                                        '@href', dataLogo.url,
                                        'display', 'block',
                                        'width', 47,
                                        'height', 15,
                                        'background-repeat', 'no-repeat',
                                        'background-position', 'left top'
                                    );
                                    dataLogo.type === 'img' ? a.S('background-image', 'url('+dataLogo.img+')', '>', Alucard.Dom('span').S('@className', 'hidden', 'html', dataLogo.text, 'display', 'none')) : a.S('html', dataLogo.text);
                                    return a;
                                })(),
                                'position', 'absolute',
                                'left', 0,
                                'top', 22
                            )
                        })(),

                        // gnb
                        '>', GNB.init(dataGnb),

                        // question
                        '>', Alucard.Dom('span').S(
                            '@className', 'question',
                            '>', Alucard.Dom('a').S(
                                '@href', dataEtc.url,
                                '>', Alucard.Dom('strong').S(
                                    'html', dataEtc.text,
                                    'display', 'inline-block',
                                    'position', 'relative',
                                    'padding-left', 21,
                                    'transition', 'all .3s cubic-bezier(.28,.72,.40,.88)'
                                ),
                                'display', 'block',
                                'font-family', 'NotoSanskr_Medium',
                                'font-size', 13,
                                'color', '#272727',
                                'text-align', 'center',
                                'line-height', 60
                            ),
                            'position', 'absolute',
                            'right', 0,
                            'top', 0,
                            'width', 165,
                            'height', 60,
                            'border-left', '1px solid #dadada',
                            'border-right', '1px solid #dadada'
                        )
                    )
                }, CONST.HEADER_URL());

                Alucard.Css('#header .question a strong::before').S('display', 'inline-block', 'content', '"\\e802"', 'position', 'absolute', 'left', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'top', 'transition', 'all .2s');
                Alucard.Css('#header .question a strong::after').S('display', 'inline-block', 'content', '"\\e87a"', 'opacity', 0, 'position', 'absolute', 'right', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'middle', 'transition', 'all .2s');
                Alucard.Css('#header .question a:hover strong').S('padding-left', 0, 'padding-right', 25);
                Alucard.Css('#header .question a:hover strong::before').S('margin-left', -10, 'opacity', 0);
                Alucard.Css('#header .question a:hover strong::after').S('opacity', 1);

                return inner;
            })(),
            'position', 'fixed',
            'left', 0,
            'top', 0,
            'z-index', 500,
            'width', '100%',
            'height', 60,
            'background', '#fff'
        );

        return header;
    };

    // HEADER host code
    HEADER = {
        init: function(){
            return makeHeader();
        },
        destroy: function(){
            header.remove();
        }
    }
})();