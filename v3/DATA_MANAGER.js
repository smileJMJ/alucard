var DATA_MANAGER;
(function(){
    DATA_MANAGER = {
      init: function(opt){                  // json 에서 키값이 일치하는게 없으면 데이터 전부 파싱, 키값 일치하면 해당 데이터만 파싱
          var self = this;
          self.parsing(opt);
      },
      parsing: function(opt){
          Alucard.ajaxGet(function(v){
              var data = (JSON.parse(v)[opt.key] === undefined) ? JSON.parse(v) : JSON.parse(v)[opt.key];

              opt.callback(data);
          }, 'storyData.json');
      }
    };
})();