import React from "react";

class Priority extends React.Component {
  render() {
    return (
      <div style={{
        width: 13,
        height: 13,
        borderRadius: 10,
        display: "inline-block",
        marginRight: 10,
        background: (this.props.priority === "LOW" ? "yellow" : (this.props.priority === "MEDIUM" ? "orange" : "red"))
      }}>
      </div>
    )
  }
}

export default Priority;