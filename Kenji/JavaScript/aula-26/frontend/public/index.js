import { birthdays, branch_lines, sectors } from './exports/employees.js';
import { render_data } from './exports/render_data.js';

document.getElementById('fetch_employees_button').addEventListener('click', () => getEmployeesData());

const getEmployeesData = async () => {
  const query = document.getElementById('query').value;
  const param = document.getElementById('param').value;

  switch (param) {
    case 'BIRTHDAY':
      const employeesByBirthday = await birthdays(query);
      if (employeesByBirthday.error) {
        console.error(employeesByBirthday.msg);
        render_data([employeesByBirthday]);
        break;
      };
      render_data(employeesByBirthday.data);
      break;

    case 'BRANCH LINE':
      const employeesByLine = await branch_lines(query);
      if (employeesByLine.error) {
        console.error(employeesByLine.msg);
        render_data([employeesByLine]);
        break;
      };
      render_data(employeesByLine.data);
      break;

    case 'SECTOR':
      const employeesBySector = await sectors(query);
      if (employeesBySector.error) {
        console.error(employeesBySector.msg);
        render_data([employeesBySector]);
        break;
      };
      render_data(employeesBySector.data);
      break;

    default:
      alert('please provide a parameter');
      break;
  }

}
