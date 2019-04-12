var GNB;
(function(){
    GNB = {
        init: function(data){
            var gnb = Alucard.Dom('nav').S(
                '@id', 'gnb',
                '@data-type', data.type,
                '>', (function(){							// li, a 다 dom으로 만들어서 처리
                    var ul = Alucard.Dom('ul'),
                        gnbLng = data.menu.length;

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
                                    'html', data.menu[i].name
                                )
                            ),
                            '<', ul
                        )
                    }
                    return ul;
                })()
                /*'>', Alucard.Dom('ul').S(					// li, a 를 html 태그로 만들어 넣음
                    'html', (function(){
                        var	html = "",
                                gnbLng = gnbData.length;
                        for(var i=0; i<gnbLng; i++){
                            html += '<li><a href="'+gnbData[i].url+'">'+gnbData[i].name+'</a></li>';
                        }
                        return html;
                    })()
                )*/
            );

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

            return gnb;
        },
        destroy: function(){

        }
    };
})();