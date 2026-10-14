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
12. As Jakin, I want my solitary scene to be an obvious playful exaggeration, so that it does not pretend to know my real feelings.
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
- Build one linear page containing six ordered scenes. Each scene combines readable captions with decorative CSS scenery and silhouettes.
- Scene 1: Bobo, Miki, Kevin, and Pipej wait in League voice. “Jakin pride čez pet minut” introduces the lateness joke. Bobo provides the teasing voice.
- Scene 2: Pipej reminisces about happy shared games. Use warm golden lighting and generic shared-play imagery. Do not invent specific matches, champions, ranks, or historical anecdotes.
- Scene 3: Jakin leaves the shared routine. Warmth fades into cold, quieter scenery; the transition remains affectionate rather than accusatory.
- Scene 4: The four friends face an empty fifth slot. Miki admits they miss Jakin. The scene communicates that playing together mattered more than the result.
- Scene 5: Jakin appears alone beside a quiet League voice motif. Brief exaggerated tragic captions make the imagined loneliness a joke, not a factual claim about him.
- Scene 6: Hopeful lighting returns. Kevin delivers “Jakin, pridi nazaj. Lahko zamudiš. Samo pridi.” Display Bobo, Miki, Kevin, and Pipej as the senders. The invitation is static text.
- Keep the final visual direction dark and cinematic, League-inspired, with glowing scenery, silhouettes, and a warm-to-cold-to-hopeful color progression.
- Give scroll animation a narrative purpose: reveal memories, expose absence, and restore warmth. Ordinary scrolling remains usable; avoid scroll hijacking or requiring precise gestures.
- Treat animation as progressive enhancement. Captions and scene order remain readable when motion is reduced or animation scripting is unavailable.
- Support mobile and desktop layouts with readable typography, responsive scenery, and no horizontal overflow. Respect reduced-motion preferences with a quiet presentation that preserves all story content.
- Use only the agreed nicknames and the lateness detail as personal information. No portraits, private screenshots, or additional personal facts are required.
- Use a public repository named `comebackjakin` and public GitHub Pages hosting. Verify assets and navigation work under a project-site URL prefix.
- The canonical specification location is the user-approved documentation convention. Do not create separate implementation task documents unless requested.

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
