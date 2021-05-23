
fetch("http://dummy.restapiexample.com/api/v1/employees").then(
  res => {
    res.json().then(
      userProperties => {
        if (userProperties.data.length > 0) {
          console.log(userProperties)
          var item = "";
            //empieza el loop
          userProperties.data.forEach((itemData) => {
            item += "<tr>";
            item += "<td>" + itemData.id + "</td>";
            item += "<td>" + itemData.employee_name + "</td>";
            item += "<td>" + itemData.employee_age + "</td>";
            item += "<td>" + itemData.employee_salary + "</td></tr>";
          });
            //termina el lopp
          document.getElementById('data_container').innerHTML = item;
        }
      }
    )
  }
)