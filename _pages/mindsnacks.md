---
layout: default
title: Mind Snacks
permalink: /mindsnacks/
nav: true
nav_order: 3
hide_page_title: true
---
<header class="blog-header">
  <h1 class="blog-title">Mind Snacks</h1>
  <p class="blog-welcome">
    Random thoughts, interesting facts, and observations about science, DIY projects, and everything in between.
  </p>
  <hr class="blog-separator">
</header>
{% for post in site.mindsnacks reversed %}
  <article class="post-card" data-post-id="{{ post.id | slugify }}" onclick="window.location.href='{{ post.url | relative_url }}';" style="cursor: pointer;">
    <div class="post-content">
      <h2 class="post-title">
        {{ post.title }}
      </h2>
      <p class="post-meta">
        {{ post.date | date: "%B %d, %Y" }}
      </p>
      <p class="post-excerpt">
        {{ post.description }}
      </p>
    </div>
  </article>
{% endfor %}