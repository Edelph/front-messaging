import { BehaviorSubject } from "rxjs";
import { useEffect, useReducer, useState } from "react";
import compteService from "../../service/countService";

export const currentPage$ = new BehaviorSubject("LOGIN");

const users = [];

export const userToTalk$ = new BehaviorSubject(null);

export const users$ = new BehaviorSubject(users);

export const setCurrentUser = (user) => {
  if (
    userToTalk$.getValue() === null ||
    userToTalk$.getValue().codeClient !== user.codeClient
  ) {
    userToTalk$.next(user);
  }
};

export const useUserToTalk = () => {
  const [userToTalk, setUserToTalk] = useState(null);
  useEffect((_) => {
    userToTalk$.subscribe((user) => setUserToTalk(user));
  }, []);
  return userToTalk;
};

export const UseUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect((_) => {
    users$.subscribe((users) => setUsers([...users]));
    console.log(compteService.getStorage().codeClient);
    compteService.getAllUsers().then((resp) => {
      const data = resp.data.filter(
        (user) => user.codeClient !== compteService.getStorage().codeClient
      );
      users$.next(data);
    });
  }, []);

  return users;
};
