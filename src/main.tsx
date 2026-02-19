import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Spinner from "./ui/loader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
        <ChakraProvider theme={theme}>
    <Suspense fallback={<Spinner></Spinner>}>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </Suspense>
        </ChakraProvider>
  </RecoilRoot>
);
