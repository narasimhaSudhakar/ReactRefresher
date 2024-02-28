import { useState } from "react";

export const Folder = ({ explorer }) => {
  let [expand, setExpand] = useState(false);
  let [showInput, SetShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div
          style={{
            background: "#eee",
            display: "inline-flex",
            padding: "5px 10px",
          }}
        >
          <span
            style={{ cursor: "hand" }}
            onClick={() => {
              return setExpand(!expand);
            }}
          >
            📁:{explorer.name}
          </span>
          <div style={{ background: "#eee", display: "inline-flex" }}>
            <button
            onClick={(e)=>{handleNewFolder(e)}}
              style={{
                marginLeft: "50px",
                border: "1px solid #000",
                padding: "0px 10px",
              }}
            >
              Folder+
            </button>
            <button style={{ border: "1px solid #000", padding: "0px 10px" }}>
              File+
            </button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {explorer.items.map((obj) => {
            return <Folder explorer={obj} key={obj.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📃{explorer.name}</span>;
  }
};
