# Insights and brand notes

## Insights publishing model

Insights live under `/insights`. Each article is an MDX file in `src/content/insights/` and uses the reusable article template.

Frontmatter fields:

- `title`: specific article title
- `description`: one-sentence editorial subtitle
- `series`: recurring series name, such as `How it works`
- `seriesNumber`: sequence within the series
- `topic`: broad subject label
- `coverImage`: reusable or article-specific editorial cover
- `coverAlt`: accessible description of the cover
- `bodyImage`: optional evidence image used inside the article
- `bodyImageAlt`: accessible description of the evidence image
- `tags`: useful search and editorial tags
- `disclaimer`: accuracy or synthetic-data note when needed

## How it works series

The visual system uses the dark editorial cover at:

`/images/insights/how-it-works-editorial-cover-dark.png`

The cover background is reusable. Article title, series label, subtitle, date, reading time, and topic are rendered as HTML so future articles can use the same artwork without generating a new image.

The series visual language:

- Deep navy and slate base
- Muted rose atmospheric light
- Quiet layered workflow structure
- Off-white editorial typography
- No fake dashboards, metrics, or unsupported product claims

Use real product screenshots inside the article body when they help explain the workflow. The cover should create the editorial frame; the body image should provide concrete evidence.

## Content reuse

An Insights article can be adapted into:

- A homepage system-card link
- A LinkedIn post or carousel
- A short email or newsletter
- A proposal or discovery follow-up
- A sales conversation reference

Keep the source article as the canonical version. Adapt the framing and length for other channels rather than creating several competing versions.

## Accuracy rules

- Label synthetic demonstrations clearly.
- Describe demonstrated integrations accurately.
- Do not claim autonomous payment or auto-pay.
- Do not invent client outcomes, ROI, or time savings.
- Explain where human review and approval remain part of the workflow.
