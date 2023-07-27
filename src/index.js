// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper.on('slideChange', function () {
let div =  document.getElementById("swiper-page");
div.textContent =swiper.activeIndex+1;
console.log(swiper.activeIndex)
  console.log('slide changed');
});

//2つ目
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper2.on('slideChange', function () {
let div =  document.getElementById("swiper-page-2");
div.textContent =swiper2.activeIndex+1;
console.log(swiper2.activeIndex)
  console.log('slide changed');
});









import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: 'エラーが発生!',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上入力',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '文字が多すぎます',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: 'エラーが発生!',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
      errorMessage: '未入力!',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: 'エラーが発生!',
    },
    {
      rule: 'password',
      errorMessage: '文字数が少ない!',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: 'エラーが発生!',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力!',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18歳以上!',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '老けすぎ!',
    },
 ])
  
.addField('#basic_address', [
	{
	  rule: 'required',
    errorMessage: 'エラーが発生!',
	},	
])

.onSuccess(onSuccess);

function onSuccess(event){
  let formData = new FormData(event.target);
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  console.log(formData.get("age"));
  console.log(formData.get("address"));
}