import { useState } from "react";

export const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, SetExpand] = useState(false);
  const [showInput, SetShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleFolderClick = (e, isFolder) => {
    e.stopPropagation();
    SetExpand(true);
    SetShowInput({
      visible: true,
      isFolder,
    });
  };
  const onAddKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, 
        showInput.isFolder);
      SetShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div>
        <div style={{ background: "#ccc", marginLeft: "30px" }}>
          <span
            onClick={() => {
              SetExpand(!expand);
            }}
          >
            📂{explorer.name}
          </span>
          <button
            style={{
              border: "1px solid #000",
              padding: "5px 10px",
              margin: "5px 0px 5px 40px",
            }}
            onClick={(e) => {
              return handleFolderClick(e, true);
            }}
          >
            +Folder
          </button>
          <button
            style={{
              border: "1px solid #000",
              padding: "5px 10px",
              margin: "5px 10px 5px 0px",
            }}
            onClick={(e) => {
              return handleFolderClick(e, false);
            }}
          >
            +File
          </button>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span className=""> {showInput.isFolder ? " 📂" : "📃"} </span>
              <input
                autoFocus
                type="text"
                onBlur={() => {
                  SetShowInput({ ...showInput, visible: false });
                }}
                placeholder={
                  showInput.isFolder ? "enter folder name" : "enter file name"
                }
                className="inputContainer__input"
                onKeyDown={onAddKeyDown}
              />
            </div>
          )}
          {explorer.items.map((obj) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={obj}
                key={obj.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃{explorer.name}</span>;
  }
};
