---

---

# About this project

---

{% include list.html data="members" component="portrait" filters="project: systematic-review-literature-search" style="tiny"%}

---

This project seeks to develop methods and tools for improving how experts search for literature for systematic reviews. So far, research in this area by this team has provided useful tools for visually assisting Boolean query formulation, fully automatic methods for Boolean query refinement specifically in the systematic review domain, domain-specific retrieval models, and a test collection.

See below for a list of relevant publications, description of the task, background information, and challenges.

## What are systematic reviews?

Systematic reviews are a type of literature review, synthesising all possible relevant information for highly focused research questions. In the medical domain, systematic reviews are the foundation of [evidence based medicine](https://en.wikipedia.org/wiki/Evidence-based_medicine) and are of the highest quality evidence for this domain. Systematic reviews in the medical domain not only inform health care practitioners about what decisions to make about diagnosis and treatment, but have also been used to [inform governmental policy making](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2807200/). The main type of systematic review seeks to systematically search and critically appraise and synthesise evidence from clinical studies (i.e., [randomised controlled trials](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3196997/)). There are, however, also a number of other [types of systematic reviews](https://guides.mclibrary.duke.edu/sysreview/types), such rapid reviews (where time is a more important factor), [scoping reviews](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2954944/) (which synthesise a range of many broad areas of literature), or [umbrella reviews](https://www.ncbi.nlm.nih.gov/pubmed/26360830) (which could be though of as systematic reviews of systematic reviews).

### Cost Factors

There are a number of considerations to make when conducting a systematic review. Most importantly are the time and cost factors involved. A systematic review has a number of steps which must be completed in a systematic nature. These steps are usually [defined well in advance](https://training.cochrane.org/handbook) and strictly adhered to during the construction of the review. At a high level, these steps are as follows:

- Identification of research question.
- Construction of study protocol.
- Formulation of search strategy.
- Screening and Appraisal of studies.
- Synthesis of studies.
- Publication and distribution of review.

The main cost of a systematic review appears in step 4, where studies are screened and appraised to determine their inclusion or exclusion criteria for the following step. Often, a search strategy retrieves thousands, if not tens of thousands of results. The systematic nature of these reviews calls for inspecting each and every result retrieved. It is also common for this screening and appraisal to be performed in parallel with multiple reviewers to reduce bias (increasing the cost further). This screening process can often take months, and sometimes a year or more (depending on how many results are retrieved).

### Reducing Cost Factors

There has been much research developing tools to assist researchers undertaking a systematic review to reduce the monetary and time costs of the review. Typically these tools help by [assisting to prepare and maintain reviews](https://community.cochrane.org/help/tools-and-software/revman-5), [re-ranking results through active learning](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6175382/), [automating evidence synthesis](http://www.robotreviewer.net/), among others. There has also been much research to develop methods for automatically prioritising the results in the screening and appraisal phase. Systematic review literature search is unlike typical web search (e.g., Google) as a Boolean retrieval model is used. Most research on ranking in the Information Retrieval domain has focused primarily on this “ad-hoc” task of ranking documents for a query similar to one that would be issued to a modern search engine. Ranking the results of a Boolean query cannot be performed with the same principals, and there has been many studies showing the ineffectiveness of Boolean queries vs. the types of queries used in modern search engines. The screening prioritisation for systematic review literature search therefore uses approaches such as active learning, rather than improving the retrieval model.

## Why Bother with Boolean Search?

A Boolean query allows for the complete control over the search results. While it does not provide a mechanism for ranking, the trade-off in specifying exactly what should be retrieved through the use of set-based operators, term matching, and field restrictions allows for expert control. Furthermore, many search engines used for systematic review literature search (e.g., [PubMed](https://www.ncbi.nlm.nih.gov/pubmed/)) also incorporate medical ontologies (i.e., [MeSH](https://www.nlm.nih.gov/mesh/)), explicit stemming, and complex Boolean operators such as adjacency. These features of the types of Boolean queries used in this domain are also the reason the cost of a review are so high: the complexity involved in constructing a Boolean query to effectively satisfy the information need of the review is extremely high.

### Improving Boolean Query Formulation

There are significant time and cost savings to be had by improving the effectiveness of Boolean queries. A more effective Boolean query retrieves less irrelevant studies while maintaining the number of relevant studies. Screening prioritisation only helps to bubble the most relevant studies to the top of the list; reviewers still must screen all studies systematically. A more effective query translates to less studies to screen overall. Even small decreases in numbers of irrelevant studies can significantly reduce cost and time factors of systematic review construction. Decreases in the time it takes to construct systematic reviews can lead to more accurate and up-to-date evidence based medicine; improving decisions by health care professionals.

## Relevant Publications

{% include list.html data="citations" component="citation" filters="title: Systematic Review" %}
