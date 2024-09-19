// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement;
const headert = document.querySelector('.header__transparent');
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
    if (document.querySelector('.history__rotate')) {
      document.querySelector('.history__rotate').style.height = document.querySelector('.history__rotate').clientWidth + 'px';
    }
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start scroll
scroll = new LocomotiveScroll({ el: document.querySelector('[data-scroll-container]'), smooth: true, getDirection: true, scrollFromAnywhere: true, breakpoint: 0, inertia: 1.7, mobile: { breakpoint: 0, smooth: false, inertia: 0, }, tablet: { breakpoint: 0, smooth: false, inertia: 1.7, }, smartphone: { breakpoint: 0, smooth: false, inertia: 1.7, } })
// scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth: true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,inertia: 0,tablet: {breakpoint: 0,smooth: false,inertia: 0,}})
new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

const header = document.querySelector('.header');
const projecttop = document.querySelector('.project_top');
const projecttopinfo = document.querySelector('.project_top__info');
const headerprogress = document.querySelector('.header__progress_bar');

if (!document.querySelector('.has-scroll-smooth')) {
  window.addEventListener('scroll', function () {
    if (headert) {
      if (window.scrollY <= 40) {
        header.classList.add('header__transparent');
      } else {
        header.classList.remove('header__transparent');
      }
    }

    document.documentElement.setAttribute('scroll', `${window.scrollY}`);
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let documentHeight = Math.max(
      window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight, document.querySelector('.main').clientHeight
    );
    let scrollpage = Math.round((scrollTop / (document.querySelector('.main').clientHeight - windowHeight)) * 100);
    headerprogress.style.flexBasis = scrollpage + '%';

  });
} else {
  scroll.on('scroll', (args) => {
    var scrollY = Math.round(args["scroll"]["y"]);
    var scrollH = Math.round(args["limit"]["y"]);
    let scrollheader = Math.round((scrollY / scrollH) * 100);
    headerprogress.style.flexBasis = scrollheader + '%';

    document.documentElement.setAttribute('scroll', `${Math.round(args["scroll"]["y"])}`);

    if (headert) {
      if (Math.round(args["scroll"]["y"]) <= 40) {
        header.classList.add('header__transparent');
      } else {
        header.classList.remove('header__transparent');
      }
    }
  });
}
// end scroll

// start cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorBlock = cursor.querySelector(".cursor__block");
  const a = document.querySelectorAll('a');
  const button = document.querySelectorAll('button');
  const label = document.querySelectorAll('label');
  const hslanguageicon = document.querySelectorAll('.header__set_language_icon');
  const sinview = document.querySelectorAll('.showreel__button');
  const cursorgrab = document.querySelectorAll('.c-scrollbar_thumb');
  const buttonnext = document.querySelectorAll('.swiper-button-next');
  const buttonprev = document.querySelectorAll('.swiper-button-prev');
  const sliders = document.querySelectorAll(".swiper-wrapper");

  document.addEventListener('mousemove', function (e) {
    let ctx = e.clientX;
    let cty = e.clientY;
    if (ctx > (document.body.offsetWidth - 5) || cty > (document.body.offsetHeight - 5) || ctx < 5 || cty < 5) {
      cursor.classList.add('leave')
    } else {
      cursor.classList.remove('leave')
    }
  });

  function moveCursor(event) {
    var cursorX = event.clientX + "px";
    var cursorY = event.clientY + "px";
    cursor.style.transform = `translate3d(${cursorX}, ${cursorY}, 0)`;
  }

  document.onmousemove = (event) => {
    moveCursor(event);
    cursor.classList.remove("active");
  };

  document.onpointermove = (event) => {
    moveCursor(event);
    cursor.classList.remove("active");
  };

  document.addEventListener('mousedown', function () {
    cursor.classList.add('active')
  });

  document.addEventListener('mouseup', function () {
    cursor.classList.remove('active')
  });

  sinview.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__showreel");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__showreel");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    };
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  });

  cursorgrab.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  sliders.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__slider");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__slider");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    };
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  });

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  button.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  hslanguageicon.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  label.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonnext.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonprev.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })
});
// end cursor

// start year
const year = document.querySelector('.footer__year');
if (year) {
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start domen
const domen = document.querySelector('.domen');
if (domen) {
  let domens = document.querySelectorAll(".domen");
  for (let i = 0; i < domens.length; i++) {
    domens[i].innerText = window.location.hostname;
  }
}
// end domen

const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const menuItemActive = document.getElementsByClassName("header__nav_item active");

// button header__burger
burger.addEventListener('click', function () {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    headerClose.classList.remove("active");
    document.documentElement.classList.remove("noscroll");
    scroll.start();
  } else {
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
    headerClose.classList.add("active");
    document.documentElement.classList.add("noscroll");
    header.classList.remove("hidden");
    scroll.stop();
  }
})
// end header__burger

