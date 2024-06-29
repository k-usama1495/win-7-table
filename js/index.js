let enableDragable = function (el_id) {
  let draggableDiv = document.getElementById(el_id);
  draggableDiv.style.position = 'absolute';
  // draggableDiv.style.cursor = 'move';

  // JavaScript for dragging functionality
  let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

  draggableDiv.addEventListener("mousedown", dragStart);

  function dragStart(e) {
      // e.preventDefault();
      initialX = e.clientX;
      initialY = e.clientY;
      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", dragEnd);
  }

  function drag(e) {
      e.preventDefault();
      offsetX = initialX - e.clientX;
      offsetY = initialY - e.clientY;
      initialX = e.clientX;
      initialY = e.clientY;
      draggableDiv.style.top = (draggableDiv.offsetTop - offsetY) + "px";
      draggableDiv.style.left = (draggableDiv.offsetLeft - offsetX) + "px";
  }

  function dragEnd() {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", dragEnd);
  }
}

let addTableRow = function (row, table_body_id) {
  table_body_id.innerHTML += row;
}

function main () {
  try {
    let tableBody = document.getElementById("usTableBody");

    enableDragable('table_frame');

    for (let i = 0; i < userData.length; i++) {
      let d = userData[i];
      addTableRow(`
        <tr>
          <td style="text-align:right;">${d.ID}</td>
          <td>${d.FirstName}</td>
          <td>${d.LastName}</td>
          <td>${d.EmployeeCode}</td>
          <td>${d.State}</td>
          <td>${d.City}</td>
          <td>${d.Status}</td>
        </tr>
      `, tableBody);
    }
  } catch (err) {
    console.error(err)
  } 
}
document.addEventListener('DOMContentLoaded', main);