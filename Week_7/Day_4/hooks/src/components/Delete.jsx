import React from 'react';

/* function toDelete(){
  deleteBook(bookId)
}
 */

function Delete(props) {
  const { deleteBook, bookId } = props;
  return (
    <div>
      <button onClick={() => deleteBook(bookId)}>Delete</button>
    </div>
  );
}

export default Delete;