// button overlay
headerClose.addEventListener('click', function () {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  header.classList.remove("active");
  headerClose.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
  scroll.start();
})
overlay.addEventListener('click', function () {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  header.classList.remove("active");
  headerClose.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
  scroll.start();
})
// end overlay

// start product count
const productInputs = document.querySelectorAll(".product__count_input input");
productInputs.forEach(productInput => {
  const countContainer = productInput.closest('.product__count');
  if (productInput) {
    productInput.oninput = function () {
      this.value = this.value.replace(/[^0-9]$/g, '');
      updateButtonState(parseInt(this.value) || 0, parseInt(this.getAttribute('max')), 1, countContainer);
    }

    if (document.getElementById("product__forname")) {
      document.getElementById("product__forname").oninput = function () {
        this.value = this.value.substr(0, this.getAttribute('maxl'));
        this.value = this.value.replace(/[^a-z\ ]+/ig, "");
      }
    }

    const updateButtonState = (currentValue, max, min, container) => {
      const minusButton = container.querySelector('.product__minus');
      const plusButton = container.querySelector('.product__plus');

      if (currentValue <= min) {
        minusButton.classList.add('disabled');
      } else {
        minusButton.classList.remove('disabled');
      }

      if (currentValue >= max) {
        plusButton.classList.add('disabled');
      } else {
        plusButton.classList.remove('disabled');
      }
    };

    countContainer.querySelectorAll('.product__minus').forEach(function (element) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        let input = this.parentElement.querySelector('.product__count_input input');
        let count = parseInt(input.value) - 1;
        count = count < 1 ? 1 : count;
        input.value = count;
        updateButtonState(count, parseInt(input.getAttribute('max')), 1, countContainer);
      });
    });

    countContainer.querySelectorAll('.product__plus').forEach(function (element) {
      element.addEventListener('click', function (event) {
        let inputMax = this.parentElement.querySelector('.product__count_input input').getAttribute('max');
        event.preventDefault();
        let input = this.parentElement.querySelector('.product__count_input input');
        let count = parseInt(input.value) + 1;
        count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
        input.value = count;
        updateButtonState(count, parseInt(inputMax), 1, countContainer);
      });
    });

    countContainer.querySelectorAll('.product__count_input input').forEach(function (element) {
      element.addEventListener("change", function (event) {
        let inputMax = this.getAttribute('max');
        event.preventDefault();
        if (this.value.match(/[^0-9]/g)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
          this.value = 1;
        }
        if (this.value > parseInt(inputMax)) {
          this.value = inputMax;
        }
        updateButtonState(parseInt(this.value), parseInt(inputMax), 1, countContainer);
      });
    });

    updateButtonState(parseInt(productInput.value) || 1, parseInt(productInput.getAttribute('max')), 1, countContainer);
  }
});

