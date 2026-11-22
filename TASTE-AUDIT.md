GATE: PASS

Final gate: zero open failures, five nonblocking warnings, no waivers.

# Alice Murphy author page — taste audit

## Changes

The initial gate found 39 failures. Repairs align the header, headings, section containers and split columns; use the unchanged kit's hero entrance and interaction styles; fix focus and mobile menu behavior; remove tablet dead space; and correct image resolution and small-screen overflow.

The main book image is the user-supplied `images/9781454959465_4e4fd2.webp`. The complete cover is shown without cropping. The newsletter close adds Alice's research photograph. The journal uses two columns plus a wide third image on portrait tablets and one column on phones.

## Design and content

Kind: service / historical romance author portfolio. Main action: Read the books. This is a repair of the existing design: retain its green, red and paper palette, Source Serif 4 / Libre Franklin pairing, photographic split hero and word-highlight moment. Flat alternating grounds, no shader, scene or generated imagery. The palette echoes the author's photographs and cover.

Voice: direct third-person descriptions based on publisher information and the author's existing captions. No invented prices, reviews, dates, contact details or other facts. No coined brand name, stand-in form, stock photograph or outstanding client asset. Newsletter links to the author's existing signup. Hosting remains GitHub Pages at https://adamdavies.dev/alice-murphy-author/.

## Verification

Final gate round 3 passed after the cover replacement, running desktop and phone consistency/layout checks and the 320px basic walk.

- Full consistency audit at 1440, 1024, 820, 768 and 390 pixels included keyboard focus, contrast, reduced motion, hover behavior, no-script content, loading and responsive layout. It found tablet layout and image issues subsequently repaired.
- The subsequent all-width quick check cleared desktop, landscape tablet and phone failures. A final targeted quick check after tablet repairs and the cover change reported zero failures at 820 and 768, with eight warnings.
- Layout checks and screenshots at 1440×900, 1024×768, 820×1180, 768×1024 and 390×844: no findings. Additional 320×640 check after headline adjustment: no findings, including headline stress.
- Copy lint: zero failures and zero warnings, 242 words.
- Performance: zero failures and one warning. Total transfer about 982 KiB, largest image 165 KiB, no broken requests, and layout shift 0.001 desktop / 0.000 phone. The phone warning is the full-resolution supplied cover (1045px for a 342px frame); retained for sharp artwork at a modest file size.
- JavaScript syntax, local asset references and Git whitespace checks pass.
- The final quick checks do not repeat the full audit's hover and reduced-motion walks. Browser performance measurements are local laboratory results, not field data.

## Retained warnings

- The author's word-highlight is the existing intentional kit moment; the full audit's reduced-motion check passed.
- The closing action is newsletter signup rather than repeating “Read the books”; it serves the closing section's distinct purpose.
- Some band padding is asymmetric because of screen-height layouts and header clearance. Visual checks show no collisions or clipped content.
- The newsletter navigation points to the actual newsletter content inside the footer; its destination works.
- The earlier full audit warned about the saturated red author photograph and briefly unloaded lazy photographs under a simulated 1.6 Mbit connection. The photographs retain their real colours and use lazy loading.

No waivers were used. No kit or checker code was modified.

## Image sources

The supplied book-cover file replaces the candle photograph in the main book slot. Other images are from Alice's downloaded Instagram posts: `DcyacD7tzHa` (hero), `DcBrB32IBoA` (author), `DcJSgYvRnou` (bookshop), `DTsrEBpgKLR` (festival), `DP1dM-EAIRD` (shelves), and `DT5uCJKlMMU` (research). Original downloads remain outside the repository. No stock or generated images are presented as Alice's work.
