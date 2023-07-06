import React, { useEffect, useState } from "react";
import Chat from "./page/chat/Chat";
import Login from "./page/login/Login";
import { currentPage$, usePage } from "./page/state/rxjs";
import SingUp from "./page/singup/Singup";
import compteService from "./service/countService";

const App = () => {
  const [page, setPage] = useState("");

  useEffect((_) => {
    currentPage$.subscribe((p) => setPage(p));
    if (compteService.getStorage) {
      currentPage$.next("CHAT");
    }
  }, []);
  console.log(page);

  const renderPage = () => {
    if (page === "CREATE_COMPTE") return <SingUp />;
    if (page === "LOGIN" || !compteService.getStorage()) return <Login />;
    if (page === "CHAT") return <Chat />;
  };
  return <div>{renderPage()}</div>;
};

export default App;
