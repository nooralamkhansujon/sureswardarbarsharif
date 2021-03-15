  // scroll button
  $(document).ready(function(){

  });
  mybutton = document.querySelector(".scrollbtn");
  window.onscroll = scrollFunction;
  mybutton.addEventListener('click',topFunction);



function scrollFunction() {
  let scroll = this.scrollY;
  if (scroll > 100 || scroll > 100) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// end of scroll btn js 


// for showing sidebar button 
let sidebar           = document.querySelector('.grid-column-1');
let showSidebarButton  = document.querySelector('.top-nav .wrapper .sidebarbutton');
let closeSidebarButton = document.querySelector('.closebutton');


// start of show sidebar  
showSidebarButton.addEventListener('click',function(){
  sidebar.classList.add('showSideBar');
  console.log('showing button')
});
// end of show sidebar  

// close sidebar  functionality 
closeSidebarButton.addEventListener('click',function(){
     sidebar.classList.remove('showSideBar');
});
// end of close sidebar functionality 


// attach header in top
let header = document.querySelector('header');
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
    if(scroll > 400  || scroll > 400){
      header.classList.add('add_in_header_tag');
    }
    else{
      header.classList.remove('add_in_header_tag');
    }
  // console.log(scroll)
});
// end of attach header in top code 


// image gallary page 
let gallaryImageTitle = document.querySelector('.gallary-image-title');
let imageModalHeader  = document.querySelector('.image-modal-header');
let searchButtons     = document.querySelectorAll('.image-gallary .single-image span')
let cancelButton      = document.querySelector('.cancel-button span');
let imageModal        = document.querySelector('.image-modal');
let imageModalImgTag  = document.querySelector('.image-modal-body img')
console.log(cancelButton);


// console.log(singleImage);
searchButtons.forEach(searchButton=>{
  searchButton.addEventListener('click',function(event){
        let image            = this.dataset.image;
        imageModalImgTag.src = `../img/gallary/${image}`;

        //now show modal 
        // if modal has hidemodal class then remove it first 
        if(imageModal.classList.contains('hidemodal')){
          imageModal.classList.remove('hidemodal');
        }
        imageModal.classList.add('showmodal');
        // end of show modal

        // add global header in modal header 
        let gallaryImageText       = gallaryImageTitle.textContent;
        imageModalHeader.innerText = gallaryImageText;
  });

});


// remove modal when cancel button is clicked 
cancelButton.addEventListener('click',function(event){
  imageModal.classList.add('hidemodal');
})
// end of remove modal when cancel button is clicked 




