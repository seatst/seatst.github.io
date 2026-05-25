(function () {
  var table = document.querySelector("[data-ranking-src]");

  if (!table) {
    return;
  }

  var columnClasses = {
    number: "ranking-rank",
    name: "ranking-contestant",
    country: "ranking-delegation",
    total: "ranking-total"
  };

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var field = "";
    var inQuotes = false;

    text = text.replace(/^\uFEFF/, "");

    for (var i = 0; i < text.length; i += 1) {
      var char = text[i];
      var nextChar = text[i + 1];

      if (char === '"' && inQuotes && nextChar === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        row.push(field);
        field = "";
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && nextChar === "\n") {
          i += 1;
        }
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else {
        field += char;
      }
    }

    if (field || row.length) {
      row.push(field);
      rows.push(row);
    }

    return rows;
  }

  function normalizeColumn(column) {
    return column.trim().toLowerCase();
  }

  function columnClass(column) {
    var normalized = normalizeColumn(column);

    return columnClasses[normalized] || "ranking-score";
  }

  function buildCell(row, column) {
    var cell = document.createElement("td");

    cell.className = columnClass(column);
    cell.textContent = row[column] || "";
    return cell;
  }

  function showEmptyState(message, colspan) {
    var body = table.tBodies[0] || table.createTBody();
    var row = document.createElement("tr");
    var cell = document.createElement("td");

    body.innerHTML = "";
    row.className = "ranking-empty";
    cell.colSpan = colspan || 1;
    cell.textContent = message;
    row.appendChild(cell);
    body.appendChild(row);
  }

  function renderTable(csvText) {
    var csvRows = parseCsv(csvText);
    var columns = (csvRows.shift() || []).map(function (column) {
      return column.trim();
    }).filter(Boolean);
    var head = table.tHead || table.createTHead();
    var body = table.tBodies[0] || table.createTBody();
    var headerRow = document.createElement("tr");

    head.innerHTML = "";
    body.innerHTML = "";

    columns.forEach(function (column) {
      var header = document.createElement("th");
      header.scope = "col";
      header.className = columnClass(column);
      header.textContent = column;
      headerRow.appendChild(header);
    });

    head.appendChild(headerRow);

    csvRows = csvRows.filter(function (csvRow) {
      return csvRow.some(function (value) {
        return value.trim() !== "";
      });
    });

    if (!csvRows.length) {
      showEmptyState("The official ranking will be published here after the contest results are finalized.", columns.length);
      return;
    }

    csvRows.forEach(function (csvRow) {
      var row = {};
      var tableRow = document.createElement("tr");

      columns.forEach(function (column, index) {
        row[column] = (csvRow[index] || "").trim();
        row[normalizeColumn(column)] = row[column];
      });

      columns.forEach(function (column) {
        tableRow.appendChild(buildCell(row, column));
      });

      body.appendChild(tableRow);
    });
  }

  fetch(table.getAttribute("data-ranking-src"), { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not load ranking CSV.");
      }
      return response.text();
    })
    .then(renderTable)
    .catch(function () {
      showEmptyState("Ranking data could not be loaded. Please use the CSV download link.", 1);
    });
}());
