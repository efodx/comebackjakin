# Jakin, pridi nazaj

## Problem Statement

Bobo, Miki, Kevin, and Pipej miss playing League of Legends with their friend Jakin. They want to send him a personal, funny, and sincere invitation to return, presented as a memorable scrolling story rather than a conventional message.

## Solution

Create a public GitHub Pages website in a repository named `comebackjakin`. It tells a six-scene story in Slovenian with familiar English League slang. CSS scenery and scroll animations move from warm shared memories through exaggerated loneliness to a hopeful invitation.

The tone is affectionate and dramatically over-the-top. Jakin being almost always late is the central real-life detail: the opening promises “Jakin pride čez pet minut,” while the ending welcomes him even if he is late. References use League voice, never Discord.

The experience contains no functional buttons, forms, invitations that trigger actions, or game integrations. Its final message is: **“Jakin, pridi nazaj. Lahko zamudiš. Samo pridi.”**

## User Stories

1. As Jakin, I want to immediately recognize my friends, so that the invitation feels personal.
2. As Jakin, I want to encounter the joke about arriving late, so that I recognize our shared history.
3. As Jakin, I want the story in Slovenian with familiar League slang, so that it sounds like our group.
4. As Jakin, I want to scroll naturally through the story, so that I control its pace.
5. As Jakin, I want the opening to show four friends waiting in League voice, so that I recognize the setting.
6. As Jakin, I want to see warm memories of playing together, so that I remember why those evenings mattered.
7. As Jakin, I want Pipej to lead the reminiscing, so that the story has a familiar narrator.
8. As Jakin, I want Bobo to tease me affectionately, so that the invitation remains funny.
9. As Jakin, I want my departure to visibly change the atmosphere, so that I understand the friends miss me.
10. As Jakin, I want the empty fifth slot to show my absence, so that I feel included in the group.
11. As Jakin, I want Miki to admit that the group misses me, so that the joke has a sincere emotional center.
12. As Jakin, I want the story to acknowledge that my friends do not know what I do now, so that it does not invent my activities or feelings.
13. As Jakin, I want the story to turn hopeful, so that returning feels welcoming.
14. As Jakin, I want Kevin to deliver the final invitation, so that the ending has a clear voice.
15. As Jakin, I want to see all four friends named at the end, so that I know the invitation is from everyone.
16. As Jakin, I want the ending to accept my lateness, so that the running joke becomes an affectionate welcome.
17. As Jakin, I want the invitation to require no response or action on the website, so that I can simply enjoy it.
18. As a mobile visitor, I want legible captions and scenery that fits my screen, so that the full story works on my phone.
19. As a desktop visitor, I want cinematic scenery and visual depth, so that scrolling feels memorable.
20. As a visitor sensitive to motion, I want reduced-motion preferences respected, so that I can read comfortably.
21. As a visitor, I want the text accessible independently of animation, so that visual effects never prevent reading the story.
22. As a visitor, I want short captions and a roughly one-minute journey, so that the invitation remains engaging.
23. As a friend sharing the page, I want a public link with no login requirement, so that Jakin can open it easily.
24. As a maintainer, I want a small static website, so that GitHub Pages can host it with minimal upkeep.

## Implementation Decisions

- Start from an empty workspace. There is no existing application, Git repository, documentation convention, domain glossary, ADR, or testing infrastructure.
- Use a dependency-free static website with semantic HTML, CSS, and only minimal JavaScript if needed to trigger progressive scroll reveals. No backend, database, API, account system, or application state is required.
- Build one linear page containing six ordered scenes. Each scene combines readable captions, decorative CSS scenery, and recognizable flat cartoon characters with separate SVG groups for animation.
- Scene 1: Bobo, Miki, Kevin, and Pipej wait in League voice. “Jakin pride čez pet minut” introduces the lateness joke. Bobo provides the teasing voice.
- Scene 2: Pipej reminisces about happy shared games. Use warm golden lighting and generic shared-play imagery. Do not invent specific matches, champions, ranks, or historical anecdotes.
- Scene 3: Jakin leaves the shared routine. Warmth fades into cold, quieter scenery; the transition remains affectionate rather than accusatory.
- Scene 4: The four friends face an empty fifth slot. Miki admits they miss Jakin. The scene communicates that playing together mattered more than the result.
- Scene 5: Acknowledge that the friends do not know what Jakin does now. His slot remains available. Do not depict current solo queue or invent his activities or feelings.
- Scene 6: Hopeful lighting returns. Kevin delivers “Jakin, pridi nazaj. Lahko zamudiš. Samo pridi.” Display Bobo, Miki, Kevin, and Pipej as the senders. The invitation is static text.
- Keep the final visual direction dark and cinematic, League-inspired, with glowing scenery, large illustrated characters, comic dialogue, and a warm-to-cold-to-hopeful color progression.
- Give scroll animation a narrative purpose: reveal memories, expose absence, and restore warmth. Ordinary scrolling remains usable; avoid scroll hijacking or requiring precise gestures.
- Treat animation as progressive enhancement. Captions and scene order remain readable when motion is reduced or animation scripting is unavailable.
- Support mobile and desktop layouts with readable typography, responsive scenery, and no horizontal overflow. Respect reduced-motion preferences with a quiet presentation that preserves all story content.
- Keep project copy and character notes nickname-only; never store real names or profile URLs. Use user-confirmed reference images only to guide visible appearance and clothing details. Do not embed the reference photos in the public page or add unrelated biographical details.
- Use a public repository named `comebackjakin` and public GitHub Pages hosting. Verify assets and navigation work under a project-site URL prefix.
- The canonical specification location is the user-approved documentation convention. Do not create separate implementation task documents unless requested.

