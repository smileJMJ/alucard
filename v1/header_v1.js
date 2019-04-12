var header = (function(){
    var headerDom = Alucard.Dom('header'),
        inner, h1, gnb, span;

    var option = {
        gnbType: "",
        gnbData: []
    };

    var init = function(gnbData){
        inner = Alucard.Dom('div').S(
            '@className', 'inner',
            '>', h1.init(), '>', gnb.init(gnbData), '>', span.init());


        headerDom.S(
            '@id', 'header',
            '>', inner
        );

        return headerDom;
    };


    h1 = {
        init: function(){
            var _ = this;

            _.css();
            return _.dom;
        },
        dom: Alucard.Dom('h1').S(
            '>', Alucard.Dom('a').S('@href', '/')
        ),
        css: function(){
            Alucard.Css('#header').S('position', 'fixed', 'left', 0, 'top', 0, 'z-index', 500, 'width', '100%', 'height', 60, 'background', '#fff');
            Alucard.Css('#header h1').S('position', 'absolute', 'left', 0, 'top', 22);
            Alucard.Css('#header h1 a').S('display', 'block', 'width', 47, 'height', 15, 'background-image', 'url(resources/img/inAIR_black.svg)', 'background-repeat', 'no-repeat', 'background-position', 'left top');
        }
    };

    gnb = {
        init: function(data){
            var _ = this;

            _.css();
            return _.dom(data);
        },
        dom:function(gnbData){
            var gnbDom = Alucard.Dom('nav');
            gnbDom.S(
                '@id', 'gnb',
                '>', (function(){							// li, a 다 dom으로 만들어서 처리
                    var ul = Alucard.Dom('ul'),
                        gnbLng = gnbData.length;

                    for(var i=0; i<gnbLng; i++){
                        Alucard.Dom('li').S(
                            'over', function(e){
                                this.dom.className = "on";
                            },
                            'out', function(e){
                                this.dom.className = "";
                            },
                            '>', Alucard.Dom('a').S(
                                '@href', gnbData[i].url,
                                '>', Alucard.Dom('strong').S(
                                    'html', gnbData[i].name
                                )
                            ),
                            '<', ul
                        )
                    }
                    return ul;
                })()
            );
            return gnbDom;
        },
        css: function(){
            Alucard.Css('#gnb').S('display', 'block', 'margin-left', 130);
            Alucard.Css('#gnb ul').S('overflow', 'hidden');
            Alucard.Css('#gnb ul li').S('float', 'left');

            Alucard.Css('#gnb li:nth-child(1)').S('width', 115);
            Alucard.Css('#gnb li:nth-child(2)').S('width', 117);
            Alucard.Css('#gnb li:nth-child(3)').S('width', 104);
            Alucard.Css('#gnb li:nth-child(4)').S('width', 104);
            Alucard.Css('#gnb li:nth-child(5)').S('width', 114);
            Alucard.Css('#gnb li:nth-child(6)').S('width', 130);

            Alucard.Css('#gnb ul li a').S('display', 'block', 'padding-top', 17, 'margin-top', 5, 'font-family', 'NotoSanskr_Regular', 'font-size', 15, 'text-align', 'center', 'line-height', '1', 'transition', 'all .3s ease-out');
            Alucard.Css('#gnb ul li a strong').S('display', 'inline-block', 'position', 'relative', 'padding-bottom', 23);
            Alucard.Css('#gnb ul li a strong::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', '50%', 'bottom', 0, 'z-index', 5, 'width', 0, 'height', 2, 'background', '#1b2855', 'transition', 'width ease-out .3s');
            Alucard.Css('#gnb ul li a strong::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'right', '50%', 'bottom', 0, 'z-index', 5, 'width', 0, 'height', 2, 'background', '#1b2855', 'transition', 'width ease-out .3s');
            Alucard.Css('#gnb ul li.on a strong::before').S('width', '50%');
            Alucard.Css('#gnb ul li.on a strong::after').S('width', '50%');
        }
    };

    span = {
        init: function(){
            var _ = this;

            _.css();
            return _.dom;
        },
        dom: Alucard.Dom('span').S(
            '@className', 'question',
            '>', Alucard.Dom('a').S(
                '@href', '/consultant/contact',
                '>', Alucard.Dom('strong').S('html', 'inAIR 문의하기')
            )
        ),
        css: function(){
            Alucard.Css('#header .question').S('position', 'absolute', 'right', 0, 'top', 0, 'width', 165, 'height', 60, 'border-left', '1px solid #dadada', 'border-right', '1px solid #dadada');
            Alucard.Css('#header .question a').S('display', 'block', 'font-family', 'NotoSanskr_Medium', 'font-size', 13, 'color', '#272727', 'text-align', 'center', 'line-height', 60);
            Alucard.Css('#header .question a strong').S('display', 'inline-block', 'position', 'relative', 'padding-left', 21, 'transition', 'all .3s cubic-bezier(.28,.72,.40,.88)');
            Alucard.Css('#header .question a strong::before').S('display', 'inline-block', 'content', '"\\e802"', 'position', 'absolute', 'left', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'top', 'transition', 'all .2s');
            Alucard.Css('#header .question a strong::after').S('display', 'inline-block', 'content', '"\\e87a"', 'opacity', 0, 'position', 'absolute', 'right', 0, 'top', 0, 'font-family', 'Linearicons-Free', 'vertical-align', 'middle', 'transition', 'all .2s');
            Alucard.Css('#header .question a:hover strong').S('padding-left', 0, 'padding-right', 25);
            Alucard.Css('#header .question a:hover strong::before').S('margin-left', -10, 'opacity', 0);
            Alucard.Css('#header .question a:hover strong::after').S('opacity', 1);
        }
    };

    return init;
})();