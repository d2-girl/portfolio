window.addEventListener('DOMContentLoaded', function () {
      // The phrases you want typed — edit/add as desired
      const texts = [
        "  a web designer",
        "  a computer engineer",
        " a css animator",
        " a presenter"
      ];

      // Grab the element
      const el = document.getElementById('typing');
      if (!el) {
        console.error('Typing element (#typing) not found.');
        return;
      }

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      el.appendChild(cursor);
      let phraseIndex = 0; // which phrase in texts[]
      let charIndex = 0;   // which character in current phrase
      let typing = true;   // true => typing, false => deleting

      // Settings (tweak these)
      const TYPING_SPEED = 90;   // ms per character while typing
      const DELETING_SPEED = 40; // ms per character while deleting
      const PAUSE_AFTER = 1400;  // pause after a phrase is fully typed
      const PAUSE_BETWEEN = 700; // pause after phrase fully deleted

      // Ensure display text (without cursor) is separate node
      const textNode = document.createTextNode('');
      el.insertBefore(textNode, cursor);

      function tick() {
        const current = texts[phraseIndex % texts.length];
        if (typing) {
          // Add a character
          charIndex++;
          textNode.nodeValue = current.slice(0, charIndex);

          if (charIndex === current.length) {
            // finished typing this phrase
            typing = false;
            setTimeout(tick, PAUSE_AFTER);
          } else {
            setTimeout(tick, TYPING_SPEED);
          }
        } else {
          // Deleting
          charIndex--;
          textNode.nodeValue = current.slice(0, charIndex);

          if (charIndex === 0) {
            // finished deleting, move to next phrase
            typing = true;
            phraseIndex++;
            setTimeout(tick, PAUSE_BETWEEN);
          } else {
            setTimeout(tick, DELETING_SPEED);
          }
        }
      }

      // Start
      tick();
    });
   function readMore(){
  alert("Replace this with a real About page link or open a modal.");
}
  


