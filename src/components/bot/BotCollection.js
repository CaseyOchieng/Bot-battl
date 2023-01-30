import React from "react";
import BotCard from "./BotCard";

function BotCollection({addBot, botCollection, dischargeBot}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {
        botCollection.map(bot => {
          return (
            <BotCard 
              handleBots={addBot}
              dischargeBot={dischargeBot}
              key={bot.id}
              bot={bot} 
            />
          )
        })
        }
        Bots collection
      </div>
    </div>
  );
}

export default BotCollection;