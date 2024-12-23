// إضافة مهمة جديدة
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  // التحقق من أن حقل الإدخال غير فارغ
  if (taskInput.value.trim() === '') return;

  // إنشاء عنصر قائمة جديد
  const li = document.createElement('li');
  li.innerHTML = `
      <span>${taskInput.value}</span>
    <button class="delete-btn" onclick="this.parentNode.remove()">Delete</button>
  `;

  // إضافة العنصر إلى القائمة
  taskList.appendChild(li);

  // تفريغ حقل الإدخال
  taskInput.value = '';
}
