/* ================= NAV MENU ==================== */

const navbarBtn = document.querySelector(".navbar_btn");
const navbarLinks = document.querySelector(".navbar_links");

navbarBtn.addEventListener("click", function() {
  let value = navbarLinks.classList.contains("navbar_collapse");

  if (value) {
    navbarLinks.classList.remove("navbar_collapse");
    navbarBtn.classList.remove("change");
  } else {
    navbarLinks.classList.add("navbar_collapse");
    navbarBtn.classList.add("change");
  }
});

/* ================= MODAL ==================== */

// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

/* ================= MAP ==================== */

function initMap() {
  // Map options
  var options = {
    zoom: 12,
    center: { lat: 47.49801, lng: 19.03991 }
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  /*Listen for click on map
  google.maps.event.addListener(map, 'click', function (event) {
    // Add marker
    addMarker({ coords: event.latLng });
  });*/

  var markers = [
    {
      coords: { lat: 47.5357385, lng: 19.0683148 },
      content: "<h1>Forró Jóga Stúdió</h1>"
    },
    {
      coords: { lat: 47.5126624, lng: 19.0503425 },
      content: "<h1>108 Életmódközpont</h1>"
    },
    {
      coords: { lat: 42.7762, lng: -71.0773 }
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
      //icon:props.iconImage
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}

/* ================= TESTIMOTIONALS SLIDER ==================== */



new Glider(document.querySelector(".glider"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next"
  },
  responsive: [
    {
      // screens greater than >= 500px
      breakpoint: 600,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});
