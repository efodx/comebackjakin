// Ordinary scrolling cuts between friends on League voice. HTML is complete without JS.
(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = n => Math.max(0, Math.min(1, n));
  const ease = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const rigs = scenes.map(scene => ({
    scene, panel: scene.querySelector('.panel-frame'),
    actors: [...scene.querySelectorAll('.toon')].map(actor => {
      const portrait = actor.querySelector('.actor-portrait');
      const bubble = portrait.querySelector('.bubble');
      let tail = null;
      if (bubble) {
        tail = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        tail.setAttribute('class', 'speech-tail'); tail.setAttribute('aria-hidden', 'true');
        tail.setAttribute('viewBox', '0 0 180 250');
        tail.innerHTML = '<path fill="#fff5dd" stroke="#171c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        portrait.append(tail);
      }
      return {actor, portrait, bubble, tail};
    })
  }));
  const cut = document.createElement('div'); cut.className = 'call-cut'; cut.setAttribute('aria-hidden', 'true');
  cut.innerHTML = '<span class="call-wave"><i></i><i></i><i></i><i></i><i></i></span><span class="call-label"></span>';
  const progress = document.createElement('div'); progress.className = 'cinema-progress'; progress.setAttribute('aria-hidden', 'true');
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-story-nav';
  mobileNav.setAttribute('aria-label', 'Pomikanje po zgodbi');
  mobileNav.innerHTML = '<span class="mobile-story-nav__progress" aria-live="polite"></span><button type="button"><span class="mobile-story-nav__label"></span><span aria-hidden="true">↓</span></button>';
  document.body.append(cut, progress, mobileNav);
  const label = cut.querySelector('.call-label'), wave = cut.querySelector('.call-wave');
  const mobileStep = mobileNav.querySelector('.mobile-story-nav__progress');
  const mobileNext = mobileNav.querySelector('button');
  const mobileNextLabel = mobileNav.querySelector('.mobile-story-nav__label');
  const mobileNextIcon = mobileNext.querySelector('[aria-hidden="true"]');
  const nextStepDuration = 1400; // Give each phone scene a deliberate transition.
  const finaleDuration = 7600; // Play the scroll-driven friendship reveal at a calm pace.
  let nextScroll = null;
  function cancelNextScroll(event) {
    if (!nextScroll) return;
    if (event && event.type !== 'wheel' && mobileNav.contains(event.target)) return;
    cancelAnimationFrame(nextScroll.frame);
    document.documentElement.style.scrollBehavior = nextScroll.scrollBehavior;
    nextScroll = null;
    queue();
  }
  function animateNextScroll(steps) {
    cancelNextScroll();
    const root = document.documentElement;
    nextScroll = {frame:0, scrollBehavior:root.style.scrollBehavior};
    const animation = nextScroll;
    root.style.scrollBehavior = 'auto';
    queue();
    function runStep(index) {
      if (nextScroll !== animation) return;
      if (index >= steps.length) {
        root.style.scrollBehavior = animation.scrollBehavior;
        nextScroll = null;
        queue();
        return;
      }
      const {top, duration} = steps[index];
      const start = performance.now();
      const from = scrollY;
      function move(now) {
        if (nextScroll !== animation) return;
        const progress = clamp((now - start) / duration);
        window.scrollTo(0, from + (top - from) * ease(progress));
        if (progress < 1) animation.frame = requestAnimationFrame(move);
        else runStep(index + 1);
      }
      animation.frame = requestAnimationFrame(move);
    }
    runStep(0);
  }
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(type =>
    addEventListener(type, cancelNextScroll, {passive:true})
  );
  mobileNext.addEventListener('click', () => {
    if (nextScroll) return;
    let current = 0;
    rigs.forEach(({scene}, index) => { if (scrollY >= scene.offsetTop) current = index; });
    const lastIndex = rigs.length - 1;
    const lastScene = rigs[lastIndex].scene;
    const finale = clamp((scrollY - lastScene.offsetTop) / Math.max(1, lastScene.offsetHeight - innerHeight));
    const atEnd = reduced.matches || finale >= .92;
    const endOfStory = document.documentElement.scrollHeight - innerHeight;
    let top;
    if (current < lastIndex) {
      const next = current + 1;
      top = next === rigs.length - 1 ? endOfStory : rigs[next].scene.offsetTop;
    } else {
      top = atEnd ? 0 : endOfStory;
    }
    if (reduced.matches || (current === lastIndex && atEnd)) {
      window.scrollTo({top, behavior:reduced.matches ? 'auto' : 'smooth'});
      return;
    }
    const steps = current === lastIndex - 1
      ? [
          {top:lastScene.offsetTop, duration:nextStepDuration},
          {top:endOfStory, duration:finaleDuration}
        ]
      : [{top, duration:current === lastIndex ? Math.max(1200, finaleDuration * (1 - finale)) : nextStepDuration}];
    animateNextScroll(steps);
  });
  const speakers = {bobo:'Bobo',pipej:'Pipej',miki:'Miki',kevin:'Kevin',unknown:'Jakinov slot',together:'Vsi skupaj'};
  const reunion = document.querySelector('.scene-reunion');
  const friendship = reunion.querySelector('.friendship');
  const letters = [...friendship.children];
  const cup = reunion.querySelector('.toon-jakin .mug-grip');
  const confetti = document.createElement('div');
  confetti.className = 'friendship-confetti';
  confetti.setAttribute('aria-hidden', 'true');
  const sparks = Array.from({length:72}, () => confetti.appendChild(document.createElement('b')));
  friendship.after(confetti);
  const magic = document.createElement('div');
  magic.className = 'cup-magic';
  magic.setAttribute('aria-hidden', 'true');
  magic.innerHTML = '<div class="magic-aura"></div><div class="magic-ring"></div><div class="magic-ring magic-ring-cross"></div><div class="magic-orbit"><i>✦</i><i>✧</i><i>✦</i><i>✧</i></div><div class="magic-steam"><i></i><i></i><i></i></div>';
  confetti.after(magic);
  const keepsakes = document.createElement('div');
  keepsakes.className = 'party-keepsakes';
  keepsakes.setAttribute('aria-hidden', 'true');
  const treasures = Array.from({length:24}, (_, i) => {
    const artifact = document.createElement('span');
    artifact.innerHTML = '<i>' + ['✦', '♥', '✧', '♪', '◆', '★'][i % 6] + '</i>';
    artifact.style.setProperty('--artifact-delay', -(i % 7) * .6 + 's');
    return keepsakes.appendChild(artifact);
  });
  magic.after(keepsakes);
  const svgNS = 'http://www.w3.org/2000/svg';
  const cupDefs = document.createElementNS(svgNS, 'defs');
  cupDefs.innerHTML = '<linearGradient id="friendship-cup-enamel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffe49b"/><stop offset=".35" stop-color="#ff98cb"/><stop offset=".7" stop-color="#bd9dff"/><stop offset="1" stop-color="#80edeb"/></linearGradient>';
  cup.ownerSVGElement.prepend(cupDefs);
  const cupEmblem = document.createElementNS(svgNS, 'path');
  cupEmblem.setAttribute('d', 'M100 204 C97 201 92 198 92 194 C92 189 98 188 100 192 C102 188 108 189 108 194 C108 198 103 201 100 204Z');
  cupEmblem.setAttribute('class', 'cup-emblem');
  cup.firstElementChild.after(cupEmblem);
  let queued = false;
  function draw() {
    queued = false;
    const quiet = reduced.matches;
    document.body.classList.toggle('motion-ready', !quiet);
    let active = 0;
    rigs.forEach(({scene}, index) => { if (scrollY >= scene.offsetTop) active = index; });
    const scene = rigs[active].scene;
    const travel = clamp((scrollY - scene.offsetTop) / scene.offsetHeight);
    const finaleProgress = scene === reunion ? clamp((scrollY - scene.offsetTop) / Math.max(1, scene.offsetHeight - innerHeight)) : 0;
    const finaleComplete = reduced.matches || finaleProgress >= .92;
    mobileStep.textContent = String(active + 1).padStart(2, '0') + ' / ' + String(rigs.length).padStart(2, '0');
    const nextBusy = Boolean(nextScroll);
    mobileNextLabel.textContent = nextBusy ? 'Počakajte' : scene === reunion ? (finaleComplete ? 'Na začetek' : 'Poglej finale') : 'Naprej';
    mobileNextIcon.textContent = scene === reunion && finaleComplete ? '↑' : '↓';
    mobileNext.setAttribute('aria-busy', String(nextBusy));
    mobileNext.setAttribute('aria-disabled', String(nextBusy));
    mobileNext.setAttribute('aria-label', mobileNextLabel.textContent + ', prizor ' + (active + 1) + ' od ' + rigs.length);
    const canCut = active < rigs.length - 1 && !quiet;
    const outgoing = canCut ? 1 - ease((travel - .60) / .18) : 1;
    const incoming = canCut ? ease((travel - .90) / .10) : 0;
    const dark = canCut ? 1 - Math.max(outgoing, incoming) : 0;
    cut.style.opacity = dark;
    label.style.opacity = wave.style.opacity = ease((dark - .6) / .4);
    const nextSpeaker = rigs[active + 1]?.scene.dataset.speaker;
    label.textContent = (speakers[nextSpeaker] || '') + ' · ' + (nextSpeaker === 'together' ? 'naslednji večer' : 'League voice');
    rigs.forEach(({scene, panel, actors}, index) => {
      const opacity = index === active ? outgoing : index === active + 1 ? incoming : 0;
      const visible = quiet || opacity > .001;
      const ending = scene === reunion;
      const finale = ending ? clamp((scrollY - scene.offsetTop) / Math.max(1, scene.offsetHeight - innerHeight)) : 0;
      if (ending) {
        const ignite = quiet ? 1 : ease((finale - .34) / .1);
        const settled = quiet ? 1 : ease((finale - .66) / .25);
        // Hand the focus back to Jakin as the last letters find their places.
        panel.style.setProperty('--cup-magic', ignite * (1 - settled * .94));
        panel.style.setProperty('--cup-glow', ignite * (1 - settled * .88));
        panel.style.setProperty('--cup-aura-scale', 1 - settled * .32);
        panel.style.setProperty('--cup-emblem', ignite);
        panel.classList.toggle('cup-enchanted', quiet || finale > .34);
      }
      scene.classList.toggle('cinema-active', visible);
      panel.style.setProperty('--cinema-opacity', quiet ? 1 : opacity);
      panel.style.setProperty('--camera-scale', quiet ? 1 : 1 + (index === active ? travel : 0) * .055);
      panel.inert = !quiet && !visible;
      if (!visible) return;
      actors.forEach(({actor, portrait, bubble, tail}, actorIndex) => {
        const phase = quiet ? 0 : Math.sin((index === active ? travel : 0) * Math.PI);
        const energy = scene.classList.contains('scene-memory') || scene.classList.contains('scene-reunion');
        const sign = actorIndex % 2 ? -1 : 1;
        actor.style.setProperty('--head-turn', phase * sign * (energy ? 10 : 5) + 'deg');
        actor.style.setProperty('--arm-turn', phase * sign * (energy ? 22 : 9) + 'deg');
        actor.style.setProperty('--mug-lift-angle', (ending ? (quiet ? 95 : -55 + ease(finale / .4) * 150) : phase * 65) + 'deg');
        if (!bubble || quiet) return;
        const bounds = portrait.getBoundingClientRect(), speech = bubble.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const left = innerWidth <= 700 || ['pipej', 'miki'].includes(scene.dataset.speaker);
        const x = left ? speech.right - 12 : speech.left + 12;
        const startX = (x - bounds.left) / bounds.width * 180;
        const startY = (speech.bottom - bounds.top - 4) / bounds.height * 250;
        const tipX = left ? 42 : 138;
        tail.firstElementChild.setAttribute('d', 'M' + (startX - 4) + ' ' + startY + ' Q' + (startX - 2) + ' ' + (startY + 12) + ' ' + tipX + ' 112 Q' + (startX + 6) + ' ' + (startY + 10) + ' ' + (startX + 4) + ' ' + startY);
      });
      if (ending && !quiet) {
        // Measure the transformed cup so the letters emerge from its actual rim,
        // including the camera scale and responsive character sizing.
        const frame = panel.getBoundingClientRect(), rim = cup.getBoundingClientRect();
        const heads = actors.map(({portrait}) => portrait.getBoundingClientRect().top);
        const center = frame.width / 2;
        const spacing = Math.min(96, frame.width * .089);
        const originX = rim.left + rim.width * .3 - frame.left;
        const originY = rim.top + 3 - frame.top;
        const wordY = Math.max(frame.height * .35, Math.min(...heads) - frame.top - 74);
        magic.style.left = originX + 'px';
        magic.style.top = originY + rim.height * .3 + 'px';
        magic.style.setProperty('--magic-size', Math.max(60, rim.width * 2.6) + 'px');
        friendship.style.setProperty('--word-y', wordY + 'px');
        friendship.style.setProperty('--celebration', ease((finale - .43) / .3));
        letters.forEach((letter, i) => {
          const flight = clamp((finale - .43 - i * .026) / .24);
          const arrive = ease(flight);
          const targetX = center + (i - (letters.length - 1) / 2) * spacing;
          const targetY = wordY - Math.sin(i / (letters.length - 1) * Math.PI) * 30;
          const flourish = Math.sin(flight * Math.PI);
          letter.style.left = originX + (targetX - originX) * arrive + Math.sin(flight * Math.PI * 2) * (i % 2 ? -24 : 24) + 'px';
          letter.style.top = originY + (targetY - originY) * arrive - flourish * Math.min(110, frame.height * .13) + 'px';
          letter.style.opacity = ease(flight / .18);
          letter.style.setProperty('--letter-scale', .15 + arrive * .85 + Math.sin(flight * Math.PI) * .55);
          letter.style.setProperty('--letter-rotation', (i % 2 ? -1 : 1) * (1 - arrive) * 150 + 'deg');
        });
        sparks.forEach((spark, i) => {
          // Staggered fountains of stars and confetti follow the same scroll timeline.
          const flight = clamp((finale - .42 - (i % 9) * .027) / .34);
          const spread = Math.sin(i * 2.4) * Math.min(frame.width * .43, 520);
          spark.style.left = originX + spread * ease(flight) + 'px';
          spark.style.top = originY - Math.sin(flight * Math.PI * .78) * (100 + (i % 5) * 35) - flight * 65 + 'px';
          spark.style.opacity = Math.sin(flight * Math.PI) * .9;
          spark.style.transform = 'translate(-50%,-50%) rotate(' + (i * 37 + flight * 400) + 'deg) scale(' + (.4 + Math.sin(flight * Math.PI) * .8) + ')';
        });
        treasures.forEach((artifact, i) => {
          const flight = ease((finale - .46 - (i % 8) * .025) / .3);
          const targetX = center + ((i % 12) / 11 - .5) * Math.min(frame.width * .88, 1080);
          const targetY = wordY + (i < 12 ? -1 : 1) * (58 + (i % 3) * 16);
          artifact.style.left = originX + (targetX - originX) * flight + 'px';
          artifact.style.top = originY + (targetY - originY) * flight - Math.sin(flight * Math.PI) * 55 + 'px';
          artifact.style.opacity = flight * (i % 3 === 0 ? .9 : .65);
          artifact.style.transform = 'translate(-50%,-50%) scale(' + (.2 + flight * .8) + ')';
        });
      }
    });
    progress.style.setProperty('--story-progress', clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(draw); } }
  addEventListener('scroll', queue, {passive:true});
  addEventListener('resize', queue); addEventListener('pageshow', queue); addEventListener('load', queue);
  reduced.addEventListener('change', queue);
  draw();
})();
