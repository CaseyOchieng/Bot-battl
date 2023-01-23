import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ collection, clickHandler, deleteHandler }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        {"CLICK ON A BOT TO ADD."}
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} deleteHandler={deleteHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;