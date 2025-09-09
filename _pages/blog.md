---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---
<div class="blog-intro">
  <p>
    <a href="https://medium.com/@haciosmanoglunedim" target="_blank" class="medium-button">
      <i class="fa-brands fa-medium"></i> Visit my Medium Blog
    </a>
  </p>
</div>

<style>
  .medium-button {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #4a90e2; /* soft blue, matches common theme accents */
    color: white;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0.25em;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .medium-button:hover {
    background-color: #357ABD; /* slightly darker on hover */
    transform: translateY(-1px); /* subtle lift effect */
  }

  .medium-button i {
    margin-right: 0.5em;
  }
</style>