## Character Appearance References

These notes are based on reference portraits supplied or confirmed by the user. Keep the notes under nicknames only; the reference URLs and real names are intentionally omitted.

- **Bobo:** Short dark hair with a smooth top and optional texture at the front, never spikes on top; a trimmed beard and mustache, a light gray hoodie, and dark backpack straps. The portrait has a friendly, slight smile.
- **Miki:** Short dark hair with a smooth top, never spikes on top, and a clean-shaven face; wears a dark suit, white shirt, and red-burgundy tie in the portrait.
- **Jakin:** Closely cropped light-brown hair and a short beard; wears a navy T-shirt and holds a light-colored mug in the portrait.
- **Kevin:** Shoulder-length brown hair, glasses, and a short brown beard and mustache; wears a light T-shirt and casual trousers in a relaxed outdoor pose. Hair and beard color were explicitly clarified by the user after the initial black-and-white reference.
- **Pipej:** Medium-length, full dark-brown hair with a loose side part; wears a dark casual top. The photo is a close, side-facing selfie, and facial hair is not clear enough to specify.

## Character-led Prototype Direction

- The user approved expressive illustrated versions of the friends, with recognizable hair, facial hair, glasses, and clothing from the appearance notes.
- Explore a comic-book presentation with large recurring characters, expressions, and speech bubbles, while retaining cinematic atmosphere and transitions during ordinary scrolling. Preserve the six-scene story and warm-to-cold-to-hopeful progression.
- Bobo constantly teases affectionately. Miki's humor should be subtle, expressed through mild exasperation or dry remarks; the page will also be seen by Miki, so avoid explicit labels or humiliating jokes.
- First explore the direction through a preview-only image mockup in the conversation. The mockup shows selected scenes; it does not validate scroll behavior or replace the six-scene implementation.
- The user rejected the image mockup as far too realistic and requested prototyping directly on the actual page. Explore flat cartoon characters with bold outlines and exaggerated proportions instead.
- Local prototype: `http://127.0.0.1:4173/?prototype=1&variant=A` on branch `codex/cartoon-prototype`. `prototype.js` and `prototype.css` provide three layouts on the existing page: A comic panels, B wide cinematic frames, and C narration beside the characters. The bottom switcher is local prototype tooling. All six scenes remain available; a layout has not yet been selected.
- The user selected variant A for continued prototyping and requested animated characters and smooth cinematic panel transitions. Characters now have separate SVG head, body, clothing, arm, and prop groups. Variant A explores sticky panel holds, a slow camera push, background parallax, staggered character entrances, scroll-driven head and arm gestures, and Jakin lifting his mug. Movement follows scroll in both directions; reduced-motion uses static panels and characters.
- The user approved implementation of variant A with the corrected smooth hair silhouettes and shoulder-pivoted arms. The selected layout is now the default page, with static SVG character markup in `index.html`, styles in `story.css`, and progressive scroll animation in `script.js`. Prototype controls and localhost gates are removed. The original variants are preserved at commit `72753a6` on `codex/cartoon-prototype`; implementation continues on `codex/character-story`.
- Implementation validation: the normal local URL renders six scenes and 23 character instances with no interactive controls. Desktop scroll changes head and arm transforms while the active panel holds. Mobile rendering has no horizontal overflow and the ending remains visible. Temporary browser fixtures verified all characters and captions without JavaScript, and forced reduced-motion CSS and script branches produced static heads, visible bubbles, and unpinned panels. JavaScript syntax and whitespace checks pass. These checks do not establish deployment to GitHub Pages.

## Cinematic Gaming Room Exploration

