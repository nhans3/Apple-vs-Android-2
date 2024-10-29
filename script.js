// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style;  // We use .style to access CSS rule for "some-id" element

// document.getElementById("some-id").style.border = "2px solid black";  // Makes declraration inside id.

// document.getElementById("some-image").src = "images/newpic.jpg"   // Changes an image.

// document.getElementById("some-a-tag").href = "http://newlink.com";  // Changes hyperlink

// Changing an Image vs Adding a New Image
// To add an image where there wasn't one before, you need a container for the image.
// Containers are empty <p>, <h1>, <div> elements.
// For E.g. in html" <div id="image-container"> </div>

// document.getElementById("image-container").inenrHTML = "<img src='images/pic.jpg >";   // Use ' when already using ".  // Adds an image.

// ------------------------------------------------------------------------------------------------------

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  // Change the 'Android vs Apple' image to the Android Logo in the images folder.
  document.getElementById("logo").src = "images/Android-Logo.jpg";

  //   Change the 'Explore the Debate' link so that the link says 'Android Home'
  document.getElementById("the-link").innerHTML = "Android Home";

  //  Change the 'Explore the Debate' link so that the background color is #a4c93b
  document.getElementById("the-link").style.background = "#a4c93b";

  // Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/&#39;
  document.getElementById("the-link").href = "https://www.android.com/&#39";

  // Change the background color of the html to #a4c93b
  document.getElementById("the-html").style.background = "#a4c93b";

  // Change the base font-family to 'Roboto', sans-serif // Any rule with dash (-) must be camel cased.
  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";

  //   Add the class 'active' to the Android button.
  document.getElementById("android").classList.add("redborder");

  // Remove the class 'active' from the Apple button.
  document.getElementById("apple").classList.remove("redborder");
  // E.g. document.getElementById('bruh').classList.add('thing')
  // This will add the class 'thing' to the element with id 'bruh'. CSS should have a .thing rule with the style set to what you want when this class is added.
  // E.g. document.getElementById('bruh').classList.remove('thing')
  // This removes 'thing' class from the 'bruh' element.
}

// APPLE SCRIPT

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("the-link").innerHTML = "Apple Home";
  document.getElementById("the-link").style.background = "#b6bcca";
  document.getElementById("the-link").href = "https://www.apple.com/&#39";
  document.getElementById("the-html").style.background = "#b6bcca";
  document.getElementById("the-body").style.fontFamily =
    " 'Brygada 1918', serif";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}
