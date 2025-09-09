---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 4
cv_pdf: example_pdf.pdf
---

## Curriculum Vitae

**Nedim Hacıosmanoğlu, PhD**  
Postdoctoral Researcher  
Bilkent University & National Institute of Materials Science and Nanotechnology

For detailed information about my education, experience, publications, and achievements, please download my complete CV below.

<div class="cv-download">
  <a href="{{ '/assets/pdf/' | append: page.cv_pdf | relative_url}}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
    <i class="fas fa-file-pdf"></i> Download Complete CV (PDF)
  </a>
</div>

<style>
.cv-download {
  text-align: center;
  margin: 2rem 0;
}

.cv-download .btn {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.cv-download .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
