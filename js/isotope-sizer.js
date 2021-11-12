// new Isotope("section",{
//     itemSelector: ".item",
//     precentPosition: true,
//     transitionDuraition: "0.8s",
//     masonry:{
//         columWidth: ".item-sizer"
//     }
// })
$('section').isotope({
    itemSelector: '.item',
    percentPosition: true,
    masonry: {
      columnWidth: '.item-sizer'
    }
  });
  