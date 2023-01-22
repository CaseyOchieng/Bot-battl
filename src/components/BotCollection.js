import React from "react";
import BotCard from "./BotCard";

function BotCollection({ collection, clickHandler, handleDelete }) {
  // Your code here
  return (
    <div className="ui four column grid">
      {" click on a bot to add it to your army and to remove all the bots refresh the page"}
      <div className="row">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;