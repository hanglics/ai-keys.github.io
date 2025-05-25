<img src="images/logos/ielab-page001.png" width="120px" height="120px" style="float: right;">

welcome to the README file of the AI Keys website. This file will get you set up and running to develop the ielab website locally and explain how to add and edit content to the website.

## Add/Remove a Member

To add or remove a team member, create or delete a Markdown file in `/_members`.

Each file will automatically generate its own page according to its filename. For example, a file with the name `tim-miller.md` will generate a page at `/members/tim-miller`.

Example (Or can refer to the existing member file, change it):
```
---
name: Tim Miller
image: images/team/some-image.jpg
role: programmer
description: Senior Programmer
aliases:
  - T Miller
  - T. Miller
  - Timothy Miller
links:
  home-page: https://tims-website.com/
  email: tim-Miller@email.com
  twitter: tims_twitter
---

A bio for Tim, written in Markdown.
A descriptions of his academic studies, his recent accomplishments, his goals for the future, his likes/dislikes, etc.
One or two paragraphs is probably best.
```

The skeleton arrangement and style of team member pages are based on the `/_layouts/member.html` template, which you can freely edit to your liking.

## Add a Publication

You can manually add a publication in `_data/sources.yaml`, the format is:

```
- id: doi:10.1145/3687273.3687287
  harry: true
  leif: true
  dylan: true
- id: pubmed:30815123
  bevan: true
- id: pmc:PMC5640425
  guido: true
- id: arxiv:1806.05726
  anton: true
```

`id` is the doi of the publication, and the following is author names, only mark the authors in your group, it will help the site-search function and filters to filter out the publications according to members, just like this: `{% include list.html data="citations" component="citation" filters="hang: true" %}`

You can even provide rich details to display nicer:

```
- id: arxiv:1806.05726
  type: paper
  description: Lorem ipsum _dolor sit amet_.
  image: https://publisher.com/striking-image-for-your-paper.jpg
  buttons:
    - type: source
      link: https://github.com/your-lab/some-repo
    - type: website
      text: My Personal Website
      link: http://some-website.com/
  tags:
    - biology
    - big data
    - medicine
  repo: your-lab/some-repo
```

`type` is defined in `_data/types.yaml`. `buttons` shows a list of buttons under citation. `repo` is the GitHub repo to fetch extra `tags`.

Or you can provide Member's Google Scholar ID in the `google-scholar.yaml`, in the following format, to enable auto crawl publication for the members:

```
- gsid: LS67b08AAAAJ
  hang: true
- gsid: pcibYXwAAAAJ
  ahmed: true
```

(Currently the `google-scholar.yaml` is renamed to `tmp-google-scholar.yaml` to disable it, because the API secret ([SerpAPI](https://serpapi.com/)) has a 100 daily limit. To enable it, change it back to `google-scholar.yaml`, and make a [new repository secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) named `GOOGLE_SCHOLAR_API_KEY` with the API key as its value.)

(Same for `orcid.yaml`, there are some issues with this orcid method, I don't recommend to use this one.)

For `orcid.yaml`, the format is:

```
- orcid: 0000-0002-4655-3773
  hang: true
```

DO NOT CHANGE `citations.yaml` it is auto generated.

## Add a Project

Refer to the current files in `_data/projects.yaml` and `projects/agask.md`.

## Add a Grant

Refer to the current files in `_data/grants.yaml` and `grants/RART.md`.

## Add a Tutorial

Refer to the current files in `_data/tutorials.yaml` and `tutorials/BEM-HCI.md`.

## Deploy and Build

You will need to run `first-time-setup` in GitHub Actions for the very first deploy, then it will auto re-deploy on every push commit.

Note: Currently I have disabled `.github/workflows/update-citations.yaml` in the workflows, need to uncomment the jobs in `.github/workflows/on-push.yaml`.

Also, in `_config.yaml` change the related contents to AI Keys Lab, such as title, description, subtitle, etc. Change your Lab Logo in `_includes/header.html` and `_includes/meta.html`.

In `.github/workflows/first-time-setup.yaml`, change these to the correct contents:

```
...
const contents = readFileSync(file)
    .toString()
    .replace(/(^title: ).*$/m, "$1The AI Keys Lab")
    .replace(/(^subtitle: ).*$/m, "$1A subtitle for the lab")
    .replace(/(^description: ).*$/m, "$1A description for the lab")
    .replace(/(^  email: ).*$/m, "$1contact@your-lab.com")
    .replace(/(^  github: ).*$/m, "$1ai-keys")
    .replace(/(^  twitter: ).*$/m, "$1ai-keys")
    .replace(/(^  youtube: ).*$/m, "$1ai-keys");
writeFileSync(file, contents);
...
```

The images used are all in `images/` directory, members photo in `images/members`, logos are in `images/logos`, other images are in `images/`.

## Deploy Locally

1. Install Docker Desktop and start it.

2. Run `./.docker/run.sh`.

3. Wait for Docker to build a sandbox with all the languages and packages the template needs. Should take ~2 min the first time and be almost instant on subsequent runs.

4. Wait for Docker to start the preview. You should shortly get a localhost link that you can open in your browser to see your site preview.

5. When you make a change to a file in your repo folder, your preview should refresh/update automatically, except for changes to _config.yaml which require you to manually refresh.

6. When you make a change to your sources or metasources, the cite process should automatically re-run, and when finished be reflected in your preview via the same behavior as above.

## Website Address

Visit **[hangli.me/ai-keys.github.io](http://hangli.me/ai-keys.github.io)**
