const imgClick = function(event){
    var target = event.currentTarget.classList;
    document.getElementsByClassName('expandImg')[0].classList.remove('expandImg');
    if(!target.contains('expandImg')){
      event.currentTarget.classList.add('expandImg');
    }
  };

  const images = [
    {imgsrc : "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {imgsrc : "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {imgsrc : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"},
    {imgsrc : "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"},
    {imgsrc : "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
  ];

  images.forEach((imgObj, index) => {
    var cssClass = index == 0 ? ' expandImg' : '';
    var innerHTML = `<img class="imgMaster${cssClass}" src="${imgObj.imgsrc}" onclick="imgClick(event)"/>`
    document.getElementsByTagName('body')[0].innerHTML += innerHTML;
  });


  //export default imgClick;