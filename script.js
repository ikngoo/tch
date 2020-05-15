var place_data=[
  {
   tag: "taipei_city",
   place: "臺北市",
   low: 2280,
   high: "  letters",
   weather: "img/wordcloud_臺北市.png"
  },

  {
   tag: "new_taipei_city",
   place: "新北市",
   low: 2769,
   high: "  letters",
   weather: "img/wordcloud_新北市.png"
  },

  {
   tag: "taichung_city",
   place: "臺中市",
   low: 1711,
   high: "  letters",
   weather: "img/wordcloud_臺中市.png"
  },

  {
   tag: "tainan_city",
   place: "臺南市",
   low: 857,
   high: "  letters",
   weather: "img/wordcloud_臺南市.png"
  },

  {
   tag: "kaohsiung_city",
   place: "高雄市",
   low: 1640,
   high: "  letters",
   weather: "img/wordcloud_高雄市.png"
  },

  {
   tag: "keelung_city",
   place: "基隆市",
   low: 400,
   high: "  letters",
   weather: "img/wordcloud_基隆市.png"
  },

  {
   tag: "taoyuan_county",
   place: "桃園市",
   low: 1172,
   high: "  letters",
   weather: "img/wordcloud_桃園市.png"
  },

  {
   tag: "hsinchu_city",
   place: "新竹市",
   low: 321,
   high: "  letters",
   weather: "img/wordcloud_新竹市.png"
  },

  {
   tag: "hsinchu_county",
   place: "新竹縣",
   low: 353,
   high: "  letters",
   weather: "img/wordcloud_新竹縣.png"
  },

  {
   tag: "miaoli_county",
   place: "苗栗縣",
   low: 245,
   high: "  letters",
   weather: "img/wordcloud_苗栗縣.png"
  },

  {
   tag: "changhua_county",
   place: "彰化縣",
   low: 581,
   high: "  letters",
   weather: "img/wordcloud_彰化縣.png"
  },

  {
   tag: "nantou_county",
   place: "南投縣",
   low: 236,
   high: "  letters",
   weather: "img/wordcloud_南投縣.png"
  },

  {
   tag: "yunlin_county",
   place: "雲林縣",
   low: 186,
   high: "  letters",
   weather: "img/wordcloud_雲林縣.png"
  },

  {
   tag: "chiayi_city",
   place: "嘉義市",
   low: 244,
   high: "  letters",
   weather: "img/wordcloud_嘉義市.png"
  },

  {
   tag: "chiayi_county",
   place: "嘉義縣",
   low: 168,
   high: "  letters",
   weather: "img/wordcloud_嘉義縣.png"
  },

  {
   tag: "pingtung_county",
   place: "屏東縣",
   low: 262,
   high: "  letters",
   weather: "img/wordcloud_屏東縣.png"
  },

  {
   tag: "yilan_county",
   place: "宜蘭縣",
   low: 183,
   high: "  letters",
   weather: "img/wordcloud_宜蘭縣.png"
  },

  {
   tag: "hualien_county",
   place: "花蓮縣",
   low: 153,
   high: "  letters",
   weather: "img/wordcloud_花蓮縣.png"
  },

  {
   tag: "taitung_county",
   place: "臺東縣",
   low: 66,
   high: "  letters",
   weather: "img/wordcloud_臺東縣.png"
  },

  {
   tag: "penghu_county",
   place: "澎湖縣",
   low: 19,
   high: "  letters",
   weather: "img/wordcloud_澎湖縣.png"
  },

  {
   tag: "kinmen_county",
   place: "金門縣",
   low: 16,
   high: "  letters",
   weather: "img/wordcloud_金門縣.png"
  },

  {
   tag: "lienchiang_county",
   place: "連江縣",
   low: 6,
   high: "  letters",
   weather: "img/wordcloud_連江縣.png"
  },
]
;

var vm = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: place_data
  },computed:{
    now_area: function(){
      var vobj=this;
      var result=this.place_data.filter(function(obj){
        return obj.tag==vobj.filter;
      });
      if (result.length==0){
        return null;
      }
      return result[0];
    }
  }
});

$("path").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
  vm.filter=tagname;

});