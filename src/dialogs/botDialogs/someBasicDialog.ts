import * as builder from 'botbuilder';
import { injectable, inject } from "inversify";

import * as contracts  from '../../contract/contracts';

@injectable()
class someBasicDialog implements contracts.IDialog{
    
    public id:string = 'someBasicDialog';
    public name:string ='someBasicDialog';

    public get waterfall(): builder.IDialogWaterfallStep[]{
        return [this.step1, this.step2];
    }

    private step1(session, args, next){
        const botName = 'Jordo';
        const description = `LKjsdflkdfj`;

        session.send(`Hi there! I'm ${botName}`);
        session.send(`In a nutshell, here's what I can do:\n\n${description}`);

        builder.Prompts.text(session, `What's your name?`);
    }

    private step2(session, results, next){
        session.endConversation(`Welcome, ${results.response}`);
    }
}

export default someBasicDialog;