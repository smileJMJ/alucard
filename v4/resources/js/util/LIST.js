var LIST;
(function(){
    var option;
    var objectAssign;
    var makeList;
    var ul;

    option = {
        data: [],               // list에 들어올 데이터
        type: 'common',          // common: 일반 리스트, filter: 필터되는 리스트 (키워드값 필요)
        keyword: null,              // filter list일 때 사용되는 keyword값 (어떤 값으로 필터될 것인지 지정) - json data의 키값
        col: 3,                   // 리스트 column 수 
        cnt: 12,                  // 노출될 총 리스트 수, 'all' 입력하면 전부 노출해줌
        thumb: false,            // 썸네일 유무
        hashtag: false,           // hashtag 노출 여부
        clickCallback: function(){}
    };

    // 객체 합치는 함수 (그냥 만들어 봄)
    /*objectAssign = function(obj1, obj2){
        var newObj;
        var o, b;

        for(o in obj1){
            for(b in obj2){

            }
        }


        return newObj;
    };*/
    
    // 리스트 생성
    makeList = function(){
        //var ul;
        var data;
        var listLng;
        var col;
        var liWidth;
        var liMarginLeft;
        var viewPageDir;

        ul = Alucard.Dom('ul').S(
            'display', 'flex',
            'flex-wrap', 'wrap',
            'margin-left', '-3.1%'
        );
        data = option.data;
        listLng = (option.cnt === 'all') ? data.length : option.cnt;
        col = option.col;
        liMarginLeft = 3.1;
        liWidth = (100 - (liMarginLeft * col)) / col;
        viewPageDir = '/story/view/';

        for(var i=0; i<listLng; i++){
            ul.S(
                '>', (function(){
                    var li = Alucard.Dom('li');

                    if(option.type === 'filter'){
                        li.S(
                            '@data-filter1', data[i].filter1,
                            '@data-filter2', data[i].filter2,
                            '@data-keyword', data[i][option.keyword]
                        )
                    }
                    if(option.thumb){
                        li.S(
                            '>', Alucard.Dom('div').S(
                                '@className', 'thumb',
                                '>', Alucard.Dom('a').S(
                                    '@href', '#',
                                    '@data-url', viewPageDir + data[i].url,
                                    '@className', 'link',
                                    '>', Alucard.Dom('i').S(
                                        'position', 'absolute',
                                        'left', '50%',
                                        'top', '50%',
                                        'width', 50,
                                        'height', 50,
                                        'opacity', 0,
                                        'transform', 'translate(-50.01%,-50%)'
                                    ),
                                    'click', function(e){
                                        e.nativeEvent.preventDefault();
                                        if(option.clickCallback !== undefined) option.clickCallback(e);
                                    },
                                    'display', 'block',
                                    'position', 'absolute',
                                    'left', 0,
                                    'top', 0,
                                    'z-index', 10,
                                    'width', '100%',
                                    'height', '100%'
                                ),
                                '>', Alucard.Dom('figure').S(
                                    'height', '100%',
                                    'min-height', 211,
                                    'background-position', 'center center',
                                    'background-repeat', 'no-repeat',
                                    'background-size', 'cover',
                                    'background-image', 'url('+data[i].thumb+')'
                                ),
                                '>', Alucard.Dom('span').S(
                                    '@className', 'mask',
                                    'display', 'block',
                                    'position', 'absolute',
                                    'left', 0,
                                    'top', 0,
                                    'z-index', 5,
                                    'width', '100%',
                                    'height', '100%',
                                    'background', '#000',
                                    'opacity', 0
                                ),
                                'overflow', 'hidden',
                                'position', 'relative',
                                'width', '100%',
                                'height', 211
                            )
                        );
                    }

                    // li common code
                    li.S(
                        '>', Alucard.Dom('div').S(
                            '@className', 'description',
                            '>', Alucard.Dom('a').S(
                                '@href', '#',
                                '@data-url', viewPageDir + data[i].url,
                                '@className', 'link',
                                '>', Alucard.Dom('div').S(
                                    '@className', 'logo',
                                    '>', Alucard.Dom('p').S(
                                        '>', Alucard.Dom('img').S(
                                            '@src', data[i].logo,
                                            'width', 'auto',
                                            'max-height', 48
                                        ),
                                        'display', 'table-cell',
                                        'vertical-align', 'bottom'
                                    ),
                                    'display', 'table',
                                    'overflow', 'hidden',
                                    'height', 48,
                                    'margin-bottom', 25,
                                    'text-align', 'left'
                                ),
                                '>', Alucard.Dom('div').S(
                                    '@className', 'list_text',
                                    '>', Alucard.Dom('p').S(
                                        'html', data[i].tit
                                    ),
                                    'overflow', 'hidden',
                                    'max-height', '6.94rem',
                                    'font-family', 'NanumSquare',
                                    'font-size', '1.625rem',
                                    'color', '#000',
                                    'line-height', '1.46'
                                ),
                                'click', function(e){
                                    e.nativeEvent.preventDefault();
                                    if(option.clickCallback !== undefined) option.clickCallback(e);
                                },
                                'display', 'block',
                                'width', '100%',
                                'height', '100%',
                                'min-height', 273,
                                'padding', '15px 8% 60px 12%'
                            ),
                            '>', (function(){
                                if(!option.hashtag) return null;            // false 되었을 때도 dom을 추가해줘야하는 형태인데.. 빈 태그를 넣어야 하는 것인가..
                                return Alucard.Dom('div').S(
                                    '@className', 'hashtag',
                                    '>', Alucard.Dom('ul').S(
                                        '>', Alucard.Dom('li').S(
                                            '>', Alucard.Dom('a').S('@href', '#', '@data-tag', data[i].filter1, 'html', '#'+data[i].filter1)
                                        ),
                                        '>', Alucard.Dom('li').S(
                                            '>', Alucard.Dom('a').S('@href', '#', '@data-tag', data[i].filter2, 'html', '#'+data[i].filter2)
                                        )
                                    ),
                                    'position', 'absolute',
                                    'left', '12%',
                                    'bottom', 35,
                                    'z-index', 10
                                );

                            })(),
                            'overflow', 'hidden',
                            'position', 'relative'
                        )
                    );

                    li.S(
                        'overflow', 'hidden',
                        'width', liWidth + '%',
                        /*'max-width', 336,*/
                        'margin-left', liMarginLeft + '%',
                        'margin-bottom', '2.5rem',
                        'background', '#fff',
                        'box-shadow', '3px 0 30px rgba(0,0,0,0.1)'
                    );

                    return li;
                })()
            )
        }

        Alucard.Css('.list_area .thumb a i::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', 0, 'top', 24, 'width', 50, 'height', 2, 'background', '#fff');
        Alucard.Css('.list_area .thumb a i::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', 24, 'top', 0, 'width', 2, 'height', 50, 'background', '#fff');
        Alucard.Css('.list_area .description .hashtag li').S('display', 'inline-block', 'margin-right', 5);
        Alucard.Css('.list_area .description .hashtag li a').S('position', 'relative', 'font-family', 'NotoSanskr_Regular', 'font-size', '0.875rem', 'color', '#000');
        Alucard.Css('.list_area .description .hashtag li a::before').S('display', 'block', 'content', '""', 'position', 'absolute', 'left', '50%', 'bottom', -2, 'width', 0, 'height', 1, 'background', '#000', 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
        Alucard.Css('.list_area .description .hashtag li a::after').S('display', 'block', 'content', '""', 'position', 'absolute', 'right', '50%', 'bottom', -2, 'width', 0, 'height', 1, 'background', '#000', 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
        Alucard.Css('.list_area .description .hashtag li a:hover::before').S('width', '50%');
        Alucard.Css('.list_area .description .hashtag li a:hover::after').S('width', '50%');

        return ul;
    };

    // LIST host code
    LIST = {
        init: function(opt){
            option = Object.assign(option, opt);
            //option = objectAssign(option, opt);

            return makeList();
        },
        destroy: function(){
            ul.remove();                // Alucard.Dom(ul) 이 지워지는 것은 아님. li 가진 그대로 남아있음
                                        //  Alucard.Dom(ul) 지워지는 함수는 뭐지..
        }
    };
})();