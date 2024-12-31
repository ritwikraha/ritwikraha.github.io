---

layout: post
title:  "Notes on Technical Writing"
author: "Ritwik Raha"
prev_title: false
prev_link: false
next_title: false
next_link: false
tags: math, technical writing, tutorial
comments: true
permalink: /technical-writing
image: /assets/site_images/technical-writing.png

---
### Notes on  Technical Writer


Since the very start of my career, I have viewed technical writing as more than just a means of communication—it’s a powerful tool for both teaching and learning. 

The process of organizing thoughts, and presenting them clearly often benefits the writer as much, if not more, than the reader. 

In this post, I aim to capture some of the lessons I’ve learned, the tools I rely on, and the principles I follow to make technical writing a meaningful and impactful craft. 

---

#### General Rules of the Trade

##### 1. **Clarity Is Key**  
Technical writing should simplify, not complicate. Follow these golden rules:
   - Break down instructions into small, digestible steps.
   - Use links, screenshots, and examples to guide the reader.
   - Include the expected outcomes for every process.

##### 2. **T-Shaped Approach for Deep Dives**  
When explaining a topic:
   - First, provide an overview to cover the breadth of the subject.
   - Then, choose an aspect to dive into, offering depth and detail.
   - Use Google's [Style Guide](https://developers.google.com/style) for consistency.

   **Core Techniques from Google's Style Guide:**
   - Write in the **active voice** to clarify actions and actors.
   - Use **numbered lists** for sequential steps and **bulleted lists** for non-sequential points.
   - Write in the **second person**, addressing the reader as "you."
   - Place conditions **before** instructions, not after (e.g., *If the file exists, then delete it*).
   - Format code or technical terms using `code font`.

---

##### 3. **Understand and Think Like Your Audience**  
   - **Who is your audience?** Create personas with attributes such as:
      - **Role**: QA Tester, Developer, or System Administrator.
      - **Goal**: Restore a database, deploy an application.
      - **Knowledge Base**: Familiarity with Python, command-line tools, or Linux.

   - **Adjust for inclusivity:** Avoid jargon unless your audience is well-versed in it. Provide definitions for unfamiliar terms and include links to additional resources.
   - Strike a balance: Avoid over-narrowing your focus to one persona. Broaden where possible to be inclusive of diverse readers.

---

##### 4. **Write, Review, Improve**  
   - **Read it aloud**: This ensures conversational and engaging writing. If sentences feel awkward, rephrase them.
   - **Take breaks**: Step away from your draft to gain fresh perspectives.
   - **Change context**: Print your draft or change fonts for a new perspective.
   - **Seek peer feedback**: Like code, writing benefits from constructive reviews. Ensure your reviewers understand your style guide.

---

##### 5. **Code Integration Best Practices**  
   - Always include line numbers when providing code examples and refer to them in your explanations.
   - Offer a link to the full code (e.g., GitHub or Gist) at the beginning of the document.
   - Use visual tools like [Slides Code Highlighter](https://romannurik.github.io/SlidesCodeHighlighter/?theme=angular-light&font=Roboto+Mono&tab=4&size=40&sel=focus) to make code stand out in presentations.

---

##### 6. **Use LLMs as a Tool (only a tool)**  
Leverage Large Language Models (LLMs) such as ChatGPT, Claude and others to:
   - Edit and refine your drafts.
   - Refactor sections for clarity.
   - Never use it to think for you!

---

#### Tools to Elevate Your Writing

Here’s a curated list of tools (that I personally use) to boost your technical writing:

1. **[Slides Code Highlighter](https://romannurik.github.io/SlidesCodeHighlighter/)**  
   Highlight code elegantly in Google Slides.

2. **[Manim](https://www.manim.community/)**  
   Create high-quality technical videos and animations.

3. **[Draw.io](https://www.drawio.com/)**  
   Craft polished technical diagrams.

4. **[Grammarly](https://app.grammarly.com/)**  
   Refine grammar, spelling, and readability.

5. **[Hemingway App](https://hemingwayapp.com/)**  
   Assess readability and improve sentence structure.

6. **[Write the Docs](https://www.writethedocs.org/)**  
   Join a global community for resources, workshops, and support.

---

#### Parting Thoughts

##### 1. **Prioritize the Reader**  
Your audience is the heart of your writing. Focus on their needs rather than how much information you can cram in.

##### 2. **Simplicity Is Hard**  
- Know your audience’s knowledge level.  
- Use clear, concise language.  
- Structure content logically, with easy-to-follow steps.

##### 3. **Community helps, a lot**  
Technical writing is not a solitary journey. Engage with communities like *Write the Docs* to grow, learn, and refine your craft.

Mastering technical writing is a journey, but with practice and empathy for your audience, you can transform your documentation into a tool that empowers and enlightens its readers. Keep writing, keep improving, and most importantly—keep caring.

---

#### References
1. [Google Technical Writing](https://developers.google.com/tech-writing)  
2. [Reddit: Becoming a Technical Writer](https://www.reddit.com/r/technicalwriting/comments/17hcxjt/becoming_a_technical_writer/)  
3. [SheCodeAfrica: A Guide to Technical Writing](https://medium.com/shecodeafrica/a-guide-to-technical-writing-7efcd0e70166)  

---


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

