var UI;
(function(){
    UI = {
        select: {                                           // select box
            init: function(data){
                var self = this,
                    select;

                select = Alucard.Dom('div').S(
                    '@id', data.id,
                    '@className', 'style_select',
                    '>', Alucard.Dom('dl').S(
                        '>', Alucard.Dom('dt').S(
                            '>', Alucard.Dom('a').S('@href', '#', 'html', data.val[0],
                                'click', function(e){
                                    e.nativeEvent.preventDefault();			// preventDefault는 nativeEvent에서 찾기
                                    self.styleSelectFunc(this);
                                })
                        ),
                        '>', Alucard.Dom('dd').S(
                            '>', (function(){
                                var ul = Alucard.Dom('ul'),
                                    val = data.val,
                                    valLng = data.val.length;

                                for(var i=0; i<valLng; i++){
                                    Alucard.Dom('li').S(
                                        '>', (function(){
                                            var a = Alucard.Dom('a'),
                                                value = (i===0) ? 'all' : data.val[i];
                                            a.S('@href', '#', '@data-value', value, 'html', data.val[i]);
                                            return a;
                                        })(),
                                        '<', ul
                                    );
                                }
                                return ul;
                            })()
                        )
                    )
                );

                Alucard.Css('.style_select').S('position', 'relative', 'float', 'left', 'width', '31.62%');
                Alucard.Css('.style_select#filter2').S('margin-left', '2.56%');
                Alucard.Css('.style_select dt').S('height', 46);
                Alucard.Css('.style_select dt a').S('display', 'block', 'position', 'relative', 'height', '100%', 'padding', '0 25px', 'font-family', 'NotoSanskr_Regular', 'font-size', '0.937rem', 'color', '#000', 'line-height', 44, 'background', '#f5f7fa', 'border', '1px solid #f5f7fa', 'transition', 'all .3s ease-out');
                Alucard.Css('.style_select dt a::after').S('display', 'block', 'content', '"\\e874"', 'position', 'absolute', 'right', 19, 'top', 0, 'font-family', 'Linearicons-Free', 'font-weight', 'bold', 'line-height', 46, 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
                Alucard.Css('.style_select dl dd').S('display', 'none', 'overflow', 'hidden', 'position', 'absolute', 'left', 0, 'top', 46, 'z-index', 100, 'width', '100%', 'height', 0, 'border', '1px solid #e3e3e3', 'border-top', 0, 'box-shadow', '3px 3px 10px rgba(0,0,0,0.1)');
                Alucard.Css('.style_select dl dd ul li a').S('display', 'block', 'padding', '15px 25px', 'font-family', 'NotoSanskr_Regular', 'font-size', '0.937rem', 'color', '#000', 'background', '#fff', 'transition', 'all .2s ease-out');

                return select;
            },
            styleSelectFunc:function(el){
                var ele = el.dom,
                    dd = ele.parentNode.nextSibling,
                    ul = dd.childNodes[0];

                if(ele.className === "open"){
                    ele.className = "";
                    TweenMax.to(dd, 0.25, {height:0, ease:"Cubic.easeOut", onComplete:function(){
                            TweenMax.set(dd, {display:"none"});
                        }});
                }else{
                    ele.className = "open";
                    TweenMax.set(dd, {display:"block"});
                    TweenMax.to(dd, 0.25, {display:"block", height:ul.clientHeight, ease:"Cubic.easeOut"});
                }
            }
        },
        search: {                                               // 검색바
            init: function(data){
                var search = Alucard.Dom('div').S(
                    '@className', 'search-container',
                    '@data-keyword', data.keyword,
                    '>', Alucard.Dom('button').S('@type', 'button', '@className', 'btn_search'),
                    '>', Alucard.Dom('input').S('@type', 'text', '@id', 'quicksearch', '@className', 'text-search', '@placeholder', data.placeholder)
                );

                Alucard.Css('.search-container').S('float', 'right', 'width', '31.6%', 'margin-left', '2.56%');
                Alucard.Css('.search-container .btn_search').S('overflow', 'hidden', 'position', 'absolute', 'right', 0, 'top', 0, 'width', 37, 'height', 46, 'background', 'url(../resources/img/search_icon.svg) no-repeat left center', 'background-size', '18px auto');
                Alucard.Css('.search-container input[type="text"]#quicksearch').S('width', '100%', 'height', 46, 'padding', '10px 42px 10px 25px', 'font-family', 'NotoSanskr_Regular', 'font-size', '0.9375rem', 'color', '#999aa3', 'line-height', 20, 'background', '#f5f7fa', 'border', '1px solid #f5f7fa');

                return search;
            }
        }
    };
})();