- The user requested a more visual cinematic journey while preserving the existing story and characters. Their three steering choices are ordinary scroll-driven scenes with smooth transitions, a cozy gaming room with glowing PCs and the joy of playing together, and quiet emotional character moments that build into energetic gameplay.
- Continue the previously requested actual-page prototype workflow with the existing flat SVG characters. Preserve all six Slovenian story scenes, character appearances, League voice terminology, and the final invitation.
- Throwaway branch: `codex/cinematic-gaming-prototype`. Source artifacts: [cinematic-prototype.js](../../cinematic-prototype.js) and [cinematic-prototype.css](../../cinematic-prototype.css). Preview: `http://127.0.0.1:4174/?prototype=cinematic&variant=A`.
- Three exploratory structures: A holds a wide view of all friends at their desks; B places narration beside the gaming room; C follows the speaking character in a close-up. The local floating switcher and left/right keys change variants. Mobile B stacks the story over the room.
- Explore full-frame scroll dissolves, a gradual camera push, blinking and breathing, animated celebratory arms, warm monitor light, PCs, keyboards, a League poster, stylized Rift maps, and an empty glowing setup for Jakin. These are illustrative props, with no game integration or invented match history.
- Prototype code activates only on localhost with `prototype=cinematic`. Ordinary URLs retain the approved layout. The factual correction to scene 5 also applies to the ordinary page. Reduced-motion presents sequential static scenes. The user selected C for further exploration; it has not been promoted to the final site.
- C revision: treat the close-ups as cuts between friends speaking over the internet. Alternate the camera side for Pipej and Miki and give the rooms different lighting. Fade the outgoing shot completely before introducing the incoming shot; a short League voice indicator occupies the dark interval. Never superimpose faces or narration.
- After Kevin's invitation, add a seventh, explicitly hoped-for scene with Bobo, Miki, Jakin, Kevin, and Pipej together in one party, each at their own computer in separate visual frames. Keep the invitation intact and make the desired future state the final shot.
- Anchor each bubble within the actual portrait box, centered above its speaker's head, rather than estimating the position from viewport height. Jakin's forearm, gripping hand, and mug move together around the elbow; the mug and hand counter-rotate together to keep the cup upright.
- Revision validation: the annotated overlap reproduced with two visible panels. After the change, 18 scroll samples across all six boundaries showed at most one visible story panel, including the dark cut intervals. Browser checks at desktop and 390px phone widths verify the seventh scene contains all five friends and shows a 5/5 party, with no horizontal overflow. Mobile inspection shows the speech bubble centered over its actual portrait. The cup and gripping hand share the moving forearm; the forearm and grip have opposing rotation matrices, keeping the cup upright. JavaScript syntax and whitespace checks pass, and no browser errors were captured.
- Follow-up revision: lengthen the voice transition to the last 40% of each scene's scroll span, with a fully dark voice cue from 78% to 90% (previously 83% to 87%). Replace the folded CSS tail with an open-base curved SVG tail that merges into the bubble border and points toward the speaker's mouth from outside the cheek. Desktop bubbles sit beside the face on the outer side of the shot; phone bubbles sit to the left with a narrower width. Check the annotated Bobo panel, Pipej's reversed shot, and all seven scenes on a 390px phone: no clipped bubbles or horizontal overflow, and no superimposed panels during the revised cuts.
- Validation: browser inspection at desktop and 390px phone widths verified the opening and final invitation, variant switching, all six scene containers and 26 gaming setups, rendered map illustrations, and no horizontal overflow or captured browser errors. Scrolling reached the shared memory and finale. JavaScript syntax and Git whitespace checks pass. Reduced-motion is implemented but has not been exercised through browser OS emulation in this exploration.

## Testing Decisions

- The user approved one browser-level validation seam: the complete rendered page. Validate externally visible behavior rather than CSS classes, internal animation callbacks, or other implementation details.
- Check all six scenes in order, the correct speaking roles, Slovenian captions, the lateness joke, League voice references, all four sender names, and the exact final invitation.
- Scroll the complete page on representative mobile and desktop viewports. Confirm the visual progression, readable captions, working reveals, and absence of horizontal overflow or obscured content.
- Check reduced-motion rendering and the fallback without animation scripting. Every scene and the final invitation must remain readable.
- Confirm there are no functional buttons, forms, outgoing game actions, or integrations. The story must be complete through ordinary scrolling alone.
- Validate the deployed project-site URL, including asset loading under its repository path and public access without login.
- There are no existing tests to reuse. Focused browser validation is sufficient for this small static experience; an automated test framework is not part of the agreed scope.

## Out of Scope

- Discord references.
- Functional calls to action, RSVP forms, League client launching, messaging, accounts, or multiplayer features.
- A backend, database, analytics, or collection of visitor information.
- Invented real-life anecdotes, signature champions, ranks, or claims about Jakin's actual emotional state.
- Additional pages, a content-management system, or a general-purpose web application.
- Implementation task breakdowns or external tracker issues.

## Further Notes

- The user confirmed the shared story and design brief, public visibility, repository name, canonical spec location, and browser-level validation approach.
- This document records the agreed scope; it does not establish that the site has been built or deployed.
- Local exploration found Git and GitHub CLI installed. GitHub CLI reported account `efodx` with an invalid saved token. Creating the remote repository and publishing the site require renewed GitHub authentication; local implementation can proceed independently.
- Final captions beyond the agreed opening and ending may be written during implementation, preserving the approved tone, scene order, and speaking roles.
