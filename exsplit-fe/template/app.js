const STORAGE_KEY = 'exsplit_subjects';

function qs(sel){ return document.querySelector(sel) }

function loadSubjects(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveSubjects(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function render(){
  const list = loadSubjects();
  const container = qs('#subjects-list');
  const empty = qs('#empty-state');
  container.innerHTML = '';
  if (!list.length){
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.forEach(s => {
    const li = document.createElement('li');
    li.className = 'subject-item';
    li.innerHTML = `
      <div class="subject-meta">
        <div class="subject-icon">${escapeHTML(shortName(s.name))}</div>
        <div>
          <div>${escapeHTML(s.name)}</div>
          <div class="muted" style="font-size:12px; font-weight:400;">Created ${new Date(s.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <div class="subject-actions">
        <button class="icon-btn delete" data-id="${s.id}" title="Delete subject">Delete</button>
      </div>
    `;
    container.appendChild(li);
  });
}

function shortName(name){
  return name.trim().split(/\s+/).map(p => p[0]?.toUpperCase() ?? '').slice(0,2).join('');
}

function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

document.addEventListener('DOMContentLoaded', () => {
  render();

  const form = qs('#subject-form');
  const input = qs('#subject-name');
  const feedback = qs('#feedback');
  const listEl = qs('#subjects-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const name = input.value.trim();
    if (!name){
      feedback.textContent = 'Subject name cannot be empty.';
      return;
    }

    const subjects = loadSubjects();
    if (subjects.some(s => s.name.toLowerCase() === name.toLowerCase())){
      feedback.textContent = 'A subject with that name already exists.';
      return;
    }

    subjects.unshift({ id: Date.now().toString(36), name, createdAt: Date.now() });
    saveSubjects(subjects);
    input.value = '';
    render();
  });

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const subjects = loadSubjects().filter(s => s.id !== id);
    saveSubjects(subjects);
    render();
  });
});
