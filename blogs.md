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


The complete index of all my blogs/tutorials on various topics is listed here. Please note that the blogs published on other websites such as [PyImageSearch](https://www.pyimagesearch.com/) or [keras.io/examples/](https://keras.io/examples/) belong to the respective websites and should be cited properly when needed.

### Index

#### Paper Breakdowns
* [DETR Breakdown Part 1](https://pyimagesearch.com/2023/05/22/detr-breakdown-part-1-introduction-to-detection-transformers/)

* [DETR Breakdown Part 2](https://pyimagesearch.com/2023/06/12/detr-breakdown-part-2-methodologies-and-algorithms/)

* [DETR Breakdown Part 3](https://pyimagesearch.com/2023/06/26/detr-breakdown-part-3-architecture-and-details/)


#### JAX Guide
* [Learning JAX in 2023: Part 3](https://pyimagesearch.com/2023/04/17/learning-jax-in-2023-part-3-a-step-by-step-guide-to-training-your-first-machine-learning-model-with-jax/)

* [Learning JAX in 2023: Part 2](https://pyimagesearch.com/2023/02/27/learning-jax-in-2023-part-2-jaxs-power-tools-grad-jit-vmap-and-pmap/)
* [Learning JAX in 2023: Part 1](https://pyimagesearch.com/2023/02/20/learning-jax-in-2023-part-1-the-ultimate-guide-to-accelerating-numerical-computation-and-machine-learning/?utm_source=Drip&utm_medium=Email&utm_campaign=WeeklyUpdate&utm_content=20Feb2023NonUnivLink2)

#### Causal Analysis
* [What do we mean when we talk about Causal Inference](https://ritwikraha.github.io/causal-blog-1)
* [Studying Causality: The good, the bad, and the ugly](https://ritwikraha.github.io/causal-blog-2)
* [A Brief Introduction to Do-Calculus](https://ritwikraha.github.io/causal-blog-3)

#### Computer Vision

* [Focal Modulation: A replacement for Self-Attention - Keras Example](https://keras.io/examples/vision/focal_modulation_network/)
* [A Vision Transformer without Attention - Keras Example](https://keras.io/examples/vision/shiftvit/)
* [Neural Style Transfer with AdaIN- Keras Example](https://keras.io/examples/generative/adain/)
* [Breaking down Neural Radiance Fields - Part 1](https://www.pyimagesearch.com/2021/11/10/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-1/)
* [Breaking down Neural Radiance Fields - Part 2](https://www.pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/)
* [Breaking down Neural Radiance Fields - Part 3](https://www.pyimagesearch.com/2021/11/24/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-3/)
* [3D volumetric rendering with NeRF- Keras Example](https://keras.io/examples/vision/nerf/)
* [Image Segmentation using Whale Optimization Algorithm](https://nbviewer.jupyter.org/gist/ritwikraha/e02e9b04b19bc582776464062c449a2a)
* [Image Compression using SVD](https://nbviewer.jupyter.org/gist/ritwikraha/b10fe117a4f0c816fec69f99f1061f87)
* [Face Swapping using OpenCV](https://nbviewer.jupyter.org/gist/ritwikraha/ee9730284a33935317d78d9205304f0f)
* [Creating a Potrait mode with Open CV](https://medium.com/@ritwikraha.nsec/creating-a-portrait-mode-with-opencv-60379bb295f0)
* [A brief history of Edge Detection](https://medium.com/@ritwikraha.nsec/a-brief-history-of-edge-detection-b2008f2ff3c4)
* [Denoising images the Matlab Way](https://medium.com/@ritwikraha.nsec/denoising-images-the-matlab-way-5b2de6ae5efe)

#### NLP
* [Introduction to RNNs with TensorFlow and Keras](https://pyimagesearch.com/2022/07/25/introduction-to-recurrent-neural-networks-with-keras-and-tensorflow/)
* [Long Short-Term Memory Networks](https://pyimagesearch.com/2022/08/01/long-short-term-memory-networks/)
* [Neural Machine Translation](https://pyimagesearch.com/2022/08/15/neural-machine-translation/)
* [Neural Machine Translation with Bahdanau’s Attention Using TensorFlow and Keras](https://pyimagesearch.com/2022/08/22/neural-machine-translation-with-bahdanaus-attention-using-tensorflow-and-keras/)
* [Neural Machine Translation with Luong’s Attention Using TensorFlow and Keras](https://pyimagesearch.com/2022/08/29/neural-machine-translation-with-luongs-attention-using-tensorflow-and-keras/)
* [A Deep Dive into Transformers with TensorFlow and Keras: Part 3](https://pyimagesearch.com/2022/11/07/a-deep-dive-into-transformers-with-tensorflow-and-keras-part-3/)
* [A Deep Dive into Transformers with TensorFlow and Keras: Part 2](https://pyimagesearch.com/2022/09/26/a-deep-dive-into-transformers-with-tensorflow-and-keras-part-2/)
* [A Deep Dive into Transformers with TensorFlow and Keras: Part 1](https://pyimagesearch.com/2022/09/05/a-deep-dive-into-transformers-with-tensorflow-and-keras-part-1/)

#### Math Stuff
* [The Math of Photoshop Blend Modes](https://ritwikraha.github.io/math-of-photoshop-blend-modes)
* [Why model decay using the exponential function?](https://ritwikraha.github.io/why-exponential-decay)

#### Hitchhiker's Guide to...

* [What is Keras Core?](https://pyimagesearch.com/2023/07/24/what-is-keras-core/)
* [A Hello World to Deep Learning in Matlab](https://medium.com/@ritwikraha.nsec/a-hello-world-to-deep-learning-in-matlab-20f0f87acfa9)
* [Automatic Differentiation Part 1: Understanding the Math](https://pyimagesearch.com/2022/12/05/automatic-differentiation-part-1-understanding-the-math/)
* [Automatic Differentiation Part 2: Implementation Using Micrograd](https://pyimagesearch.com/2022/12/26/automatic-differentiation-part-2-implementation-using-micrograd/)


