import React from 'react';

class Note extends React.Component {

  onSubmit(e) {
    console.log("Submit!");
  }
  render () {
    const { note } = this.props;

    return (
      <div className='note-container'>
        <form className="note-form" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="note-title-input"
            type="text"
            placeholder="note Title..."
            defaultValue={note.title}
          />
          <textarea
            className="note-textarea"
            placeholder="Type Here..."
            defaultValue={note.content}
          />
          <input className="note-button" type="submit" value="submit" />
        </form>
      </div>
    );
  }

}

export default Note;