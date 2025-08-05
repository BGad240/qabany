/**
 * header transition
 */





//sidebar for navlinks
const sideBarOpenBtn = document.getElementById("opensidebar")
const sideBarCloseBtn = document.getElementById("closeSidebar")
const sidebar = document.getElementById("sidebar")
//searchbar
const openSearchBar = document.querySelectorAll(".openserchbar")


const searchBar = document.getElementById("search-bar")
const closeSrchBtn = document.getElementById("close-search")
//common usage
const overlay = document.getElementById("overlay")

const translations = ["translate-x-full", "-translate-y-full"]


//common functions

function openAnyBar(mainBar, lay, trans) {
    mainBar.classList.remove(trans)
    lay.classList.remove("hidden")
}


function closeAnyBar(mainBar, lay, trans) {
    mainBar.classList.add(trans)
    lay.classList.add("hidden")
}



/**
 * sidebar
 */



sideBarCloseBtn.addEventListener('click', () => {
    closeAnyBar(sidebar, overlay, translations[0])
})


overlay.addEventListener('click', () => {
    closeAnyBar(sidebar, overlay, translations[0])
})

sideBarOpenBtn.addEventListener("click", () =>
    openAnyBar(sidebar, overlay, translations[0])
)



const toggleButtons = document.querySelectorAll('.sb-toggle-btn');

toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement.parentElement;

        const submenu = parent.querySelector(':scope > .submenu');

        if (submenu) {
            const isOpen = submenu.classList.contains('max-h-[500px]');
            if (isOpen) {
                submenu.classList.remove('max-h-[500px]');
                submenu.classList.add('max-h-0');
                btn.querySelector('.submenu-icon').classList.remove('fi-rr-minus');
                btn.querySelector('.submenu-icon').classList.add('fi-rr-plus');
            } else {
                submenu.classList.remove('max-h-0');
                submenu.classList.add('max-h-[500px]');
                btn.querySelector('.submenu-icon').classList.remove('fi-rr-plus');
                btn.querySelector('.submenu-icon').classList.add('fi-rr-minus');
            }
        }
    });
});



/**
 * search bar
 */


//open searchbar

openSearchBar.forEach(search => {
    search.addEventListener('click', () => {
        openAnyBar(searchBar, overlay, translations[1])
    })
})


//close searchbar 

closeSrchBtn.addEventListener("click", () => {
    closeAnyBar(searchBar, overlay, translations[1])
})



overlay.addEventListener("click", () => {
    closeAnyBar(searchBar, overlay, translations[1])
})



/**
 * footer submenu
 */


const sbmenu = document.querySelectorAll(".footer-submenu")
const sbmenubtn = document.querySelectorAll(".ftr-sm-btn")
const ftrIcon = document.querySelectorAll(".ftr-sm-icon")

sbmenubtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const currentSubmenu = sbmenu[index]
        const currentftIcon = ftrIcon[index]

        const isOpen = currentSubmenu.classList.contains("max-h-[500px]")


        sbmenu.forEach(ele => {
            ele.classList.remove("max-h-[500px]")
            ele.classList.add("max-h-0")
        })


        ftrIcon.forEach(icon => {
            icon.classList.remove("fi-rr-angle-small-up")
            icon.classList.add("fi-rr-angle-small-down")
        })


        if (!isOpen) {
            currentSubmenu.classList.remove("max-h-0")
            currentSubmenu.classList.add("max-h-[500px]")

            currentftIcon.classList.remove("fi-rr-angle-small-down")
            currentftIcon.classList.add("fi-rr-angle-small-up")
        }
    })
})


//detail page thumb switching

// const dtsMainImg = document.querySelector(".dts-main-image")
// const dtsThumbs = document.querySelectorAll(".dts-thumb")



// dtsThumbs.forEach((thumb) => {
//     thumb.addEventListener('click', () => {
//         dtsThumbs.forEach(img => img.classList.remove("border-2 border-red-600"))

//         thumb.classList.add("border-2 border-red-600")

//         dtsMainImg.src = thumb.src
//     })
// })



const dtsMainImg = document.querySelector(".dts-main-image");
const dtsThumbs = document.querySelectorAll(".dts-thumb");

dtsThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {


        dtsThumbs.forEach(img => {
            img.classList.remove("border-red-600");
            img.classList.add("border-transparent");
        });

        thumb.classList.remove("border-transparent");
        thumb.classList.add("border-red-600");


        dtsMainImg.src = thumb.src;
    });
});





/**
 * quick look 
 */


