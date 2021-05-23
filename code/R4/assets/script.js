
fetch("http://dummy.restapiexample.com/api/v1/employees").then(
  res => {
    res.json().then(
      data => {
        if (data.data.length > 0) {
          var item = "";
            //empieza el loop
          data.data.forEach((itemData) => {
            item += "<tr>";
            item += "<td>" + itemData.id + "</td>";
            item += "<td>" + itemData.employee_name + "</td>";
            item += "<td>" + itemData.employee_age + "</td>";
            item += "<td>" + itemData.employee_salary + "</td></tr>";
          });
            //termina el lopp
          document.getElementById('data').innerHTML = item;
        }
      }
    )
  }
)