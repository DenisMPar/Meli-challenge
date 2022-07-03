import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