const quicklookOverlay = document.querySelectorAll(".quicklook-overlay")
const quicklookBtn = document.querySelectorAll(".quicklook-btn")
const quicklookCloseBtn = document.querySelectorAll(".close-quicklook-btn")

quicklookBtn.forEach((btn, index) => {
    const currentOverlay = quicklookOverlay[index]
    const currentClose = quicklookCloseBtn[index]
    currentOverlay.classList.add("-translate-y-full")//بيقول ان المشكلة من هنا
    btn.addEventListener("click", () => {
        currentOverlay.classList.remove("-translate-y-full")
    })

    currentClose.addEventListener("click", () => {
        currentOverlay.classList.add("-translate-y-full")
    })

})





// cart



const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartWrapper = document.getElementById('cart-wrapper');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');

const openCart = () => {
    cartWrapper.classList.remove('hidden');
    setTimeout(() => {
        cartPanel.classList.remove('-translate-x-full');
    }, 10);
};


const closeCart = () => {
    cartPanel.classList.add('-translate-x-full');
    setTimeout(() => {
        cartWrapper.classList.add('hidden');
    }, 300);
};

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);






/**
 * user
 */


const logStateBtn = document.querySelector(".log-state-btn")
const logStateCtr = document.querySelector(".log-state-cntr")
const logOverlay = document.querySelector(".log-overlay")

logStateBtn.addEventListener("click", () => {
    const isOpen = logStateCtr.classList.contains("hidden")

    if (isOpen) {
        logStateCtr.classList.remove("hidden")
        logStateCtr.classList.add("opacity-0")
        setTimeout(() => {
            logStateCtr.classList.remove("translate-y-[100px]")
            logStateCtr.classList.add("translate-y-[10px]")
            logStateCtr.classList.remove("opacity-0")
        }, 10)
    } else {

        logStateCtr.classList.remove("translate-y-[10px]");
        logStateCtr.classList.add("translate-y-[100px]");
        logStateCtr.classList.add("opacity-0");

        setTimeout(() => {
            logStateCtr.classList.add("hidden");
        }, 300);
    }
})











// modal






const detailsBtns = document.querySelectorAll('.details-preview-btn');


const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-product-image');
const modalTitle = document.getElementById('modal-product-title');
const modalPrice = document.getElementById('modal-product-price');
const modalOldPrice = document.getElementById('modal-product-old-price');
const modalDescription = document.getElementById('modal-product-description');


const closeModalBtn = document.getElementById('close-modal');


detailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        const img = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title');
        const price = btn.getAttribute('data-price');
        const oldPrice = btn.getAttribute('data-oldprice');
        const description = btn.getAttribute('data-description');


        modalImg.src = img;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalOldPrice.textContent = oldPrice;
        modalDescription.textContent = description;


        modal.classList.remove('hidden');
    });
});


closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});




/**
 * sorting sidebar
 */


const sortSideBarBtn = document.getElementById("open-sort-page")
const filterOverlay = document.getElementById("filter-overlay")
const sortModal = document.getElementById("sort-modal")
const closeSorting = document.getElementById("close-filter-btn")


sortSideBarBtn.addEventListener("click", () => {
    const isOpen = sortModal.classList.contains("-translate-x-full")
    sortModal.classList.add("-translate-x-full")
    filterOverlay.classList.add("hidden")

    if (isOpen) {
        sortModal.classList.remove("-translate-x-full")
        filterOverlay.classList.remove("hidden")
    }

})



closeSorting.addEventListener('click', () => {
    closeAnyBar(sortModal, filterOverlay, "-translate-x-full")
})



filterOverlay.addEventListener('click', () => {
    closeAnyBar(sortModal, filterOverlay, "-translate-x-full")
})












/**
 * <div id="cart-wrapper" class="hidden">

  <!-- 🖤 خلفية شفافة -->
  <div id="cart-overlay" class="fixed inset-0 bg-black/50 z-40"></div>

  <!-- 🤍 البانل الجانبي -->
  <div id="cart-panel" 
       class="fixed top-0 left-0 h-full w-[90%] sm:w-4/5 md:max-w-md bg-white shadow-xl z-50
              p-4 sm:p-6 flex flex-col 
              transform -translate-x-full transition-transform duration-300 ease-in-out gap-4">

    <!-- 🔝 الهيدر -->
    <div class="flex justify-between items-center border-b pb-3">
      <h2 class="text-lg sm:text-xl font-bold">السلة</h2>
      <button id="close-cart-btn" class="text-gray-600 hover:text-black">
        <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- ✅ لو فيها منتجات -->
    
  </div>
</div>

 */

