import { Provider } from "react-redux";

import wrapper from "../state/store";
import "styles/global.css";

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
