var url=location.pathname();
var pos=url.search("/zh-cn");
if(pos == 0){
  location.replace("/zh-cn/404.html");
}
