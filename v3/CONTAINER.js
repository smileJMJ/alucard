/*
select1Data = {id: 'filter1', val: ['업종', '제조', '제약', '유통', '기관']};
select2Data = {id: 'filter2', val: ['기업 구분', '대기업/계열사', '중견/중소기업', '공기업/공공기관', '외국계']};
searchData = {keyword: 'name', placeholder: "기업명을 검색해보세요"};

listData = {
    type: 'filterList',
    keyword: 'name',                    // filter 될 때 기준이 뭔지
    data: [
        {name: "셀트리온", tit: "셀트리온헬스케어가<br/>잘 나가는 이유!", thumb: "../resources/img/thumb1.jpg", logo: "../resources/img/logo_celltrion.png", filter1: select1Data.val[0], filter2: select2Data.val[0]},
        {name: "SPC", tit: "대규모 그룹 공채<br/>inAIR 하나면 충분해요", thumb: "../resources/img/thumb2.jpg", logo: "../resources/img/logo_spc.png", filter1: select1Data.val[1], filter2: select2Data.val[1]},
        {name: "셀트리온", tit: "셀트리온헬스케어가<br/>잘 나가는 이유!", thumb: "../resources/img/thumb1.jpg", logo: "../resources/img/logo_celltrion.png", filter1: select1Data.val[2], filter2: select2Data.val[2]},
        {name: "SPC", tit: "대규모 그룹 공채<br/>inAIR 하나면 충분해요", thumb: "../resources/img/thumb2.jpg", logo: "../resources/img/logo_spc.png", filter1: select1Data.val[3], filter2: select2Data.val[3]},
        {name: "셀트리온", tit: "셀트리온헬스케어가<br/>잘 나가는 이유!", thumb: "../resources/img/thumb1.jpg", logo: "../resources/img/logo_celltrion.png", filter1: select1Data.val[4], filter2: select2Data.val[4]},
        {name: "SPC", tit: "대규모 그룹 공채<br/>inAIR 하나면 충분해요", thumb: "../resources/img/thumb2.jpg", logo: "../resources/img/logo_spc.png", filter1: select1Data.val[1], filter2: select2Data.val[1]}
    ]
};*/


var CONTAINER;
(function(){
    var container, filterArea, listArea;
    var select1Data, select2Data, searchData, listData;

    CONTAINER = {
        init:function(data){
            select1Data = data.select1;
            select2Data = data.select2;
            searchData = data.search;
            listData = data.filterList;

            filterArea = Alucard.Dom('div').S(
                '@className', 'filter_area',
                '>', Alucard.Dom('div').S(
                    '@className', 'inner',
                    '>', UI.select.init(select1Data),
                    '>', UI.select.init(select2Data),
                    '>', UI.search.init(searchData)
                )
            );

            listArea = Alucard.Dom('div').S(
                '@className', 'list_area',
                '>', Alucard.Dom('div').S(
                    '@className', 'inner',
                    '>', LIST.init(listData)
                )
            );

            container = Alucard.Dom('div').S(
                '@id', 'container',
                '>', VISUAL_SLIDE.init(data.visual_slide),
                '>', filterArea,
                '>', listArea
                //'<', wrap
            );

            Alucard.Css('#container').S('padding-top', 60);
            Alucard.Css('.filter_area').S('padding', '20px 0', 'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)');
            Alucard.Css('.filter_area::after').S('display', 'block', 'content', '""', 'clear', 'both');
            Alucard.Css('.list_area').S('padding', '4.375rem 0 4.875rem', 'background', '#f5f7fa');

            return container;
        },
        destroy:function(){

        },
        replaceContents:function(){

        }
    };
})();