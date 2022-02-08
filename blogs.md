---
layout: blog
title: Posts
permalink: /posts
---
The following are the links to some of my blogs and reports.

{% for post in site.posts %}
<div class="blog-roll-posts">
  <article>
      {%- if post.image -%}
          <img src="{{- post.image | relative_url -}}" alt="" class="blog-roll-image" style="padding-right: 20px;">
        {%- else -%}
          {%- assign postImage = "/assets/images/site-images/icartoon-me.jpg" -%}
          <img src="{{- postImage | relative_url -}}" alt="" class="blog-roll-image" style="padding-right: 20px;">
        {%- endif -%}
    <h3>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
  </article>
  </div>
{% endfor %}


The complete index of all my blogs/tutorials on various topics is included here. Please note that the blogs published on other websites such as [PyImageSearch]() or [Keras]() belongs to the respective websites and should be cited properly when needed.
### Index

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Topics</th>
    <th class="tg-0lax">Links</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig" rowspan="3">Causal Analysis</td>
    <td class="tg-0lax">[What do we mean when we talk about Causal Inference](/causal-blog-1)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Studying Causality: The good, the bad, and the ugly](/causal-blog-2)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[A Brief Introduction to Do-Calculus](/causal-blog-3)</td>
  </tr>
  <tr>
    <td class="tg-1wig" rowspan="11">Computer Vision</td>
    <td class="tg-0lax">[Neural Style Transfer with AdaIN- Keras Example](https://keras.io/examples/generative/adain/)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Breaking down Neural Radiance Fields - Part 1](https://www.pyimagesearch.com/2021/11/10/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-1/)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Breaking down Neural Radiance Fields - Part 2](https://www.pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Breaking down Neural Radiance Fields - Part 3](https://www.pyimagesearch.com/2021/11/24/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-3/)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[3D volumetric rendering with NeRF- Keras Example](https://keras.io/examples/vision/nerf/)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Image Segmentation using Whale Optimization Algorithm](https://nbviewer.jupyter.org/gist/ritwikraha/e02e9b04b19bc582776464062c449a2a)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Image Compression using SVD](https://nbviewer.jupyter.org/gist/ritwikraha/b10fe117a4f0c816fec69f99f1061f87)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Face Swapping using OpenCV](https://nbviewer.jupyter.org/gist/ritwikraha/ee9730284a33935317d78d9205304f0f)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Creating a Potrait mode with Open CV](https://medium.com/@ritwikraha.nsec/creating-a-portrait-mode-with-opencv-60379bb295f0)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[A brief history of Edge Detection](https://medium.com/@ritwikraha.nsec/a-brief-history-of-edge-detection-b2008f2ff3c4)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Denoising images the Matlab Way](https://medium.com/@ritwikraha.nsec/denoising-images-the-matlab-way-5b2de6ae5efe)</td>
  </tr>
  <tr>
    <td class="tg-1wig" rowspan="2">Math Stuff..</td>
    <td class="tg-0lax">[The Math of Photoshop Blend Modes](math-of-photoshop-blend-modes)</td>
  </tr>
  <tr>
    <td class="tg-0lax">[Why model decay using the exponential function?](/why-exponential-decay)</td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:bold">Hitchiker's Guide to ...</span></td>
    <td class="tg-0lax">[A Hello World to Deep Learning in Matlab](https://medium.com/@ritwikraha.nsec/a-hello-world-to-deep-learning-in-matlab-20f0f87acfa9)</td>
  </tr>
</tbody>
</table>

* ### Causal Blogging
  * [What do we mean when we talk about Causal Inference](/causal-blog-1)
  * [Studying Causality: The good, the bad, and the ugly](/causal-blog-2)
  * [A Brief Introduction to Do-Calculus](/causal-blog-3)

* ### Computer Vision
  * [Neural Style Transfer with AdaIN- Keras Example](https://keras.io/examples/generative/adain/)
  * [Breaking down Neural Radiance Fields - Part 1](https://www.pyimagesearch.com/2021/11/10/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-1/)
  * [Breaking down Neural Radiance Fields - Part 2](https://www.pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/)
  * [Breaking down Neural Radiance Fields - Part 3](https://www.pyimagesearch.com/2021/11/24/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-3/)
  * [3D volumetric rendering with NeRF- Keras Example](https://keras.io/examples/vision/nerf/)
    * Won the [TensorFlow Community Spotlight Award 2021](https://twitter.com/TensorFlow/status/1466150113814929413)
  * [Image Segmentation using Whale Optimization Algorithm](https://nbviewer.jupyter.org/gist/ritwikraha/e02e9b04b19bc582776464062c449a2a)
  * [Image Compression using SVD](https://nbviewer.jupyter.org/gist/ritwikraha/b10fe117a4f0c816fec69f99f1061f87)
  * [Face Swapping using OpenCV](https://nbviewer.jupyter.org/gist/ritwikraha/ee9730284a33935317d78d9205304f0f)
  * [Creating a Potrait mode with Open CV](https://medium.com/@ritwikraha.nsec/creating-a-portrait-mode-with-opencv-60379bb295f0)
  * [A brief history of Edge Detection](https://medium.com/@ritwikraha.nsec/a-brief-history-of-edge-detection-b2008f2ff3c4)
  * [Denoising images the Matlab Way](https://medium.com/@ritwikraha.nsec/denoising-images-the-matlab-way-5b2de6ae5efe)

* ### Math Stuff
  * [The Math of Photoshop Blend Modes](math-of-photoshop-blend-modes)
  * [Why model decay using the exponential function?](/why-exponential-decay)

* ### Hitchhiker's Guide to ...
  * [A Hello World to Deep Learning in Matlab](https://medium.com/@ritwikraha.nsec/a-hello-world-to-deep-learning-in-matlab-20f0f87acfa9)
