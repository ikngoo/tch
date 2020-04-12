var place_data=[
  {
   tag: "taipei_city",
   place: "臺北市",
   low: 2107,
   high: "  letters",
   weather: "img/wordcloud_TP.png"
  },

  {
   tag: "new_taipei_city",
   place: "新北市",
   low: 2578,
   high: "  letters",
   weather: "img/wordcloud_NTP.png"
  },

  {
   tag: "taichung_city",
   place: "臺中市",
   low: 1542,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "tainan_city",
   place: "臺南市",
   low: 801,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "kaohsiung_city",
   place: "高雄市",
   low: 1498,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "keelung_city",
   place: "基隆市",
   low: 385,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "taoyuan_country",
   place: "桃園市",
   low: 1085,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "hsinchu_city",
   place: "新竹市",
   low: 303,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "hsinchu_country",
   place: "新竹縣",
   low: 331,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "miaoli_country",
   place: "苗栗縣",
   low: 200,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "changhua_country",
   place: "彰化縣",
   low: 512,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "nantou_country",
   place: "南投縣",
   low: 196,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "yunlin_country",
   place: "雲林縣",
   low: 178,
   high: "  letters",
   weather: "Cloudy"
  },

  {
   tag: "chiayi_city",
   place: "嘉義市",
   low: 191,
   high: "  letters",
   weather: "Rainy"
  },

  {
   tag: "chiayi_country",
   place: "嘉義縣",
   low: 155,
   high: "  letters",
   weather: "Cloudy"
  },

  {
   tag: "pingtung_country",
   place: "屏東縣",
   low: 247,
   high: "  letters",
   weather: "Cloudy"
  },

  {
   tag: "yilan_country",
   place: "宜蘭縣",
   low: 172,
   high: "  letters",
   weather: "Cloudy"
  },

  {
   tag: "hualien_country",
   place: "花蓮縣",
   low: 133,
   high: "  letters",
   weather: "Sunny"
  },

  {
   tag: "taitung_country",
   place: "臺東縣",
   low: 57,
   high: "  letters",
   weather: "Sunny"
  },

  {
   tag: "penghu_country",
   place: "澎湖縣",
   low: 15,
   high: "  letters",
   weather: "Cloudy"
  },

  {
   tag: "kinmen_country",
   place: "金門縣",
   low: 13,
   high: "  letters",
   weather: "Sunny"
  },

  {
   tag: "lienchiang_country",
   place: "連江縣",
   low: 6,
   high: "  letters",
   weather: "Rainy"
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