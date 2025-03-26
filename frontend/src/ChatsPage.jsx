 import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage= (props) => {

   const chatProps = useMultiChatLogic(
    'c5252340-f1d9-4454-ba2f-63e486b80a48',
    props.user.username,
    props.user.secret,
    
   );

   return (
  
     <div style={{height:'100vh'}} >
         <MultiChatSocket {...chatProps} />
         <MultiChatWindow {...chatProps } style={{height: '100%'}}/>
     </div>
   );

    
}
    
    export default ChatsPage;

