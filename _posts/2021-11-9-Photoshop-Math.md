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

To begin with, let us first try to understand what is a *blend mode*. The idea quite simply put is to *blend* two different images to produce a third image. Now there are different rules for blending and each of them results in a different output image. The easiest way to think of this is as a function.

$$o = f(x,y)$$

where $$x$$ and $$y$$ are the input images, $$o$$ is the output image, and the function is the process of blending.

As we devise different functions we will create different blend modes. Sounds simple right? 

Let us go through some blend modes and understand how they work:

### Some simple blend modes

**Normal**

The first one is always the most simple one. When two images are placed over each other this mode will choose to show only the top image. Mathematically we can express this like:

$f(x,y) = y$

### References

-