// end product count

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('form__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('form__select_list_opened')
    this.selectArrow.classList.add('form__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('form__select_list_opened')
    this.selectArrow.classList.remove('form__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    element.parentNode.parentNode.classList.add("success");
    element.parentNode.parentNode.classList.remove("error");
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start select
var productButton = document.getElementsByClassName("product__accordion_button");
var i;

for (i = 0; i < productButton.length; i++) {
  productButton[i].onclick = function (e) {
    var productNext = this.nextElementSibling;
    var productInfo = document.getElementsByClassName("product__accordion_info");
    var productInfoActive = document.getElementsByClassName("product__accordion_button active");

    if (productNext.style.maxHeight) {
      productNext.style.maxHeight = null;
      this.classList.remove("active");
      productNext.classList.remove("active");
    } else {
      for (var q = 0; q < productInfoActive.length; q++) {
        productInfoActive[q].classList.remove("active");
        productInfo[q].classList.remove("active");
      }
      for (var p = 0; p < productInfo.length; p++) {
        this.classList.remove("active");
        productInfo[p].classList.remove("active");
        productInfo[p].style.maxHeight = null;
      }
      productNext.style.maxHeight = productNext.scrollHeight + "px";
      productNext.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end select

// start about_slider__swiper
const aboutSlider = document.querySelector('.about_slider__swiper');
if (aboutSlider) {
  var aboutSwiper = new Swiper('.about_slider__swiper', {
    loop: false,
    slidesPerView: "auto",
    loopedSlides: 1,
    spaceBetween: 8,
    breakpoints: {
      1024: {
        spaceBetween: 24,
      },
      768: {
        spaceBetween: 16,
      },
    },
  });
}
// end about_slider__swiper

// start product
const productSlider = document.querySelector('.product__swiper');
if (productSlider) {
  var productThumbs = new Swiper('.product__thumbs_swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: "auto",
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var productSlide = new Swiper('.product__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false,
    speed: 400,
    thumbs: {
      swiper: productThumbs,
    },
    pagination: {
      el: ".product__pagination",
      clickable: true,
    },
  });
}
// end product

// start filters

const filtersBtn = document.querySelector(".btn_filters");
const filtersBlock = document.querySelector(".filters");
const filtersSubmit = document.querySelector("#submit_filters");
const filtersBoxGroup = document.querySelectorAll(".filters_box");
const filtersCheckbox = document.querySelectorAll(".filters_item__checkbox");
const uncheck = [...document.querySelectorAll(".filters_item__checkbox")];
const spanCheck = document.querySelector(".btn_filters")?.children[1].children[0]
let numberCheck = 0

if (filtersBtn) {
  filtersBtn.addEventListener('click', function () {
    filtersBlock.classList.toggle('active')
  })
}

if (filtersSubmit) {
  filtersSubmit.addEventListener('click', function () {
    event.preventDefault()
    filtersBlock.classList.remove('active')
  })
}

if (filtersBoxGroup) {
  filtersBoxGroup.forEach((groupItem, i) => {
    if (i > 0) {
      groupItem.addEventListener('click', function () {
        var questionsitemNext = this.children[1];
        if (questionsitemNext.style.maxHeight) {
          questionsitemNext.style.maxHeight = null;
          groupItem.classList.remove('active')
        } else {
          questionsitemNext.style.maxHeight = questionsitemNext.scrollHeight + "px";
          groupItem.classList.add('active')
        }
      });
    }
  });
}

uncheck.forEach(input => input.addEventListener('input', function (event) {
  if (event.target.checked) {
    numberCheck++
    spanCheck.innerHTML = numberCheck
  } else {
    numberCheck--
    spanCheck.innerHTML = numberCheck
  }
}))

// end filters

// start ingredient popup mobile

const ingredientItems = document.querySelectorAll(".ingredient");
const ingredientpopup = document.querySelector('.ingredient_popup');
const ingredientpopupOverlay = document.querySelector('.ingredient_popup__overlay');
const ingredientPopupInfo = document.querySelector('.ingredient_popup__info');

if (ingredientpopupOverlay) {
  ingredientItems.forEach((ingredient, i) => {
    ingredient.addEventListener('click', function () {
      ingredientpopup.classList.add('active');
      ingredientpopupOverlay.classList.add('active');
      document.documentElement.classList.add("noscroll");
      const ingredientText = this.children[0].children[1]
      const ingredientName = this.children[1]
      ingredientPopupInfo.innerHTML = `<p>${ingredientName.innerHTML}</p>` + ingredientText.innerHTML;
      scroll.stop();
    });
  });
  if (ingredientpopupOverlay) {
    ingredientpopupOverlay.addEventListener('click', e => {
      ingredientpopup.classList.remove('active');
      ingredientpopupOverlay.classList.remove('active');
      document.documentElement.classList.remove("noscroll");
      scroll.start();
    });
  }
  document.querySelector('.ingredient_popup__close').addEventListener('click', e => {
    ingredientpopup.classList.remove('active');
    ingredientpopupOverlay.classList.remove('active');
    document.documentElement.classList.remove("noscroll");
    console.log('sss')
    scroll.start();
  });
}

// end ingredient popup mobile

// start popup

const forWhomItems = document.querySelectorAll(".order_compound__for_whom_wrapper");
const popUpForWhom = document.querySelector('.pop_up.for_whom');
const popUpOverlay = document.querySelector('.pop_up__overlay');
const problemPaymentItem = document.querySelector("#orderBtnCancel");

const popUpProblemPayment = document.querySelector('.pop_up.problem_payment');
const popUpCancelOrder = document.querySelector('.pop_up.cancel_order');

const forWhomPopUpInput = document.querySelector('.for_whom.pop_up .form__input');

if (forWhomItems.length > 0) {
  forWhomItems.forEach((forWhom, i) => {
    forWhom.addEventListener('click', function () {
      forWhomPopUpInput.setAttribute("data-idproduct",forWhom.getAttribute("data-idproduct")); 
      forWhom.classList.add('active')
      popUpForWhom.classList.add('active');
      popUpOverlay.classList.add('active');
      document.documentElement.classList.add("noscroll");
      scroll.stop();
    });
  });
}

if (problemPaymentItem) {
  problemPaymentItem.addEventListener('click', function () {
    popUpCancelOrder.classList.add('active')
    popUpOverlay.classList.add('active');
    document.documentElement.classList.add("noscroll");
    scroll.stop();
  });
}

if (popUpOverlay) {  
  popUpOverlay.addEventListener('click', e => {
    popUpForWhom?.classList.remove('active');
    popUpOverlay.classList.remove('active');
    popUpProblemPayment?.classList.remove('active');
    popUpCancelOrder?.classList.remove('active');
    document.documentElement.classList.remove("noscroll");
    scroll.start();
  });
  document.querySelectorAll('.pop_up__close').forEach((closeItem) => {
    closeItem.addEventListener('click', e => {
      popUpForWhom?.classList.remove('active');
      popUpOverlay.classList.remove('active');
      popUpProblemPayment?.classList.remove('active');
      popUpCancelOrder?.classList.remove('active');
      document.documentElement.classList.remove("noscroll");
      scroll.start();
    });
  })
  
}

// end popup 

// start for whom popup btn
const forWhomPopUpBtn = document.querySelector('.for_whom .pop_up__btn .btn');

if (forWhomPopUpBtn) {
  forWhomPopUpBtn.disabled = true;
}

if (forWhomPopUpInput) {
  forWhomPopUpInput.addEventListener('input', e => {
    forWhomPopUpBtn.disabled = e.target.value.trim().length === 0;
  });
}

if (forWhomPopUpBtn) {
  forWhomPopUpBtn.addEventListener('click', () => {
    const activeWrapper = document.querySelector('.order_compound__for_whom_wrapper.active');
    const activeName = activeWrapper.querySelector('.order_compound__for_whom_name');
    if (activeName) {
      activeName.innerText = forWhomPopUpInput.value;
      activeName.classList.remove('order_compound__for_whom_question');
    }
    activeWrapper.classList.remove('active');
    forWhomPopUpBtn.disabled = true; 
    popUpForWhom.classList.remove('active');
    popUpOverlay.classList.remove('active');
    document.documentElement.classList.remove("noscroll");
    scroll.start();
    forWhomPopUpInput.value = ""; 
  });
}

// end forWhomPopUpBtn

// start yandex map
const maps = document.getElementById("map");
if (maps) {
  var myMap, ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.749633, 37.537434],
      zoom: 14,
      controls: []
    }, {
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if (oldWidth <= 1200) {
      myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }

    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__active{% endif %}">\
        <div class="map__icon"></div>\
          <div class="map__point_block">\
            <div class="map__point_temp"><br>г. Москва,ул. Старокалужское шоссе, д. 62</div>\
          </div>\
        </div>',
        "latitude": 55.749633,
        "longitude": 37.537434,
      },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function (item, index) {
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude], { hintContent: false }, {
        iconLayout: squareLayout,
        iconShape: {
          type: 'Rectangle',
          coordinates: [
            [-55, -50], [30, 50]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function (item, index) {
        item.properties.set('active', false);
        if (e.get('target') == item && !that) {
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });

      var mapmoscow = document.getElementById('mapmoscow');
      if (mapmoscow.classList.contains("map__active")) {
        myMap.setCenter([55.749633, 37.537434], 17);
      } else {
        myMap.setCenter([55.749633, 37.537434], 9);
      };
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map

// start indago picture

const indagoPicturesWrapper = document.querySelector('.indago_sub_pictures');
const indagoPictureslist = document.querySelectorAll(".indago_sub_picture");

if (indagoPicturesWrapper) {
  indagoPictureslist.forEach((indagoPicture) => {
    indagoPicture.addEventListener('mouseover', function () {
      indagoPictureslist.forEach((picture) => {
        if (picture.classList.contains('active')) {
          picture.classList.remove('active');
        }
      })
      indagoPicture.classList.add('active');
    });
  });
}

// end indago picture

// start indago efficiency mobile

const indagoEfficiencyIcon = document.querySelector('.indago_efficiency__svg_mobule');
const indagoEfficiencyWrapper = document.querySelector('.indago_efficiency__right');
const indagoEfficiencyDescr = document.querySelector('.indago_efficiency__descr');
const indagoEfficiencyText = document.querySelector('.indago_efficiency__text');

if (indagoEfficiencyDescr) {
  if (indagoEfficiencyDescr.scrollHeight > indagoEfficiencyText.scrollHeight) {
    indagoEfficiencyText.style.maxHeight = indagoEfficiencyDescr.scrollHeight + "px";
    indagoEfficiencyText.style.height = indagoEfficiencyDescr.scrollHeight + "px";
    console.log(indagoEfficiencyDescr.scrollHeight, indagoEfficiencyText.scrollHeight)
  } else {
    indagoEfficiencyText.style.maxHeight = indagoEfficiencyText.scrollHeight + "px";
    indagoEfficiencyText.style.height = indagoEfficiencyText.scrollHeight + "px";
    console.log(indagoEfficiencyDescr.scrollHeight, indagoEfficiencyText.scrollHeight)
  }
}

if (indagoEfficiencyDescr) {
  indagoEfficiencyDescr.style.maxHeight = null;
  indagoEfficiencyDescr.style.height = null;
}

if (indagoEfficiencyIcon) {
  indagoEfficiencyIcon.addEventListener('click', e => {
    indagoEfficiencyWrapper.classList.toggle("active")
    if (indagoEfficiencyText.style.maxHeight) {
      indagoEfficiencyDescr.style.maxHeight = indagoEfficiencyText.style.maxHeight;
      indagoEfficiencyDescr.style.height = indagoEfficiencyText.style.height;
      indagoEfficiencyText.style.maxHeight = null;
      indagoEfficiencyText.style.height = null;
    } else {
      indagoEfficiencyText.style.maxHeight = indagoEfficiencyDescr.style.maxHeight;
      indagoEfficiencyText.style.height = indagoEfficiencyDescr.style.height;
      indagoEfficiencyDescr.style.maxHeight = null;
      indagoEfficiencyDescr.style.height = null;
    }
  })
}

// end indago efficiency mobile


// start orders swiper
const ordersSwiperSwip = document.querySelector('.orders_item__swiper');
if (ordersSwiperSwip) {
  var ordersSwiper = new Swiper(".orders_item__swiper", {
    spaceBetween: 8,
    slidesPerView: 4.2,
    scrollbar: {
      el: ".orders_item__scrollbar",
      hide: true,
    },
    breakpoints: {
      1439: {
        spaceBetween: 10,
        slidesPerView: 5.4,
      },
      1023: {
        spaceBetween: 8,
        slidesPerView: 4.4,
      },
    },
  });
}
// end orders swiper

// start cart min

const cardBtn = document.querySelector('.header__link_cart');
const cardMinWrapper = document.querySelector('.cart_min');

if (cardBtn) {
  cardBtn.addEventListener('click', function () {
    cardMinWrapper.classList.toggle('active');
  });
}

// end cart min

// start cart min

const addCart = document.querySelector('.add_cart');
const addCartClose = document.querySelector('.add_cart_close');
const buyPokup = document.querySelector('.buy-pokup');
const buyPokupList = document.querySelectorAll('.buy-pokup');

if (buyPokupList.length > 0) {
  buyPokupList.forEach((buyPokupItem) => {
    buyPokupItem.addEventListener('click', function () {
      if (addCart) {
        addCart.classList.add('active');
      }
    });
  })
}

if (addCartClose) {
  addCartClose.addEventListener('click', function () {
    addCart.classList.remove('active');
  });
}

// end cart min

// start ingredients_scroll__list
const ingredients_scrolllist = document.querySelector('.ingredients_scroll__list');
if (ingredients_scrolllist) {
  const ingredients_scrolllists = document.querySelectorAll('.ingredients_scroll__list');
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".ingredients_scroll__item").length <= 1) {
      [...document.querySelectorAll('.ingredients_scroll__block')].map((n, i) => {
        let l = ingredients_scrolllists[i].innerHTML;
        n.querySelector('.ingredients_scroll__list').innerHTML = l + l + l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".ingredients_scroll__item").length <= 2) {
      [...document.querySelectorAll('.ingredients_scroll__block')].map((n, i) => {
        let l = ingredients_scrolllists[i].innerHTML;
        n.querySelector('.ingredients_scroll__list').innerHTML = l + l + l + l
      })
    } else if (document.querySelectorAll(".ingredients_scroll__item").length <= 3) {
      [...document.querySelectorAll('.ingredients_scroll__block')].map((n, i) => {
        let l = ingredients_scrolllists[i].innerHTML;
        n.querySelector('.ingredients_scroll__list').innerHTML = l + l + l + l
      })
    } else if (document.querySelectorAll(".ingredients_scroll__item").length <= 17) {
      [...document.querySelectorAll('.ingredients_scroll__block')].map((n, i) => {
        let l = ingredients_scrolllists[i].innerHTML;
        n.querySelector('.ingredients_scroll__list').innerHTML = l + l
      })
    }
  });
}
// end ingredients_scroll__list