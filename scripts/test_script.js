// Array to store all testimonials
var testimonials = [
    {
      name: "John Doe",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque ligula ac felis efficitur sodales. In in diam ultrices, ullamcorper quam quis, accumsan mauris."
    },
    {
      name: "Jane Smith",
      testimonial: "Praesent gravida, arcu eu consectetur eleifend, nisi nulla bibendum nulla, nec laoreet arcu orci at sem. Aliquam erat volutpat."
    },
    {
      name: "Bob Johnson",
      testimonial: "Nullam vitae augue at elit faucibus pretium. Nullam condimentum dapibus eros, vel finibus risus scelerisque quis. Praesent vel augue at turpis sodales interdum."
    }
  ];
  
  // Function to display testimonials
  function displayTestimonials() {
    // Get the testimonials div element
    var testimonialsDiv = $("#testimonials");
  
    // Clear any existing testimonials
    testimonialsDiv.empty();
  
    // Loop through each testimonial and create a new div element
    for (var i = 0; i < testimonials.length; i++) {
      var testimonial = testimonials[i];
      var div = $("<div class='testimonial'><p>" + testimonial.testimonial + "</p><cite>" + testimonial.name + "</cite></div>");
  
      // Add the new div element to the testimonials div
      testimonialsDiv.append(div);
    }
  
    // Fade in the testimonials div
    testimonialsDiv.fadeIn();
  }
  
  // Function to add a testimonial
  function addTestimonial(name, testimonial) {
    // Create a new testimonial object
    var newTestimonial = {
      name: name,
      testimonial: testimonial
    };
  
    // Add the new testimonial to the array
    testimonials.push(newTestimonial);
  
    // Fade out the testimonials div
    $("#testimonials").fadeOut(function() {
      // Display the updated testimonials
      displayTestimonials();
    });
  }
  
  $(document).ready(function() {
    // Display the initial testimonials
    displayTestimonials();
  
    // Handle form submission
    $("#testimonial-form").submit(function(event) {
      event.preventDefault();
      var name = $("#name").val();
      var testimonial = $("#testimonial").val();
      addTestimonial(name, testimonial);
      $("#name").val("");
      $("#testimonial").val("");
    });
  
    // Set the interval for fading testimonials
    setInterval(function() {
      var testimonialsDiv = $("#testimonials");
      testimonialsDiv.fadeOut(function() {
        // Move the first testimonial to the end of the array
        var firstTestimonial = testimonials.shift();
        testimonials.push(firstTestimonial);
  
        // Display the updated testimonials
        displayTestimonials();
      });
    }, 10000);
  });
  