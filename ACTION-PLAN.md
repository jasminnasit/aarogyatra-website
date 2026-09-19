# Action Plan

- URL: `https://www.aarogyatraglobalcare.com`
- Overall score: `70/100`

## Priority Fixes

1. **6 security headers missing**
   - Priority: `Critical`
   - Area: `environment`
   - Evidence: Missing headers reduce trust and can expose the site to browser/security risks.
   - Fix: Set missing security headers at web server or CDN layer.
2. **11 orphan page(s) with zero inbound internal links.**
   - Priority: `Critical`
   - Area: `link_profile`
   - Evidence: See audit output.
   - Fix: Add internal links from relevant content pages to these orphan pages.
3. **Average internal links per page is only 1.0 (target: 5-10).**
   - Priority: `Critical`
   - Area: `link_profile`
   - Evidence: See audit output.
   - Fix: Increase internal linking by adding contextual links within content.
4. **sameAs URL returns HTTP 404: https://www.linkedin.com/company/aarogyatraglobalcare**
   - Priority: `Warning`
   - Area: `entity`
   - Evidence: See audit output.
   - Fix: Update sameAs URL for LinkedIn to a valid, non-redirecting destination.
5. **sameAs URL returns HTTP 404: https://x.com/aarogyatra**
   - Priority: `Warning`
   - Area: `entity`
   - Evidence: See audit output.
   - Fix: Update sameAs URL for Twitter/X to a valid, non-redirecting destination.
6. **Content readability is difficult**
   - Priority: `Warning`
   - Area: `environment`
   - Evidence: Long, complex text can reduce engagement and comprehension.
   - Fix: Rewrite key sections with shorter sentences (15-20 words), shorter paragraphs (2-4 sentences), and clearer subheadings.
7. **No Wikidata entry found for 'Aarogyatra Global Care'.**
   - Priority: `Info`
   - Area: `Wikidata`
   - Evidence: See audit output.
   - Fix: If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO.
8. **No Wikipedia article found for 'Aarogyatra Global Care'.**
   - Priority: `Info`
   - Area: `Wikipedia`
   - Evidence: See audit output.
   - Fix: Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals.
9. **Performance measurement incomplete**
   - Priority: `Info`
   - Area: `environment`
   - Evidence: PageSpeed API returned an error, so CWV recommendations are less reliable.
   - Fix: Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output.
10. **Missing sameAs link to Wikipedia (Primary KG signal).**
   - Priority: `Info`
   - Area: `sameAs`
   - Evidence: See audit output.
   - Fix: Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO.
11. **Missing sameAs link to Wikidata (Primary KG signal).**
   - Priority: `Info`
   - Area: `sameAs`
   - Evidence: See audit output.
   - Fix: Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO.
