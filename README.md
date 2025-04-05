Attempts I Struggled With:
• Trying to make the favicon circular (unsuccessful).
Accomplishments:
• Integrated and worked with JSON Server.
• Designed the website from scratch without using templates or reference images, and selected color schemes aligned with the project's identity.
• Created reusable variables (e.g., createElement) to avoid code repetition with document.createElement.
• Used the file faker extension to quickly populate form fields with fake data.
• Progressed in an advanced JavaScript course and reviewed concepts not directly related to the project.
Code I’m Proud Of:

1. Unique Client-Side ID Generation System
   javascript
   Copy
   function addId() {
   if (!localStorage.getItem("currentId")) {
   localStorage.setItem("currentId", "0");
   }
   let id = Number(localStorage.getItem("currentId"));
   ++id;
   localStorage.setItem("currentId", id.toString());
   }
   • Key Feature: State persistence using localStorage to prevent ID duplication after page reload.

---

2. Dynamic Element Deletion
   javascript
   Copy
   tbody.addEventListener('click', (event) => {
   if (event.target.closest(".delete-button")) {
   const row = event.target.closest('tr');
   const idRow = row.getElementById("id");
   row.remove();
   console.log(idRow); // Optional: Log the deleted row's ID
   }
   });
   • Why It’s Great:
   o Uses closest() for efficient DOM traversal instead of repetitive parentElement chains.
   o Implements event delegation for optimal performance with dynamic content.

محاولات لم أوفق بها:
. حاولت أن أجعل ال favicon دائرية

أشياء تعملتها:
. التعامل مع json server
. تصميم الموقع من الصفر دون وجود تبلت أو صور للموقع للاستعانة بها، واختيار الألوان المناسبة لهوية المشروع
. إنشاء variables مثل createElement لعدم تكرار كتابة الأكواد document.createElement
. استخدام faker filler extension من أجل ملئ الحقول بسرعة
. متابعة كورس js متقدم ومراجعة العديد من المفاهيم الغير متعلقة مباشرة بالمشروع وأحرزت تقدما بها

أكواد أفتخر بها:
نظام توليد ID فريد (Client-Side)

- حفظ الحالة لمنع تكرار الid بعد إعادة التحميل
  function addId() {
  if(!localStorage.getItem("currentId")) {
  localStorage.setItem("currentId", "0")
  }

id = Number(localStorage.getItem("currentId"))
++id
localStorage.setItem("currentId", id)
}
حذف ديناميكي للعناصر

- استخراج الrows باستخدام closest بدلا من تكرار parentElement
  tbody.addEventListener('click', (event) => {
  if(event.target.closest(".delete-button")) {
  const rowselected = event.target.closest('tr')
  const idRow = rowselected.getElementsByClassName("id")[0]
  rowselected.remove()
  }
  =======

# dental_clinic

it is a sleek and simple web project for managing dental clinic patient data, built using JSON Server as a storage solution.

> > > > > > > 6f9fb0c3d86dd5c5425d29312f7254dc2a3bf8c7
