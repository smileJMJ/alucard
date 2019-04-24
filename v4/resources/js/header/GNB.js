var GNB;
(function(){
    GNB = {
        init: function(data){
            var gnb = Alucard.Dom('nav').S(
                '@id', 'gnb',
                '@data-type', data.type,
                '>', (function(){							// li, a 다 dom으로 만들어서 처리
                    var ul;
                    var gnbLng;
                    var liWidth;

                    ul = Alucard.Dom('ul').S('overflow', 'hidden');
                    gnbLng = data.menu.length;
                    liWidth = [115,117,104,104,114,130];

                    for(var i=0; i<gnbLng; i++){
                        Alucard.Dom('li').S(
                            'over', function(e){
                                this.dom.className = "on";
                            },
                            'out', function(e){
                                this.dom.className = "";
                            },
                            '>', Alucard.Dom('a').S(
                                '@href', data.menu[i].url,
                                '>', Alucard.Dom('strong').S(
                                    'html', data.menu[i].name,
                                    'display', 'inline-block',
                                    'position', 'relative',
                                    'padding-bottom', 23
                                ),
                                'display', 'block',
                                'padding-top', 17,
                                'margin-top', 5,
                                'font-family', 'NotoSanskr_Regular',
                                'font-size', 15,
                                'text-align', 'center',
                                'line-height', '1',
                                'transition', 'all .3s ease-out'
                            ),
                            '<', ul,
                            'float', 'left',
                            'width', liWidth[i]
                        )
                    }
                    return ul;
                })(),
                'display', 'block',
                'margin-left', 130
            );

            Alucard.Css('#gnb ul li a strong::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', '50%', 'bottom', 0, 'z-index', 5, 'width', 0, 'height', 2, 'background', '#1b2855', 'transition', 'width ease-out .3s');
            Alucard.Css('#gnb ul li a strong::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'right', '50%', 'bottom', 0, 'z-index', 5, 'width', 0, 'height', 2, 'background', '#1b2855', 'transition', 'width ease-out .3s');
            Alucard.Css('#gnb ul li.on a strong::before').S('width', '50%');
            Alucard.Css('#gnb ul li.on a strong::after').S('width', '50%');

            return gnb;
        }
    };
})();