function navigatePage(direction) {
      if (direction === "prev" && currentPage > 1) {
        currentPage--;
      } else if (direction === "next" && currentPage < Math.ceil(jsonData.length / itemsPerPage)) {
        currentPage++;
      }
    }
function renderData(page) {
      const table = document.querySelector("#data-table tbody");
      table.innerHTML = "";

      const start = (page - 1) * itemsPerPage; //1-1 * 10
      const end = start + itemsPerPage; //0+10

      for (let i = start; i < end; i++) {
        if (jsonData[i]) {
          const row = table.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
cell1.innerHTML = jsonData[i].id;
          cell2.innerHTML = jsonData[i].name;
          cell3.innerHTML = jsonData[i].email;
        }
      }

      document.querySelector("#pageInfo").textContent = Page ${currentPage};
    }