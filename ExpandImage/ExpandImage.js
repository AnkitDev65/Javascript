const imgClick = function(event){
    var target = event.currentTarget.className;
    document.querySelectorAll('img').forEach(item => item.className = "collapseImg");
    target = target == "collapseImg" ? "expandImg" : "collapseImg";
    event.currentTarget.className = target;
  }

  //export default imgClick;