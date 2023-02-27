function StudentList(props) {
  return (
    <div className="dark">
      <h1>Student List</h1>
      <hr />
      {props.children}
    </div>
  );
}

export default StudentList;
