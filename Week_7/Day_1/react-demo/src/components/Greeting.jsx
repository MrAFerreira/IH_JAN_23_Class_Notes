const student = {
  firstName: 'Le Duarte',
  lastName: 'frança',
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function Greeting() {
  return (
    <div>
      <h3>
        Hello {student.firstName.toUpperCase()} {capitalize(student.lastName)}
      </h3>
    </div>
  );
}

export default Greeting;
