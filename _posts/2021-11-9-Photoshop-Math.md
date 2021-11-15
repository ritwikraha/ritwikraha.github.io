---

layout: post
title:  "The math of Photoshop Blend Modes"
author: "Ritwik Raha"
prev_title: false
prev_link: false
next_title: false
next_link: false
tags: math
permalink: /math-of-photoshop-blend-modes

---

Photoshop is a wonderful tool for working with images. It is a delight to work with as a designer and it is an instrument to marvel at as a Computer Vision engineer.

But the most used feature of Photoshop (atleast for me) is the blend-modes. From time immemorial I have wondered how these work and how do they create beautiful combination of images.

![blend-modes]({{site.url}}/assets/post_images/4post/blend-modes.png)

In this blog we will learn the following:

- How do photoshop blend modes work?
- The math behind *some* blend modes
- Recreating blend modes using *python*

### Under the hood of blend modes

To begin with, let us first try to understand what is a *blend mode*. The idea is to *blend* two different images to produce a third image. Now there are different rules for blending and each of them results in a different output image. The easiest way to think of this is as a function.

$$o = f(x,y)$$

where $$x$$ and $$y$$ are the input images, $$o$$ is the output image, and the function is the process of blending.
```Note: x and y represent color(RGB) values of the image```

As we devise different functions we will create different blend modes. Sounds simple right? 

Let us go through some blend modes and understand how they work:

### Some simple blend modes

**Normal**

The first one is always the most simple one. When two images are placed over each other this mode will choose to show only the top image. Mathematically we can express this like:

$$f(x,y) = y$$

This is also called [alpha-composting](https://en.wikipedia.org/wiki/Alpha_compositing). This is relatively easy to code.

```python 
def(img_x,img_y):
	return img_y
```

**Multiply**

Next we have the second most used blending mode. Before we go into the theory, imagine this:

You have the scanned signature of your parent and you want to place it on your leave application. You open up your image editing software and place the two images as you want them. But it does not look real. Something seems off. 

This is where *multiply* comes in. This takes the value of each pixel of the first image and multiplies it with each corresponding pixel of the second image. The output image is darker across all pixels than either of the previous values. 

Mathematically we can express this as:

$$f(x,y) = xy$$

This is also quite easy to code up.

```python 
def(img_x,img_y):
	return img_x[:,:,:3]*img_y[:,:,:3]
```
### References

- [Image Blend Modes - Wikipedia](https://en.wikipedia.org/wiki/Blend_modes)
- [Adobe Blend Modes Gudielines](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdf_reference_archive/blend_modes.pdf)
- [Blending Modes Explained - Photoshop training channel](https://photoshoptrainingchannel.com/blending-modes-explained/)
- [The Math behind Blend Modes - Imagineer](https://imagineer.in/blog/math-behind-blend-modes/)