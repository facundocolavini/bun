import React, { useState } from "react";
import Navbar from "./components/ui/Navbar";
{
  /* <div style={{display: "flex", flexDirection: "column"}}>
          <h1>{props.title}</h1>
          <Counter />
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/settings">Settings</a>
          </p>
        </div> */
}
export function Layout(props: { title: string; children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name={props.title}
          content="Web site created using create-react-app"
        />
        <title>{props.title}</title>
        <link rel="stylesheet" href="assets/output.css" />
      </head>
      <body>
        <div className="App" role="main">
          <Navbar/>
          <article className="App-article">
            {props.children}
          </article>
        </div>
      </body>
    </html>
  );
}