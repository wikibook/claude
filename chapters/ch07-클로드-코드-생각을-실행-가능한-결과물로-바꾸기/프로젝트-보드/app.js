// 프로젝트 추적 보드 로직 — 책 7장 예제 7.6 및 후속 요청
// 카드 추가 / 드래그 앤 드롭 이동 / 로컬 저장소 자동 저장 / 우선순위 색상

const STORAGE_KEY = 'project-board-cards';
let cards = load();

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch (e) { return []; }
}
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function render() {
  document.querySelectorAll('.cards').forEach(c => c.innerHTML = '');
  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card ' + (card.priority || 'normal');
    el.draggable = true;
    el.dataset.id = card.id;
    el.innerHTML =
      `<button class="del" title="삭제">✕</button>` +
      `<h3>${escapeHtml(card.title)}</h3>` +
      (card.due ? `<div class="due">📅 ${escapeHtml(card.due)}</div>` : '') +
      (card.memo ? `<div class="memo">${escapeHtml(card.memo)}</div>` : '');
    el.addEventListener('dragstart', () => el.classList.add('dragging'));
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.querySelector('.del').addEventListener('click', () => {
      cards = cards.filter(c => c.id !== card.id); save(); render();
    });
    const col = document.querySelector(`.cards[data-status="${card.status}"]`);
    (col || document.querySelector('.cards[data-status="todo"]')).appendChild(el);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}

// 카드 추가
document.getElementById('addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  cards.push({
    id: Date.now().toString(),
    title: document.getElementById('title').value.trim(),
    due: document.getElementById('due').value,
    memo: document.getElementById('memo').value.trim(),
    priority: document.getElementById('priority').value,
    status: 'todo',
  });
  save(); render();
  e.target.reset();
});

// 드래그 앤 드롭 — 열 사이 이동
document.querySelectorAll('.cards').forEach(zone => {
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
    const dragging = document.querySelector('.card.dragging');
    if (!dragging) return;
    const id = dragging.dataset.id;
    const card = cards.find(c => c.id === id);
    if (card) { card.status = zone.dataset.status; save(); render(); }
  });
});

render();
