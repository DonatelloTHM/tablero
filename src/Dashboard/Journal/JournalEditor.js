import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./JournalEditor.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

export class JournalEditor extends Component {
  state = {
    title: "",
    content: "",
    unformatted: "",
    id: 0,
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.id !== this.state.id) {
      this.setState({
        content: nextProps.content,
        id: nextProps.id,
        title: nextProps.title,
        unformatted: nextProps.unformatted,
      });
    }
  }

  handleInput = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChange = (value, delta, source, editor) => {
    this.setState({ content: value, unformatted: editor.getText() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handlePostJournal(this.state);
    this.setState({
      title: "",
      content: "",
      unformatted: "",
      id: 0,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
  };

  newJournal = () => {
    // this.setState({ title: "", content: "", unformatted: "", id: 0 });
    this.props.handleView({ title: "", content: "", unformatted: "", id: 0 });
  };

  modules = {
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      [{ syntax: true }],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
    "font",
    "syntax",
  ];

  render() {
    return (
      <div className="journal-editor scale-in-br">
        {this.state.id ? (
          <form onSubmit={this.handleUpdate} className="journal-form">
            <input
              className="journal-title"
              type="text"
              value={this.state.title}
              onChange={this.handleInput}
              placeholder="Title..."
            />

            <input className="journal-submit" type="submit" value="Save" />
            <button onClick={this.newJournal} className="journal-submit">
              New
            </button>
          </form>
        ) : (
          <form onSubmit={this.handleSubmit} className="journal-form">
            <input
              className="journal-title"
              type="text"
              value={this.state.title}
              onChange={this.handleInput}
              placeholder="Title..."
            />

            <input className="journal-submit" type="submit" />
          </form>
        )}

        <ReactQuill
          className="react-quill"
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={this.state.content}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default JournalEditor;
