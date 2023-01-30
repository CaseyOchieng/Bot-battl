import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botBox, remBot, dischargeBot}) {

  return (
    <div className="ui segment white bot-army">
      <h1>Twoy games</h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
    
          {
            botBox.map(bot => {
              return (
                <BotCard 
                  key={`${bot.name}${bot.id}`}
                  handleBots={remBot}
                  dischargeBot={dischargeBot}
                  bot={bot}
                />
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;