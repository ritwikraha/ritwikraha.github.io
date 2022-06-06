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
