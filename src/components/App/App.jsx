import { useState } from 'react'
import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';

import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Profile
      image={userData.avatar}
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      
      stats={userData.stats}
    />

      <hr />

      <FriendList friends={friends} />

      <hr />

      <TransactionHistory items={transactions} />
  </>     
  )
 

}

