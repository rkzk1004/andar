// topbanner-aside
const swiperTopBanner = new Swiper('.swiper-topbanner',{
  effect:'fade',
  slidesPerView:1,
  // spaceBetween:30,
  speed:1000,
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  // centeredSlides: true,
})

// 스크롤 이벤트
let lastCurr = 0
$(window).scroll(function(){
  let curr = $(this).scrollTop()

  // .header 스크롤
  if(curr>=1){
    $('.header').addClass('on')
  }else{
    $('.header').removeClass('on')
  }

  // .quick-area 스크롤
  if(curr>=200){
    if(curr<lastCurr){
      $('.quick-area').fadeIn()
    }else{
      $('.quick-area').fadeOut()
    }
    lastCurr = curr
  }else{
    $('.quick-area').fadeOut()
  }
})

// .quick-area 화살표클릭시 맨위로 이동
$('.quick-area .btn-top').click(function(e){
  e.preventDefault()
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})

// .header .swiper-gnb
const swiperGnb = new Swiper('.swiper-gnb',{
  effect:'fade',
  slidesPerView:1,
  speed:1000,
  autoplay: {
    delay:3000,
    disableOnInteraction:false,
  },
})

// .header 사이드메뉴 열고닫기
$('.header .btn-menu').click(function(){
  $('body').addClass('on')
  $('.header').addClass('after')
  $('.group-side-nav').addClass('on')
})
$('.group-side-nav .btn-close').click(function(){
  $('body').removeClass('on')
  $('.header').removeClass('after')
  $('.group-side-nav').removeClass('on')
})

$(document).click(function(e){
  if($('.header').has(e.target).length===0){
    $('.header').removeClass('after')
    $('.group-side-nav').removeClass('on')
  }
})

// .header 검색영억 열고닫기
$('.header .util-area .btn-search').click(function(){
  $('.header .group-search').addClass('on')
})
$('.header .group-search .btn-close').click(function(){
  $('.header .group-search').removeClass('on')
})

// .header .gnb-area
$('.btn-allmenu').click(function(){
  $('.gnb-list').toggleClass('on')
  $('.allmenu-title').toggleClass('on')
  $('.gnb-sublist').slideToggle()
})

// .header .group-side-nav 서브메뉴 열고 닫기
$('.header .content-item .title-box').each(function(){
  $(this).click(function(){
    $(this).toggleClass('on')
    $(this).parent().find('.content-sublist').slideToggle()
  })
})

// .sc-main-banner
const swiperMainBanner = new Swiper('.swiper-main-banner',{
  effect:'fade',
  slidesPerView:1,
  // spaceBetween:30,
  speed:1000,
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  // centeredSlides:true,
  pagination: {
    el: ".sc-main-banner .swiper-pagination",
  },
})

// .sc-best 탭메뉴
$('.sc-best .tab-item a').click(function(e){
  e.preventDefault()
  let tabName= $(this).data('best')

  $(this).addClass('on').parent().siblings().find('a').removeClass('on')
  $(tabName).addClass('on').siblings().removeClass('on')
})

// .sc-membership
const swiperMembership = new Swiper('.swiper-membership',{
  slidesPerView:1,
  loop:true,
  speed:1000,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  pagination: {
    el:".swiper-membership .swiper-pagination",
    type:"fraction",
  },
})

// .sc-recopick
const swiperRecopick = new Swiper('.swiper-recopick',{
  slidesPerView:1,
  speed:1000,
  pagination:{
    el:".sc-recopick .swiper-pagination",
  },
})

// .sc-cate
const swiperCateLeggings = new Swiper('.swiper-cate-leggings',{
  slidesPerView:'auto',
  speed:1000,
})
const swiperCateBratop = new Swiper('.swiper-cate-bratop',{
  slidesPerView:'auto',
  speed:1000,
})
const swiperCateSet = new Swiper('.swiper-cate-set',{
  slidesPerView:'auto',
  speed:1000,
})