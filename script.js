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
  document.body.append(cut, progress);
  const label = cut.querySelector('.call-label'), wave = cut.querySelector('.call-wave');
  const speakers = {bobo:'Bobo',pipej:'Pipej',miki:'Miki',kevin:'Kevin',unknown:'Jakinov slot',together:'Vsi skupaj'};
  let queued = false;
  function draw() {
    queued = false;
    const quiet = reduced.matches;
    document.body.classList.toggle('motion-ready', !quiet);
    let active = 0;
    rigs.forEach(({scene}, index) => { if (scrollY >= scene.offsetTop) active = index; });
    const scene = rigs[active].scene;
    const travel = clamp((scrollY - scene.offsetTop) / scene.offsetHeight);
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
        actor.style.setProperty('--mug-lift-angle', phase * 65 + 'deg');
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
    });
    progress.style.setProperty('--story-progress', clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(draw); } }
  addEventListener('scroll', queue, {passive:true});
  addEventListener('resize', queue); addEventListener('pageshow', queue); addEventListener('load', queue);
  reduced.addEventListener('change', queue);
  draw();
})();
