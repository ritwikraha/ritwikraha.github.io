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


The complete index of all my blogs/tutorials on various topics is listed here. Please note that the blogs published on other websites such as [PyImageSearch](https://www.pyimagesearch.com/) or [Keras](https://keras.io/examples/) belong to the respective websites and should be cited properly when needed.

### Index

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
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
    <td class="tg-0lax" rowspan="3">Causal Analysis</td>
    <td class="tg-0lax"><a href="https://ritwikraha.github.io/causal-blog-1" target="_blank" rel="noopener noreferrer">What do we mean when we talk about Causal Inference</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://ritwikraha.github.io/causal-blog-2" target="_blank" rel="noopener noreferrer">Studying Causality: The good, the bad, and the ugly</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://ritwikraha.github.io/causal-blog-3" target="_blank" rel="noopener noreferrer">A Brief Introduction to Do-Calculus</a></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="11">Computer Vision</td>
    <td class="tg-0lax"><a href="https://keras.io/examples/generative/adain/" target="_blank" rel="noopener noreferrer">Neural Style Transfer with AdaIN- Keras Example</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://www.pyimagesearch.com/2021/11/10/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-1/" target="_blank" rel="noopener noreferrer">Breaking down Neural Radiance Fields - Part 1</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://www.pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/" target="_blank" rel="noopener noreferrer">Breaking down Neural Radiance Fields - Part 2</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://www.pyimagesearch.com/2021/11/24/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-3/" target="_blank" rel="noopener noreferrer">Breaking down Neural Radiance Fields - Part 3</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://keras.io/examples/vision/nerf/" target="_blank" rel="noopener noreferrer">3D volumetric rendering with NeRF- Keras Example</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://nbviewer.jupyter.org/gist/ritwikraha/e02e9b04b19bc582776464062c449a2a" target="_blank" rel="noopener noreferrer">Image Segmentation using Whale Optimization Algorithm</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://nbviewer.jupyter.org/gist/ritwikraha/b10fe117a4f0c816fec69f99f1061f87" target="_blank" rel="noopener noreferrer">Image Compression using SVD</a><br></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://nbviewer.jupyter.org/gist/ritwikraha/ee9730284a33935317d78d9205304f0f" target="_blank" rel="noopener noreferrer">Face Swapping using OpenCV</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://medium.com/@ritwikraha.nsec/creating-a-portrait-mode-with-opencv-60379bb295f0" target="_blank" rel="noopener noreferrer">Creating a Potrait mode with Open CV</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://medium.com/@ritwikraha.nsec/a-brief-history-of-edge-detection-b2008f2ff3c4" target="_blank" rel="noopener noreferrer">A brief history of Edge Detection</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://medium.com/@ritwikraha.nsec/denoising-images-the-matlab-way-5b2de6ae5efe" target="_blank" rel="noopener noreferrer">Denoising images the Matlab Way</a></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Math Stuff..</td>
    <td class="tg-0lax"><a href="https://ritwikraha.github.io/math-of-photoshop-blend-modes" target="_blank" rel="noopener noreferrer">The Math of Photoshop Blend Modes</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><a href="https://ritwikraha.github.io/why-exponential-decay" target="_blank" rel="noopener noreferrer">Why model decay using the exponential function?</a></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:bold">Hitchiker's Guide to ...</span></td>
    <td class="tg-0lax"><a href="https://medium.com/@ritwikraha.nsec/a-hello-world-to-deep-learning-in-matlab-20f0f87acfa9" target="_blank" rel="noopener noreferrer">A Hello World to Deep Learning in Matlab</a></td>
  </tr>
</tbody>
</table>
