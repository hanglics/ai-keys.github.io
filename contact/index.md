---
title: Connect
nav:
  order: 6
  tooltip: Connect with Us
---

# {% include icon.html %}Connect with Us

{%
  include button.html
  type="github"
  text="GitHub"
  link="ielab"
%}
{%
  include button.html
  type="twitter"
  text="Twitter"
  link="ielabgroup"
%}

{%
  include button.html
  type="youtube"
  text="Youtube"
  link="@ielab3142"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/members/group2021.png"
  caption="IELab Team 2021"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/members/group2020.jpg"
  caption="IELab Team 2020"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
