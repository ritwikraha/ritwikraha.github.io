---

layout: post
title:  "What is Computational Photography"
author: "Ritwik Raha"
prev_title: false
prev_link: false
next_title: false
next_link: false
tags: math, image-processing
comments: true
permalink: /what-is-computational-photography
image: /assets/site_images/computational-1.png

---

> Computational photography refers to digital image capture and processing techniques that use digital computation instead of optical processes. - [Wikipedia](https://en.wikipedia.org/wiki/Computational_photography)

<figure>
  <img src="{{site.url}}/assets/post_images/6post/apple.jpeg" alt="image fusion"/>
  <figcaption style='text-align: center'>Source: <a href="https://www.eoshd.com/comments/topic/38399-lets-discuss-computational-photography/">Apple Computational Photography</a></figcaption>
</figure>




That is a neat definition, but what does it mean?

**"If we take a picture on instagram and apply a filter on it, is that computational photography?"**

**"What if we digitally enhance our photographs after we take them?"**

**"What about instagram filters?"**

### TL;DR

In its simplest form *computational photography* means anything that leverages the power of computer vision and image processing to artificially enhance photographs. This could be anything from a snapchat filter to an extremely sophisticated piece of code stitching together the first ever image of a black hole.

But before we fully understand what computational photography means let us go through a brief lesson on photography.

### A primer on Photography

In simple terms we have a device which creates images by recording light reflected from real world objects on a sensor.

This means a camera essentially records light. Every little detail in a camera is to optimize that goal perfectly.

So if we *zoom* out a little and see the big picture, there are three main components to photography.

1. How much light is entering the device? (The aperture)
2. How long we are allowing the light to enter? (The shutter speed)
3. How sensitive is the sensor to the light? (ISO)

If you are already familiar with these terms, and have some experience in creating images with various combinations of these parameters feel free to skip to the next section.

And now, if you are still here, let us get started with the basic components of a camera.

#### Aperture

First we talk about Aperture. Now before we go all technical I want you to imagine something for me.

For a second, imagine that you are leaving a movie theatre. As you walk out, you are suddenly blinded by a flash of white light. You squeeze your eyes shut. It takes a couple of seconds for your eyes to readjust themselves to the brightness, and you slowly open them up again.

Sounds familiar?

This is exactly what **aperture** means.

It is the measure of how much the lens is opened. It is usually measured in f-stops and expressed in numbers such as 1.4,1.8,2,2.8,5.6,8,11,16.

Something to remember here is that the lower the number is the bigger the opening of the lens. The higher the f-stop is the smaller the opening of the lens.

> But what effect does this have on the image?

Well if you have a bigger opening you have more light or more information coming through. So a smaller aperture or larger f-stop would lead to darker pictures and vice-versa.

<figure>
  <img src="{{site.url}}/assets/post_images/6post/f-exposure.jpeg" alt="exposure"/>
  <figcaption style='text-align: center'>Source: <a href="https://samualross.wordpress.com/2014/11/24/a-beginners-guide-to-photography/">A Beginners Guide to Photography</a></figcaption>
</figure>


> That's great, what else can we do using aperture?

- The Aperture also controls Depth-Of-Field.

> What is Depth-Of-Field?

Depth-of-Field is simply the distance between the nearest and the farthest object in the camera's viewing field which are in acceptable focus.

By acceptable focus we mean that we can make out the details of the object.

> But how is this connected to aperture?

Well, the bigger the aperture the more light is allowed into the sensor creating a shallow depth of field for the background and vice versa.

<figure>
  <img src="{{site.url}}/assets/post_images/6post/dof.png" alt="depth of field"/>
  <figcaption style='text-align: center'>Source: <a href="https://www.adorama.com/alc/what-is-f-stop-how-to-use-it-for-photography/">What Is F-Stop & How to Use It for Photography</a></figcaption>
</figure>


#### Shutter Speed

Shutter speed is exactly what the name says. It is the speed with which the camera goes *khiichiiik*. This is usually measured in a fraction of a second for example, 1/10 th of a second. We can see numbers like 1/10,1/20,1/50,1/100,...,1/640.

So before I bring in the diagrams and the math, let me ask you a simple question- 

> What happens if we take a low shutter speed like 1/10?

The camera sensor stays open for a longer period of time right? This means we are allowing more light to enter. Our image will be brighter. 

Similarly if we have a faster shutter speed, we will not give much time for the senor to be exposed to light. This means our image would be eventually darker.

<figure>
 <img src="{{site.url}}/assets/post_images/6post/shutter-speed.jpeg" alt="shutter speed"/>
  <figcaption style='text-align: center'>Source: <a href="https://www.nfi.edu/shutter-speed/">Shutter Speed: Everything You Need To Know</a></figcaption>
</figure>


> This is great? Anything else?

Absolutely! We want to capture a high speed race car (in all its glorious details) - we would need a faster shutter speed. 

Now let us imagine that we want to capture a beautiful star trail from the Himalayas. We need to capture the movement of the stars, so we would need a low shutter speed.

#### ISO

> Wait, didn't we cover everything? What is ISO?

ISO stands for International Organization for Standardization and it stands for sensitivity to light. 

Before we go into ISO for digital cameras , let us revisit the old days.

<figure>
 <img src="{{site.url}}/assets/post_images/6post/asa.jpeg" alt="ASA"/>
  <figcaption style='text-align: center'>Source: <a href="https://fineartamerica.com/featured/vintage-yashica-635-camera--asa-dial-jon-woodhams.html?product=greeting-card">Vintage Yashica 635</a></figcaption>
</figure>

In the film camera ISO or ASA as it was known in those days defined the sensitivity of the film's material to light. This is usually expressed in numbers such as 100,200,400,..1600. Now the lower the number is the less sensitive it is to light. 

Which means in a low light environment the image would not be well exposed. Similarly if the ISO is higher, then in a low light environment it would still produce well exposed images.

<figure>
 <img src="{{site.url}}/assets/post_images/6post/iso.jpeg" alt="ASA"/>
  <figcaption style='text-align: center'>Source: <a href="http://www.getoffgreenauto.com/iso-exposure-exercise/">ISO Exposure Exercise</a></figcaption>
</figure>

However for digital cameras ISO works differently. An image sensor is fundamentally different from a film one. Here the image is capture at a base ISO (100) always. When we select an ISO of 3200 a gain of 32X is applied to the already captured image.

The better the sensor the higher the tolerance of the gain.This means a good sesnor will be able to boost the image significantly without any noise, whereas a poor sensor will show noise in the image at lower values.

> Note: The ISO in a digital camera is applying computational photography. The sensor and chip applies gains to the image **after** it is captured.

Aperture, shutter-speed and ISO are three pillars of photography. Together they control the amount of light entering the device. Here is an image commonly known as the *exposure triangle* that helps us understand the relationship between these three variables.

<figure>
 <img src="{{site.url}}/assets/post_images/6post/tri-factor.png" alt="Triangle"/>
  <figcaption style='text-align: center'>Source: <a href="https://www.polarprofilters.com/blogs/polarpro/the-three-elements-of-the-exposure-triangle">The Three Elements of The Exposure Triangle</a></figcaption>
</figure>

A good photographer knows this by heart, a great photographer controls it😎.

### The Problems
> But why do we need Computational Photography?

Even the best of cameras have limitations. Some of them might be:

- Creating a small aperture is costly and time consuming. However images for constricted aperture is more aesthetic. This presents a challenge: to achieve the same quality of images using larger apertures.

- A small shutter speed for e.g 1/10 or 1/5 is realistically impossible for the human hand to keep still. Thus it is very difficult to take photographs for longer durations without a camera stand. 

- Not all camera sensors are built the same. A camera sensor that will allow a high ISO value without passing any noise in the output would be immensely costly.  Thus low light or night photography is completely trash in low end cameras.

With the dawn of the 21st Century science started challenging barriers and limitations. What was previously considered impossible is now one innovation away.

> Computational Photography aims to solve these challenges leveraging the **minimal hardware requirements** possible.

In the next blogpost we will look at some methods adopted by smartphones and industry giants like Google and Apple to cater Computational Photography at scale.

### Looking Back

In many ways photography began as an art form. The perfect instrument to capture moments. When it all began, photographs were taken and developed with care and attention in a dark room. The photographer worked hours to develop the photograph with only his memory as reference.

We moved from there to digital cameras that let us take photographs and visualise them instantly. The skill and dexterity of the photographer faded a little. He didn't need a masking tape and fine toothed brush and the right mix of chemicals to bring out details. 

And now we arrive at the present day, photographs are no longer taken but generated. Frames are stitched together and pixels are fused by massive algorithms to bring the best version of the photograph on screen. The phtographer no longer cares about elements of photography like aperture or shutter speed.

Maybe this is the purpose of technology - to advance science and ease our lives in the process. But great photographs have been taken even in the harshest of limitations.

And perhaps that is the meaning of art - beauty even in great adversity.

### References

- [Computational Photography - Wikipedia](https://en.wikipedia.org/wiki/Computational_photography)
- [What is Computational Photography](https://www.dpreview.com/articles/9828658229/computational-photography-part-i-what-is-computational-photography)
- [Definition of ISO](https://www.phototraces.com/definition-of-iso-in-photography/)
- [History of ISO](https://expertphotography.com/understand-iso-4-simple-steps/)

- [Mathemetical Expression of Noise](https://www.imatest.com/docs/noise/)
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    var disqus_config = function () {
    this.page.url = 'https://ritwikraha.github.io{{ page.url }}';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'https://'+'{{ page.id }}'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
  
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://ritwikraha-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
