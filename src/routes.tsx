import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Page } from "./components/Page";
import { AddImageForm } from "./components/AddImageForm";
import { Account } from "./components/Account";
import { ImagePage } from "./components/ImagePage";
import { EditImagePage } from "./components/EditImagePage";

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Page />}>
      <Route index element={<Home />} />
      <Route path="add-image" element={<AddImageForm />} />
      <Route path="account" element={<Account />} />
      <Route path="image/:id" element={<ImagePage />} />
      <Route path="edit-image/:id" element={<EditImagePage />} />
    </Route>
  )
);

export default routes;