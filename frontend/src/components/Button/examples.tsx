import React, { useState } from "react";
import Button from "./Button";

export const ButtonExamples: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h1>Button Component Examples</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="border">Border</Button>
          <Button variant="icon">Icon</Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Sizes</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>States</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button onClick={handleLoadingClick} loading={isLoading}>
            {isLoading ? "Loading..." : "Click to Load"}
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Full Width</h2>
        <div style={{ marginBottom: "20px" }}>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Types</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button type="button">Button</Button>
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Combinations</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button variant="primary" size="large" fullWidth>
            Large Primary Full Width
          </Button>
          <Button variant="secondary" size="small" disabled>
            Small Secondary Disabled
          </Button>
          <Button variant="border" size="medium" loading>
            Medium Border Loading
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>With Icons</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button variant="primary">
            <span>🚀</span> Launch
          </Button>
          <Button variant="secondary">
            <span>💾</span> Save
          </Button>
          <Button variant="border">
            <span>📧</span> Send Email
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Interactive Examples</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            onClick={() => alert("Primary button clicked!")}
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log("Secondary button clicked!")}
          >
            Console Log
          </Button>
          <Button variant="border" onClick={() => prompt("Enter your name:")}>
            Prompt
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Accessibility</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Button aria-label="Close dialog" title="Close this dialog">
            ✕
          </Button>
          <Button aria-label="Open menu" title="Click to open menu">
            ☰
          </Button>
          <Button aria-label="Search" title="Click to search">
            🔍
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
