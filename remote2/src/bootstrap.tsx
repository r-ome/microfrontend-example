import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el: HTMLElement) => {
  ReactDOM.render(<App/>, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById('local-root')!;
  if (el) {
    mount(el);
  }
}

export { mount }