function StudentCard(props) {
  console.log(props);
  const { firstName, course, address, score } = props;
  return (
    <div>
      <h3> Name: {firstName}</h3>
      <h4>Course : {course}</h4>
      <h4>
        Address: {address.street}, {address.city}
      </h4>
      <h4>{score}</h4>
    </div>
  );
}

export default StudentCard;
