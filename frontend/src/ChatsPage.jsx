import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps= useMultiChatLogic(
        'ea1adc82-e7f6-4e95-836e-4f296ae85130',
         props.user.username , 
         props.user.secret);
    return (
        <div style={{height : '100vh'}}>
            <MultiChatSocket {...chatProps}/>
             <MultiChatWindow {...chatProps} style={{height: '100%'}} 
        />    
        </div>
        )
}

export default ChatsPage